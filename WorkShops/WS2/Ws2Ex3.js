// writing module
var fs = require("fs");

// start writing file - an error might happen
try{

// write file content to a variable
var data = fs.writeFileSync("firstFile.txt");

// print out content of the file
console.log("Write to the file:");
console.log(data.toString());

// catch error when it occurs
} catch (err){
  console.log("Error: "+err);
}