const fs = require('fs');
const path = require('path');

const TELEGRAM_URL = 'https://t.me/+0tgMl32I9foxMmNh';
const FIELDS = ['submitted_at', 'first_name', 'last_name', 'email', 'business_name', 'role'];
const CSV_PATH = '/tmp/aiclub_members.csv';

function parseBody(body) {
  if (!body) return {};
  if (typeof body === 'object') return body;
  if (typeof body === 'string') return JSON.parse(body);
  return {};
}

function csvEscape(value) {
  const text = String(value ?? '');
  if (/[",\n\r]/.test(text)) return `"${text.replace(/"/g, '""')}"`;
  return text;
}

module.exports = function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ ok: false, error: 'Method not allowed' });
    return;
  }

  let payload;
  try {
    payload = parseBody(req.body);
  } catch (_error) {
    res.status(400).json({ ok: false, error: 'Invalid JSON' });
    return;
  }

  const row = {
    submitted_at: new Date().toISOString(),
    first_name: String(payload.first_name || '').trim(),
    last_name: String(payload.last_name || '').trim(),
    email: String(payload.email || '').trim(),
    business_name: String(payload.business_name || '').trim(),
    role: String(payload.role || '').trim(),
  };

  if (!row.first_name || !row.last_name || !row.email || !row.role) {
    res.status(400).json({ ok: false, error: 'Missing required fields' });
    return;
  }

  const writeHeader = !fs.existsSync(CSV_PATH);
  const line = FIELDS.map((field) => csvEscape(row[field])).join(',') + '\n';
  if (writeHeader) {
    fs.writeFileSync(CSV_PATH, FIELDS.join(',') + '\n' + line, 'utf8');
  } else {
    fs.appendFileSync(CSV_PATH, line, 'utf8');
  }

  res.status(200).json({ ok: true, redirect_url: TELEGRAM_URL });
};
