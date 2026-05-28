#!/usr/bin/env bash
# Restart Jekyll: kill whatever is on port 4000, then serve.
# Usage: ./restart-jekyll.sh   or   ./restart-jekyll.sh --livereload

set -e
cd "$(dirname "$0")"

PORT=4000

echo "Stopping anything on port $PORT..."
if command -v lsof &>/dev/null; then
  PID=$(lsof -ti :$PORT 2>/dev/null || true)
  if [ -n "$PID" ]; then
    kill $PID 2>/dev/null || true
    sleep 2
    kill -9 $PID 2>/dev/null || true
    sleep 1
  fi
fi
pkill -f "jekyll serve" 2>/dev/null || true
sleep 1

echo "Starting Jekyll..."
bundle exec jekyll serve "$@"
