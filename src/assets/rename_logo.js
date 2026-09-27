const fs = require('fs');
const path = require('path');

const srcPath = path.join(__dirname, '759664045_17882693088675403_1786929942805645619_n (1).heic');
const destPath = path.join(__dirname, 'logo.jpg');

if (fs.existsSync(srcPath)) {
  fs.renameSync(srcPath, destPath);
  console.log('Renamed successfully to logo.jpg');
} else {
  console.log('Source file not found');
}
