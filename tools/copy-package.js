const fs = require('fs');

let resizable = fs.readFileSync('package.json').toString();
let readme = fs.readFileSync('readme.md').toString();

fs.writeFileSync('dist/package.json', resizable);
fs.writeFileSync('dist/readme.md', readme);