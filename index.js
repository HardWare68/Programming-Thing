// /!\ please comment all your stuff please :^) /!\

const testFile = require("./files/javascript/file"); //USE THIS TO IMPORT OTHER STUFF YOU HECKERS. FOLLOW THE EXAMPLE, OR THIS NIFTY URL:
// stanleyulili.com/node/node-modules-import-and-use-functions-from-another-file/
const btnExit = require("./files/javascript/okay");
const rolimonStuff = require("./files/javascript/rolimonStuff");
const ticTacToe = require("./files/javascript/ticTacToe");

const scanner = require('prompt-sync')({ sigint: true }); //USE THIS TO GET INPUT. NIFTY URL: https://www.codecademy.com/articles/getting-user-input-in-node-js

var continueLoop = true;

// main loop of the program
//its gonna loop everything in here while they say true
//otherwhise, its gonna exit the loop and terminate the program
while (String(continueLoop).toLowerCase() == "true") {
  
  var select = Number(scanner("What do you want to do?\n1.)Testing random stuff\n2.)Tic-tac-toe!"))
  switch (select){
    case 1:
      btnExit.bananas();
      //rolimonStuff.rolimonRequest();
      //lmao rolimon stuff doesnt work lol

      testFile.readJSON();

      testFile.steelOrFeathers();
      break;

    case 2:
      ticTacToe.ticTacToe();
      break;
  }
  //ask if they wanna continue or not
  continueLoop = scanner('Do you wish to continue? Enter "true" or "false." ');
  
}