const fs = require('fs');

const data = fs.readFileSync(process.argv[2], 'utf8');

console.log(data.split('\n').length - 1);
