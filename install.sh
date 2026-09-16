#!/usr/bin/env bash
# install.sh — one-line installer for boucle.
#
#   curl -fsSL https://boucle.dev/install.sh | bash
#
# Clones the boucle engine into .boucle/ (if not already present) and runs
# bin/setup, which auto-detects your forge (GitHub/GitLab) from the origin
# git remote. Idempotent: safe to run multiple times. Exits non-zero on
# failure with a clear error message.
set -euo pipefail

ENGINE_URL="${BOUCLE_ENGINE_URL:-https://github.com/ankaboot-source/boucle}"
ENGINE_DIR=".boucle"

# ── 1. Ensure we are inside a git repository ─────────────────────────
if ! git rev-parse --is-inside-work-tree > /dev/null 2>&1; then
  echo "Error: boucle must be installed inside a git repository." >&2
  echo "       Run this installer from the root of your project." >&2
  exit 1
fi

# ── 2. Fetch the engine (idempotent) ─────────────────────────────────
if [ -d "$ENGINE_DIR" ] && [ -f "$ENGINE_DIR/bin/setup" ]; then
  echo "boucle engine already present at $ENGINE_DIR/ — skipping clone."
else
  echo "Cloning the boucle engine into $ENGINE_DIR/ ..."
  if [ -d "$ENGINE_DIR" ]; then
    echo "Error: $ENGINE_DIR/ exists but is incomplete (missing bin/setup)." >&2
    echo "       Remove it and re-run, or add it as a submodule:" >&2
    echo "       git submodule add $ENGINE_URL $ENGINE_DIR" >&2
    exit 1
  fi
  if ! git clone --depth 1 "$ENGINE_URL" "$ENGINE_DIR"; then
    echo "Error: failed to clone the boucle engine from $ENGINE_URL." >&2
    echo "       Check your network connection and try again." >&2
    exit 1
  fi
fi

# ── 3. Run setup (auto-detects forge from the origin remote) ─────────
echo ""
echo "Running boucle setup ..."
"$ENGINE_DIR/bin/setup" "$@"
