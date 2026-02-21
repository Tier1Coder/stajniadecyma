#!/usr/bin/env node
const { spawnSync } = require('node:child_process');
const path = require('node:path');

const ROOT = path.resolve(__dirname, '..');
const IMAGE_EXT_RE = /\.(jpe?g|png)$/i;

function run(cmd, args, opts = {}) {
  return spawnSync(cmd, args, { cwd: ROOT, encoding: 'utf8', ...opts });
}

function fail(message, code = 1) {
  console.error(message);
  process.exit(code);
}

const stagedResult = run('git', ['diff', '--cached', '--name-only', '--diff-filter=ACMR']);
if (stagedResult.status !== 0) {
  fail(stagedResult.stderr || 'Nie udało się odczytać staged files.');
}

const stagedFiles = stagedResult.stdout
  .split('\n')
  .map((s) => s.trim())
  .filter(Boolean);

const stagedImages = stagedFiles.filter(
  (file) => file.startsWith('public/') && IMAGE_EXT_RE.test(file)
);

if (!stagedImages.length) {
  process.exit(0);
}

const webpGen = run('python3', ['scripts/generate-webp.py', '--quiet', ...stagedImages], {
  stdio: 'inherit',
});
if (webpGen.status !== 0) {
  fail('Generowanie WebP nie powiodło się.', webpGen.status || 1);
}

const webpFiles = stagedImages.map((file) => file.replace(IMAGE_EXT_RE, '.webp'));
const addResult = run('git', ['add', '--', ...webpFiles], { stdio: 'inherit' });
if (addResult.status !== 0) {
  fail('Nie udało się dodać wygenerowanych plików .webp do commita.', addResult.status || 1);
}

process.exit(0);
