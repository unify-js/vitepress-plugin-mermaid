import { copyFileSync, mkdirSync, readdirSync, statSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

function copyDir(src, dest, filter) {
  mkdirSync(dest, { recursive: true });
  const entries = readdirSync(src);

  for (const entry of entries) {
    const srcPath = resolve(src, entry);
    const destPath = resolve(dest, entry);
    const stat = statSync(srcPath);

    if (stat.isDirectory()) {
      copyDir(srcPath, destPath, filter);
    } else if (!filter || filter(entry)) {
      copyFileSync(srcPath, destPath);
    }
  }
}

const srcDir = resolve(__dirname, '../src/components');
const destDir = resolve(__dirname, '../dist/components');

// Copy all files from src/components to dist/components
copyDir(srcDir, destDir);
console.log('✓ Copied components to dist/');
