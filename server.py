#!/usr/bin/env python3
import csv
import json
from datetime import datetime, timezone
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path

ROOT = Path(__file__).resolve().parent
CSV_PATH = ROOT / 'cornerstone_members.csv'
TELEGRAM_URL = 'https://t.me/+0tgMl32I9foxMmNh'
FIELDS = ['submitted_at', 'first_name', 'last_name', 'email', 'business_name', 'role']

class Handler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(ROOT), **kwargs)

    def do_POST(self):
        if self.path not in ['/join', '/api/join']:
            self.send_error(404)
            return
        length = int(self.headers.get('Content-Length', '0'))
        raw = self.rfile.read(length)
        try:
            payload = json.loads(raw.decode('utf-8'))
        except Exception:
            self.send_error(400, 'Invalid JSON')
            return

        row = {
            'submitted_at': datetime.now(timezone.utc).isoformat(),
            'first_name': str(payload.get('first_name', '')).strip(),
            'last_name': str(payload.get('last_name', '')).strip(),
            'email': str(payload.get('email', '')).strip(),
            'business_name': str(payload.get('business_name', '')).strip(),
            'role': str(payload.get('role', '')).strip(),
        }
        if not all([row['first_name'], row['last_name'], row['email'], row['business_name'], row['role']]):
            self.send_error(400, 'Missing required fields')
            return

        write_header = not CSV_PATH.exists()
        with CSV_PATH.open('a', newline='', encoding='utf-8') as f:
            writer = csv.DictWriter(f, fieldnames=FIELDS)
            if write_header:
                writer.writeheader()
            writer.writerow(row)

        body = json.dumps({'ok': True, 'redirect_url': TELEGRAM_URL}).encode('utf-8')
        self.send_response(200)
        self.send_header('Content-Type', 'application/json')
        self.send_header('Content-Length', str(len(body)))
        self.end_headers()
        self.wfile.write(body)

if __name__ == '__main__':
    server = ThreadingHTTPServer(('0.0.0.0', 4174), Handler)
    print('Serving on http://127.0.0.1:4174')
    server.serve_forever()
