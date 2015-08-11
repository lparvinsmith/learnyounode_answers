// Write a program that uses a single synchronous filesystem operation to read a file and print the number of newlines (\n) it contains to the console (stdout), similar to running cat file | wc -l.

//require fs module from the Node core library
var fs = require('fs');

//returns a Buffer object containing the complete contents of the file
//file is at index 2 in array after [ 'node', '/path/to/your/program.js',
var buffer = fs.readFileSync(process.argv[2]);

//convert buffer object to string
var string = buffer.toString();

//split string by new lines
var newLines = string.split('\n').length;

//print number of new lines to console, subtracts one for last line
console.log(newLines - 1);
