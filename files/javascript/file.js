<<<<<<< HEAD:files/file.js
//this function prints stuff to the screen
function whatAmIDoing(){
  console.log("lmaoooo");
}

//test stuff again
function testStuffAgain(){
  console.log("Hello #alex-post-archives!");
}

//export this bad boy
module.exports = { whatAmIDoing, testStuffAgain };
=======
const scanner = require('prompt-sync')({ sigint: true });
const fs = require('fs'); //working with json can be found right in here: https://attacomsian.com/blog/nodejs-read-write-json-files


function ninePlusTen(){
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
  //prints a blank line just for neatness sake
  console.log();
}

function steelOrFeathers(){
  //I got a question for you: what's heavier, a kilogram o steel o a kilogram o feathers?
  var weight = String(scanner("Which is heavier: a pound of steel or a pound of feathers? ")).toLowerCase();

  //what they put in
  switch (weight) {
    case "feathers":
      console.log("idiot");
      break;
    
    case "steel":
      console.log("That's right. It's a kilogram o steel, because steel is heavier than feathers!");
      break;
    
    case "neither":
      console.log("good job");
      break;

    default:
      console.log("no");
  }
  //prints a blank line just for neatness sake
  console.log();
}

function readJSON(){
  try {

    const data = fs.readFileSync('files/JSON/thisIsAFile.json', 'utf8');

    // parse JSON string to JSON object
    const jsonOBJ = JSON.parse(data);

    console.log(jsonOBJ.message);

  } catch (err) {
    console.log(`Error reading file from disk: ${err}`);
  }
}

//export this bad boy
module.exports = {ninePlusTen, steelOrFeathers, readJSON};
>>>>>>> hardwares-cool-branch:files/javascript/file.js
