#!/usr/bin/env python3
"""Rebuild _pages/publications.md from git HEAD + fragment files."""
from pathlib import Path
import subprocess
import re

ROOT = Path(__file__).resolve().parents[1]
pub_path = ROOT / "_pages/publications.md"

head = pub_path.read_text().split("## Professional Presentations")[0]

old = subprocess.run(
    ["git", "show", "HEAD:_pages/publications.md"],
    capture_output=True,
    text=True,
    cwd=ROOT,
).stdout
ac_start = old.index("## Academic Presentations")
academic = old[ac_start : old.index("<script>", ac_start)]

# Remove KLIMAKA webinar block (moved to Professional Presentations)
parts = academic.split('<h3 id="klimaka-ai-webinar">')
if len(parts) == 2:
    before, after = parts[0], parts[1]
    close_idx = after.rfind("</motion>\n</motion>")
    if close_idx == -1:
        close_idx = after.rfind("</div>\n</div>")
    if close_idx != -1:
        academic = before.rstrip() + "\n"
    else:
        raise SystemExit("Could not find end of klimaka-ai-webinar block")

for a, b in [
    ("changeImageUekPub(-1)", "PubGallery.change('uek-gallery', -1)"),
    ("changeImageUekPub(1)", "PubGallery.change('uek-gallery', 1)"),
    ("currentImageUekPub(0)", "PubGallery.go('uek-gallery', 0)"),
    ("currentImageUekPub(1)", "PubGallery.go('uek-gallery', 1)"),
    ("changeImageHsbcSummer(-1)", "PubGallery.change('hsbc-summer-gallery', -1)"),
    ("changeImageHsbcSummer(1)", "PubGallery.change('hsbc-summer-gallery', 1)"),
    ("currentImageHsbcSummer(0)", "PubGallery.go('hsbc-summer-gallery', 0)"),
    ("currentImageHsbcSummer(1)", "PubGallery.go('hsbc-summer-gallery', 1)"),
]:
    academic = academic.replace(a, b)

phd_block = (ROOT / "scripts/_phd_block.html").read_text()
professional = (ROOT / "scripts/_professional_block.html").read_text()

academic = academic.replace(
    "## Academic Presentations {#academic-presentations}\n",
    "## Academic Presentations {#academic-presentations}\n" + phd_block,
)

out = (
    head
    + professional
    + "\n"
    + academic
    + '\n<script src="/assets/js/publications-galleries.js"></script>\n'
)

if "university-academy-2025" not in out or "hsbc-summer-school-2025" not in out:
    raise SystemExit("Missing UEK/HSBC academic presentations")
if out.count('id="klimaka-gallery"') != 1:
    raise SystemExit("Expected exactly one klimaka-gallery (Professional section)")
if "changeImageKlimaka" in out:
    raise SystemExit("Orphan klimaka gallery handlers remain")

pub_path.write_text(out)
print("OK", len(out))
