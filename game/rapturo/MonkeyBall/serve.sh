#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PORT="${1:-27016}"
HOST="${2:-0.0.0.0}"

cd "$ROOT_DIR"

echo "Serving SMB gameplay at http://${HOST}:${PORT}/"

if [[ "$HOST" == "0.0.0.0" ]] || [[ "$HOST" == "::" ]]; then
  PUBLIC_IP=""
  if command -v curl >/dev/null 2>&1; then
    PUBLIC_IP="$(curl -fsS https://api.ipify.org || true)"
  elif command -v wget >/dev/null 2>&1; then
    PUBLIC_IP="$(wget -qO- https://api.ipify.org || true)"
  fi

  if [[ -n "$PUBLIC_IP" ]]; then
    echo "Public URL: http://${PUBLIC_IP}:${PORT}/"
  else
    echo "Public URL: http://<your-public-ip>:${PORT}/"
  fi
fi

if command -v python3 >/dev/null 2>&1; then
  python3 -m http.server "$PORT" --bind "$HOST"
elif command -v python >/dev/null 2>&1; then
  python -m http.server "$PORT" --bind "$HOST"
else
  echo "Error: Python is required to run the local server."
  exit 1
fi
