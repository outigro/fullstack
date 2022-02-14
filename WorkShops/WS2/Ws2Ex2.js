/ reading module
var fs = require("fs");

// start reading file - an error might happen
try{

	// read file content to a variable
	var data1 = fs.readFileSync("firstFile.txt");
	var data2 = fs.readFileSync("secondFile.txt");

	// print out content of the file
	console.log("Read from the first file:");
	console.log(data1.toString());
	
	console.log("Read from the second file:");
	console.log(data2.toString());

	// catch error when it occurs
} catch (err){
  console.log("Error: "+err);
}