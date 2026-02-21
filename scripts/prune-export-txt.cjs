const fs = require('fs');
const path = require('path');

const OUT_DIR = path.join(process.cwd(), 'out');

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...walk(fullPath));
      continue;
    }
    files.push(fullPath);
  }

  return files;
}

function main() {
  if (!fs.existsSync(OUT_DIR)) {
    console.log('Brak katalogu out/, pomijam usuwanie plikow .txt');
    return;
  }

  const files = walk(OUT_DIR);
  const txtFiles = files.filter((filePath) => path.basename(filePath) === 'index.txt');

  for (const filePath of txtFiles) {
    fs.unlinkSync(filePath);
  }

  console.log(`Usunieto pliki index.txt: ${txtFiles.length}`);
}

main();
