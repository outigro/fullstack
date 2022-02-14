// reading module
var fs = require("fs");

// start reading file - an error might happen
try{

// read file content to a variable
var data = fs.readFileSync("firstFile.txt");

// print out content of the file
console.log("Read from the file:");
console.log(data.toString());

// catch error when it occurs
} catch (err){
  console.log("Error: "+err);
}

//reading asyncronig:
//var fs = require('fs');

//var data = fs.readFile('example.txt', function (err, data) {
//    if (err) {
//      console.log('Error occurs!');
//  }
//  console.log('File read:');
// console.log(data.toString());
//})