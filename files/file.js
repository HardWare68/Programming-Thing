const scanner = require('prompt-sync')({ sigint: true });

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
}

//export this bad boy
module.exports = {ninePlusTen, steelOrFeathers};