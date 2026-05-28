#!/usr/bin/env node
/**
 * Validate _data/journey.yml structure (run after editing milestones).
 * Usage: node scripts/verify-journey-data.js
 */
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const dataPath = path.join(root, '_data', 'journey.yml');

if (!fs.existsSync(dataPath)) {
  console.error('Missing _data/journey.yml');
  process.exit(1);
}

const raw = fs.readFileSync(dataPath, 'utf8');
const laneIds = new Set();
let milestoneCount = 0;
let errors = 0;

const lines = raw.split('\n');
let inLanes = false;
let inMilestones = false;
let current = {};

function flush() {
  if (!current.title) return;
  milestoneCount += 1;
  if (!current.sort || !current.lane || !current.start || !current.title) {
    console.error('Invalid milestone:', current.title || '(untitled)');
    errors += 1;
  }
  if (current.lane && !laneIds.has(current.lane)) {
    console.error('Unknown lane for', current.title, ':', current.lane);
    errors += 1;
  }
  if (current.link && !current.link.startsWith('/')) {
    console.error('Link must be site-relative:', current.title, current.link);
    errors += 1;
  }
  current = {};
}

for (const line of lines) {
  if (line.trim() === 'lanes:') {
    inLanes = true;
    inMilestones = false;
    continue;
  }
  if (line.trim() === 'milestones:') {
    inMilestones = true;
    inLanes = false;
    continue;
  }
  if (inLanes && line.match(/^\s+- id:/)) {
    const id = line.split(':')[1].trim().replace(/^["']|["']$/g, '');
    laneIds.add(id);
    continue;
  }
  if (!inMilestones) continue;
  if (line.match(/^  - sort:/)) {
    flush();
    current = { sort: line.split(':')[1].trim() };
    continue;
  }
  if (line.match(/^    /) && line.includes(':')) {
    const m = line.match(/^\s+(\w+):\s*(.*)$/);
    if (m) current[m[1]] = m[2].replace(/^["']|["']$/g, '').trim();
  }
}
flush();

if (laneIds.size < 6) {
  console.error('Expected at least 6 lanes, got', laneIds.size);
  errors += 1;
}

if (milestoneCount < 10) {
  console.error('Expected at least 10 milestones, got', milestoneCount);
  errors += 1;
}

if (errors) {
  console.error('\nFAIL:', errors, 'error(s)');
  process.exit(1);
}

console.log(
  '\x1b[32mPASS:\x1b[0m',
  milestoneCount,
  'milestones,',
  laneIds.size,
  'lanes'
);
