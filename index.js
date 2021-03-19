// /!\ please comment all your stuff please :^) /!\

/*
*
* Bless this mess.
*
*/

const testFile = require("./files/javascript/file"); //USE THIS TO IMPORT OTHER STUFF YOU HECKERS. FOLLOW THE EXAMPLE, OR THIS NIFTY URL:
// stanleyulili.com/node/node-modules-import-and-use-functions-from-another-file/
const btnExit = require("./files/javascript/okay");
const rolimonStuff = require("./files/javascript/rolimonStuff");
const ticTacToe = require("./files/javascript/ticTacToe");
const subparRPG = require("./files/javascript/subparRPG");

const scanner = require('prompt-sync')({ sigint: true }); //USE THIS TO GET INPUT. NIFTY URL: https://www.codecademy.com/articles/getting-user-input-in-node-js

var continueLoop = true;

// main loop of the program
//its gonna loop everything in here while they say true
//otherwhise, its gonna exit the loop and terminate the program
while (String(continueLoop).toLowerCase() == "true") {

  //ask the user what they want to do
  let select = Number(scanner("What do you want to do?\n1.)Testing random stuff\n2.)Tic-tac-toe!\n3.)Subpar RPG!"));

  switch (select) {
    //case 1: testing random functions
    case 1:
      btnExit.oranges(); //19 dollar fortnite gift card
      //rolimonStuff.rolimonRequest();
      //lmao rolimon stuff doesnt work lol

      //I got a question for you: what's heavier, a kilogram o steel o a kilogram o feathers?
      var weight = String(scanner("I got a question for ya, what's heavier: a kilogramme of steel o a kilogramme o feathers?")).toLowerCase();
      console.log(testFile.steelOrFeathers(weight));

      console.log(testFile.ethanIsDumb());
      break;

    //case 2: tic-tac-toe
    case 2:
      ticTacToe.ticTacToe();
      break;

    case 3:
      subparRPG.mainRPG();
      break;
  }

  //ask if they wanna continue or not
  continueLoop = scanner('Do you wish to continue? Enter "true" or "false." ');
}

console.log("hi");
