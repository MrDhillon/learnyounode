var fs = require('fs');
var buffer = fs.readFileSync(process.argv[2]);
var file = buffer.toString();
var file_lines = file.split('\n');
console.log(file_lines.length - 1);

// file = buffer.toString().split("/n").length -1
// console.log(file);