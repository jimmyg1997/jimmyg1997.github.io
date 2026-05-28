#!/usr/bin/env bash
# Verify agent harness files exist and site builds.
set -e
cd "$(dirname "$0")/.."

echo "== Agent harness files =="
required=(
  AGENTS.md
  WORKFLOW.md
  LIMITATIONS.md
  MEMORY.md
  SKILLS.md
  CURSOR.md
  PLAN.md
  RESOLUTION.md
  .cursor/skills/frontend-design/SKILL.md
  .cursor/skills/review-gate/SKILL.md
  .cursor/rules/workflow-gates.mdc
)
for f in "${required[@]}"; do
  test -f "$f" || { echo "MISSING: $f"; exit 1; }
  echo "  ok $f"
done

echo "== Journey data test =="
node scripts/verify-journey-data.js

echo "== Jekyll build =="
bundle exec jekyll build

echo "== All harness checks passed =="
