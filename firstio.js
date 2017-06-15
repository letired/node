var fs = require('fs');

var filePath = process.argv[2];

var buf = fs.readFileSync(filePath);

var str = buf.toString();

var ary = str.split('\n');

console.log(ary.length - 1);
