const fs = require('fs');
const path = require('path');

// Clean dist directory if it exists
const distDir = path.join(__dirname, 'dist');
if (fs.existsSync(distDir)) {
  fs.rmSync(distDir, { recursive: true, force: true });
}

// Create dist directory
fs.mkdirSync(distDir, { recursive: true });

// Copy files from src to dist
const srcDir = path.join(__dirname, 'src');
if (fs.existsSync(srcDir)) {
  const files = fs.readdirSync(srcDir);
  files.forEach(file => {
    const srcPath = path.join(srcDir, file);
    const distPath = path.join(distDir, file);
    
    // Only copy if it's a file (not a directory)
    if (fs.statSync(srcPath).isFile()) {
      fs.copyFileSync(srcPath, distPath);
      console.log(`Copied ${file} to dist/`);
    }
  });
}

console.log('Build completed successfully!');
console.log(`Output directory: ${distDir}`);
