// Write a program that accepts one or more numbers as command-line arguments and prints the sum of those numbers to the console (stdout).

// var sumOfArgv = function(){
//   newArray = process.argv.shift(2);
//   newerArray = newArray.map(function(string){
//     return Number(string);
//   });
//   newerArray.reduce(function(previousValue, currentValue){
//     return previousValue + currentValue;
//   });
// };

// console.log(sumOfArgv());

var sum = 0;

for (var i = 2; i < process.argv.length; i++) {
  sum += Number(process.argv[i]);
};

console.log(sum);
