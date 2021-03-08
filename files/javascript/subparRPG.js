/*
* TODO: Finish this program lmao
*/

const testFile = require("./files/javascript/file");
const scanner = require('prompt-sync')({ sigint: true });

/*
*
*   Adds a user to the RPGUserData.json file.
*
*/
function addUser(){
  let username = String(scanner("Enter your username!"));
  let user = {
    username: username,
    level: 1
  };

  testFile.writeJSON("./files/JSON/RPGUserData.json", user);
}

/*
* Main portion of the RPG program
*/
function mainRPG(){
  let select = Number(scanner("Select what you want to do!\n1.)Go adventure!\n2.)Visit the shop.\n255.)Exit"));
  switch(select){
    case 1:
      //add adventure stuff, this is where combat will take place
      break;
    
    case 2:
      //add a shop, so you can get better equipment and stuff
      break;
  }
}