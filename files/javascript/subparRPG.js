/*
* TODO: Finish this program lmao
*/

const testFile = require("./file");
const scanner = require('prompt-sync')({ sigint: true });

/*
*   Adds a user to the RPGUserData.json file.
*/
function addUser(){
  //create all the info for the user's profile
  let username = String(scanner("Enter your username! "));
  let user = { "user": {
    "username": username,
    "level": 1
  }};

  //grab the current file and add the new user to that info
  console.log("havent grabbed current db");
  var currentDB = testFile.readJSON('./files/JSON/RPGUserData.json');
  console.log(currentDB);
  currentDB = Object.entries(currentDB);
  currentDB.push(user);
  console.log("pushed the new thing");
  currentDB = JSON.parse(currentDB);

  //push the new data to the file
  testFile.writeJSON("./files/JSON/RPGUserData.json", currentDB);
}

/*
* Main portion of the RPG program
*/
function mainRPG(){
  //load up the user's info
  getUsers();
  
  let select = 0;
  while(select != 255){
    select = Number(scanner("Select what you want to do!\n1.)Go adventure!\n2.)Visit the shop.\n255.)Exit "));
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
}

function getUsers(){
  var decision = "true";
  let accFoundFlag = false;

  while(decision == "true"){
    //ask the user for their username
    let username = String(scanner("Enter your username. "));

    //get the database of users, and put it into an array
    const usersFile = testFile.readJSON('./files/JSON/RPGUserData.json');
    const usersArray = Object.entries(usersFile);

    //cycle through the array, looking for a match
    for(x=0; x<usersArray.length; x++){
      if(usersArray[x][1].username == username){
        console.log("Account found! Loading data now...");
        accFoundFlag = true;
        //LOAD ACCOUNT DATA HERE
        break;
      }
    }

    //if no account was found, ask if they wish to try again.
    //if account was found, then break
    if(!accFoundFlag){
      decision = String(scanner("No account found with that username... Do you wish to create an account, or try again? (Enter true if you wish to try again.)")).toLowerCase();
      console.log(decision);
    } else {break;}
  }

  //god JS is dumb
  if(!accFoundFlag){
    addUser();
  }
}

module.exports = {mainRPG};