const fs = require('fs');
const path = require('path');

// Create dist directory if it doesn't exist
const distDir = path.join(__dirname, 'dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Copy HTML files
const srcDir = path.join(__dirname, 'src');
if (fs.existsSync(srcDir)) {
  const files = fs.readdirSync(srcDir);
  files.forEach(file => {
    const srcPath = path.join(srcDir, file);
    const distPath = path.join(distDir, file);
    fs.copyFileSync(srcPath, distPath);
    console.log(`Copied ${file} to dist/`);
  });
}

console.log('Build completed successfully!');
console.log(`Output directory: ${distDir}`);
