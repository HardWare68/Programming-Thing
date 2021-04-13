const scanner = require('prompt-sync')({ sigint: true });
const fs = require('fs'); //working with json can be found right in here: https://attacomsian.com/blog/nodejs-read-write-json-files

//intentionally breaks the program. lol!
function intentionallyBreak(){
  //idk if its right or not, but it breaks. lol!
  throw intentionalException;
}

function theTruth(){
  return "Average CollabDiscordBot fan\nAverage Programming Thing enjoyer";
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
}

function ethanIsDumb(){
  return 2+3*4;
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
}

function readJSON(paramFile){
  try {

    const data = fs.readFileSync(paramFile, 'utf8');

    // parse JSON string to JSON object
    const jsonOBJ = JSON.parse(data);

    return jsonOBJ;

  } catch (err) {
    console.log(`Error reading file from disk: ${err}`);
  }
}

/*
*   Writes to a json file.
*   Parameters:
*     paramFile: The file location you wish to write to.
*     paramObj: The object you wish to write to the file.
*/

// look at me fancy-ly commenting my code ^
function writeJSON(paramFile, paramObj){
  try {
      // convert JSON object to a string
      const data = JSON.stringify(paramObj, null, 4);

      // write file to disk
      fs.writeFileSync(paramFile, data, 'utf8');

      console.log(`File is written successfully!`);

  } catch (err) {
      console.log(`Error writing file: ${err}`);
  }
}

function testConsoleClear(){
  console.clear();
  return "Oppa gangnam style!";
}

//export this bad boy
module.exports = {ninePlusTen, steelOrFeathers, writeJSON, readJSON, intentionallyBreak, ethanIsDumb, testConsoleClear, theTruth};
