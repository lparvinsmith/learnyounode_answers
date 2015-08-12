// Write a program that uses a single asynchronous filesystem operation to read a file and print the number of newlines it contains to the console (stdout), similar to running cat file | wc -l.

//require fs module from the Node core library
var fs = require('fs');

// first argument gets contents of file
// second argument is callback function to count number of newlines
var lineCount = fs.readFile(process.argv[2], function(err, data) {
  var lines;
  if (err) {
    return err;
  }
  else {
    lines = data.toString().split('\n').length - 1
  }
  console.log(lines);
});

// callback syntax:
// function callback (err, data) { /* ... */ }
// check if an error occurred by checking whether the first argument is truthy. If there is no error, you should have your Buffer object as the second argument.

//OFFICIAL SOLUTION:
// var fs = require('fs')
// var file = process.argv[2]

// fs.readFile(file, function (err, contents) {
//   // fs.readFile(file, 'utf8', callback) can also be used
//   var lines = contents.toString().split('\n').length - 1
//   console.log(lines)
// })
