// /!\ please comment all your stuff please :^) /!\

const testFile = require("./files/javascript/file"); //USE THIS TO IMPORT OTHER STUFF YOU HECKERS. FOLLOW THE EXAMPLE, OR THIS NIFTY URL:
// stanleyulili.com/node/node-modules-import-and-use-functions-from-another-file/
const rolimonStuff = require("./files/javascript/rolimonStuff");
const ticTacToe = require("./files/javascript/ticTacToe");

const scanner = require('prompt-sync')({ sigint: true }); //USE THIS TO GET INPUT. NIFTY URL: https://www.codecademy.com/articles/getting-user-input-in-node-js

var continueLoop = true;

// main loop of the program
//its gonna loop everything in here while they say true
//otherwhise, its gonna exit the loop and terminate the program
while (String(continueLoop).toLowerCase() == "true") {

  //rolimonStuff.rolimonRequest();

  testFile.ninePlusTen();

  testFile.readJSON();

  testFile.steelOrFeathers();


  var playTicTacToe = scanner("Do you want to play tic-tac-toe? Enter \"True\" or \"False\"").toLowerCase();
  if(playTicTacToe == "true"){
    ticTacToe.ticTacToe();
  }

  //ask if they wanna continue or not
  continueLoop = scanner('Do you wish to continue? Enter "true" or "false." ');
  
}