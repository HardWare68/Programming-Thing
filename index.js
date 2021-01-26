// /!\ please comment all your stuff please :^) /!\

const testFile = require("./file"); //USE THIS TO IMPORT OTHER STUFF YOU HECKERS. FOLLOW THE EXAMPLE, OR THIS NIFTY URL:
// stanleyulili.com/node/node-modules-import-and-use-functions-from-another-file/

const scanner = require('prompt-sync')({sigint: true}); //USE THIS TO GET INPUT. NIFTY URL: https://www.codecademy.com/articles/getting-user-input-in-node-js

var continueLoop = true;

// main loop of the program
//its gonna loop everything in here while they say true
//otherwhise, its gonna exit the loop and terminate the program
while(String(continueLoop).toLowerCase() == "true"){
  //uses the testFile function thingy
  testFile.whatAmIDoing();

  //this just displays stuff to the screen, if you dunno how to do that
  console.log("I forget how to do JS");

  //first, ask the user whats 9 + 10
  var num = Number(scanner("What's nine plus ten? "));

  //select an outcome based on what they inputed
  //i will probably make this a switch statement later lol
  if (num == 21){
    console.log("You stupid");
  } else if (num == 19) {
    console.log("That is correct");
  } else {
    console.log("No");
  }

  //ask if they wanna continue or not
  continueLoop = scanner('Do you wish to continue? Enter "true" or "false."');
}