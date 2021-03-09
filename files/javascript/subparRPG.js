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
  let user = { "user": {
    username: username,
    level: 1
  }};

  var currentDB = testFile.readJSON("./files/JSON/RPGUserData.json");
  currentDB.push(user);

  testFile.writeJSON("./files/JSON/RPGUserData.json", currentDB);
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
      console.log("hi lol");
      break;
    
    case 2:
      //add a shop, so you can get better equipment and stuff
      console.log("hi lol");
      break;
  }
}

function getUsers(){
  let decision = "true";
  let accFoundFlag = false;
  while(decision == "true"){
    //ask the user for their username
    let username = String(scanner("Enter your username. "));

    //get the database of users, and put it into an array
    const usersFile = testFile.readJSON('./files/JSON/RPGUserData.json');
    const usersArray = Object.entries(usersFile);
    console.log(usersArray);

    //cycle through the array, looking for a match
    for(x=0; x<usersArray.length; x++){
      if(usersArray[x][1].username == username){
        console.log("Account found! Loading data now...");
        accFoundFlag = true;
        //LOAD ACCOUNT DATA HERE
        break;
      }
    }
    //god JS is dumb
    if(accFoundFlag){break}
    let decision = String(scanner("No user found with that username...\nDo you wish to create an account, or try again? (Enter true if you wish to try again.)")).toLowerCase();
  }
  //god JS is dumb
  if(accFoundFlag){break}
  addUser();
}

module.exports = {mainRPG};