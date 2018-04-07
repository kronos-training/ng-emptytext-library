const fs = require('fs');

const packageJSON = JSON.parse(fs.readFileSync('./dist/package.json').toString());

delete packageJSON.devDependencies;

delete packageJSON.scripts;

fs.writeFileSync('./dist/package.json', JSON.stringify(packageJSON, null, 2));