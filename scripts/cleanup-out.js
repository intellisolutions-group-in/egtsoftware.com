// Simple cleanup script for Next.js static export
const fs = require('fs');
const path = require('path');

const outDir = path.join(process.cwd(), 'out');

console.log('🧹 Cleaning up Next.js build artifacts...\n');

let deletedFiles = 0;
let deletedDirs = 0;

// Recursively delete files and directories
function cleanDir(dirPath) {
  if (!fs.existsSync(dirPath)) return;

  const items = fs.readdirSync(dirPath);

  items.forEach(item => {
    const itemPath = path.join(dirPath, item);
    const stat = fs.statSync(itemPath);

    if (stat.isDirectory()) {
      // Recursively clean subdirectories first (including blog and services)
      cleanDir(itemPath);

      // NEVER delete these critical directories!
      if (item === '_next' || item === 'assets' || item === 'blog' || item === 'services') {
        return; // Don't delete these, but we still cleaned inside them
      }

      // Delete directory if:
      // - It starts with __next (but NOT _next)
      // - It's _not-found
      // - It's empty after cleaning
      try {
        const remaining = fs.readdirSync(itemPath);
        if (
          item.startsWith('__next') ||
          item === '_not-found' ||
          remaining.length === 0
        ) {
          fs.rmSync(itemPath, { recursive: true, force: true });
          console.log(`✅ Deleted dir: ${path.relative(outDir, itemPath)}`);
          deletedDirs++;
        }
      } catch (err) {
        // Directory already deleted or not accessible
      }
    } else {
      // Delete file if:
      // - It's a .txt file
      // - It starts with __next
      if (
        item.endsWith('.txt') ||
        item.startsWith('__next') ||
        item === '.DS_Store' ||
        item === 'Thumbs.db'
      ) {
        fs.unlinkSync(itemPath);
        console.log(`✅ Deleted file: ${path.relative(outDir, itemPath)}`);
        deletedFiles++;
      }
    }
  });
}

// Directories to completely remove
const dirsToRemove = [
  'about', 'contact', 'careers', 'case-studies',
  'industries', 'pricing', 'privacy',
  'resources', 'support', 'team', 'terms', 'testimonials'
];

console.log('🗑️  Removing empty metadata directories...\n');

dirsToRemove.forEach(dir => {
  const dirPath = path.join(outDir, dir);
  if (fs.existsSync(dirPath)) {
    try {
      fs.rmSync(dirPath, { recursive: true, force: true });
      console.log(`✅ Removed: ${dir}/`);
      deletedDirs++;
    } catch (err) {
      console.log(`⏭️  Skipped: ${dir}/ (${err.message})`);
    }
  }
});

console.log('\n🧹 Cleaning metadata files...\n');
cleanDir(outDir);

console.log('\n📊 Cleanup Summary:');
console.log(`   Files deleted: ${deletedFiles}`);
console.log(`   Directories deleted: ${deletedDirs}`);
console.log('\n✅ Build artifacts cleaned! Ready to deploy.\n');

