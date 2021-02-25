const scanner = require('prompt-sync')({ sigint: true });
const fs = require('fs'); //working with json can be found right in here: https://attacomsian.com/blog/nodejs-read-write-json-files

//intentionally breaks the program. lol!
function intentionallyBreak(){
  //idk if its right or not, but it breaks. lol!
  throw intentionalException;
}

function ninePlusTen(paramNumber){
  //select an outcome based on what they inputed
  switch (paramNumber) {
    case 19:
      return "Correct";

    case 21:
      return "You stupid";

    case 87:
      return "Was that the bite of 87?";

    default:
      return "no";
  }
  //prints a blank line just for neatness sake
  console.log();
}

function steelOrFeathers(paramWeight){
  //what they put in
  switch (paramWeight) {
    case "feathers":
      return "idiot";
    
    case "steel":
      return "That's right. It's a kilogram o steel, because steel is heavier than feathers!";
    
    case "neither":
      return "Good job";

    default:
      return "no";
  }
  //prints a blank line just for neatness sake
  console.log();
}

function readJSON(){
  try {

    const data = fs.readFileSync('files/JSON/thisIsAFile.json', 'utf8');

    // parse JSON string to JSON object
    const jsonOBJ = JSON.parse(data);

    return jsonOBJ;

  } catch (err) {
    console.log(`Error reading file from disk: ${err}`);
  }
}

//export this bad boy
module.exports = {ninePlusTen, steelOrFeathers, readJSON, intentionallyBreak};
