import csv
import json
from datetime import datetime, timezone
from pathlib import Path

TELEGRAM_URL = "https://t.me/+0tgMl32I9foxMmNh"
FIELDS = ["submitted_at", "first_name", "last_name", "email", "business_name", "role"]
CSV_PATH = Path("/tmp/aiclub_members.csv")

def handler(request):
    if request.method != "POST":
        return {
            "statusCode": 405,
            "headers": {"Content-Type": "application/json"},
            "body": json.dumps({"ok": False, "error": "Method not allowed"})
        }

    try:
        payload = json.loads(request.body or "{}")
    except Exception:
        return {
            "statusCode": 400,
            "headers": {"Content-Type": "application/json"},
            "body": json.dumps({"ok": False, "error": "Invalid JSON"})
        }

    row = {
        "submitted_at": datetime.now(timezone.utc).isoformat(),
        "first_name": str(payload.get("first_name", "")).strip(),
        "last_name": str(payload.get("last_name", "")).strip(),
        "email": str(payload.get("email", "")).strip(),
        "business_name": str(payload.get("business_name", "")).strip(),
        "role": str(payload.get("role", "")).strip(),
    }

    if not all([row["first_name"], row["last_name"], row["email"], row["business_name"], row["role"]]):
        return {
            "statusCode": 400,
            "headers": {"Content-Type": "application/json"},
            "body": json.dumps({"ok": False, "error": "Missing required fields"})
        }

    write_header = not CSV_PATH.exists()
    with CSV_PATH.open("a", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=FIELDS)
        if write_header:
            writer.writeheader()
        writer.writerow(row)

    return {
        "statusCode": 200,
        "headers": {"Content-Type": "application/json"},
        "body": json.dumps({"ok": True, "redirect_url": TELEGRAM_URL})
    }
