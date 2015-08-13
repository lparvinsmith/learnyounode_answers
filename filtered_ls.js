// Create a program that prints a list of files in a given directory, filtered by the extension of the files. You will be provided a directory name as the first argument to your program (e.g. '/path/to/dir/') and a file extension to filter by as the second argument.

var fs = require('fs'),
  path = require('path');

//SOLUTION ONE
//reads directory and prints filenames to console if they match extname of process.arg[3]
// fs.readdir(process.argv[2], function(err, list){
//   list.forEach(function(filename){
//     if (path.extname(filename) === ("." + process.argv[3]) ){
//       console.log(filename);
//     };
//   });
// });

//SOLUTION TWO
//reads directory and filters using callback
fs.readdir(process.argv[2], function(err, list){
  list.filter(function(filename){
    return path.extname(filename) === ("." + process.argv[3]);
  }).forEach(function(filteredFilename){
    console.log(filteredFilename);
  });
});
