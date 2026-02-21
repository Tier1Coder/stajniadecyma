#!/usr/bin/env node
const { spawnSync } = require('node:child_process');
const path = require('node:path');
const fs = require('node:fs');

const ROOT = path.resolve(__dirname, '..');
const hooksDir = path.join(ROOT, '.githooks');

if (!fs.existsSync(path.join(ROOT, '.git'))) {
  process.exit(0);
}

if (!fs.existsSync(hooksDir)) {
  process.exit(0);
}

const result = spawnSync('git', ['config', 'core.hooksPath', '.githooks'], {
  cwd: ROOT,
  stdio: 'ignore',
});

process.exit(result.status || 0);
