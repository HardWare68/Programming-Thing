// /!\ please comment all your stuff please :^) /!\

const testFile = require("./files/file"); //USE THIS TO IMPORT OTHER STUFF YOU HECKERS. FOLLOW THE EXAMPLE, OR THIS NIFTY URL:
// stanleyulili.com/node/node-modules-import-and-use-functions-from-another-file/
const rolimonStuff = require("./files/rolimonStuff");

const scanner = require('prompt-sync')({ sigint: true }); //USE THIS TO GET INPUT. NIFTY URL: https://www.codecademy.com/articles/getting-user-input-in-node-js

var continueLoop = true;

// main loop of the program
//its gonna loop everything in here while they say true
//otherwhise, its gonna exit the loop and terminate the program
while (String(continueLoop).toLowerCase() == "true") {
  //uses the testFile function thingy
  testFile.whatAmIDoing();
  testFile.testStuffAgain();

  rolimonStuff.rolimonRequest();

  //first, ask the user whats 9 + 10
  var num = Number(scanner("What's nine plus ten? "));

  //select an outcome based on what they inputed
  switch (num) {
    case 19:
      console.log("Correct");
      break;

    case 21:
      console.log("You stupid");
      break;

    case 87:
      console.log("WAS THAT THE BITE OF 87");
      break;

    default:
      console.log("no");
  }

  //ask if they wanna continue or not
  continueLoop = scanner('Do you wish to continue? Enter "true" or "false." ');

  //ask the user which is heavier
  var weight = String(scanner("Which is heavier: a pound of steel or a pound of feathers? "));

  //what they put in
  switch (weight) {
    case "feathers":
      console.log("idiot");
      break;
    
    case "steel":
      console.log("idiot");
      break;
    
    case "neither":
      console.log("good job");
      break;

    default:
      console.log("no");
  }

  //ask if they wanna continue or not
  continueLoop = scanner('Do you wish to continue? Enter "true" or "false." ');
  
}