/*
* TODO: Finish this program lmao
*/

const testFile = require("./file");
const scanner = require('prompt-sync')({ sigint: true });

/*
*   Adds a user to the RPGUserData.json file.
*/
function addUser(){
  let username = String(scanner("Enter your username! "));
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
  //load up the user's info
  getUsers();

  let select = Number(scanner("Select what you want to do!\n1.)Go adventure!\n2.)Visit the shop.\n255.)Exit "));
  switch(select){
    case 1:
      //add adventure stuff, this is where combat will take place
      break;
    
    case 2:
      //add a shop, so you can get better equipment and stuff
      break;
  }
}

function getUsers(){
  let decision = "true"
  while(decision == "true"){
    let username = String(scanner("Enter your username. "));
    const usersFile = testFile.readJSON('./files/JSON/RPGUserData.json');
    const usersArray = Object.entries(usersFile);

    for(x=0; x>=usersArray.length; x++){
      if(usersArray[x].username == username){
        console.log("Account found! Loading data now...");
        break;
      }
    }
    let decision = String(scanner("No user found with that username...\nDo you wish to create an account, or try again? (Enter true if you wish to try again.)")).toLowerCase();
  }
  addUser();
}

module.exports = {mainRPG};