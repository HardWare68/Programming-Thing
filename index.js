// /!\ please comment all your stuff please :^) /!\

const testFile = require("./file"); //USE THIS TO IMPORT OTHER STUFF YOU HECKERS. FOLLOW THE EXAMPLE, OR THIS NIFTY URL:
// stanleyulili.com/node/node-modules-import-and-use-functions-from-another-file/
const scanner = require('prompt-sync')({sigint: true}); //USE THIS TO GET INPUT. NIFTY URL: https://www.codecademy.com/articles/getting-user-input-in-node-js

testFile.whatAmIDoing();
console.log("I forget how to do JS");
var num = Number(scanner("What's nine plus ten? "));
if (num == 21){
  console.log("You stupid");
} else if (num == 19) {
  console.log("That is correct");
} else {
  console.log("No");
}