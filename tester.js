const testFile = require("./files/javascript/file");
var testing = testFile.readJSON()

function sOFTest(){
  //test steelOrFeathers
  for(var x = 0; x > testing.sOFTesting.inputs.length; x++) {
    console.log("in the loop! woot woot!");
    console.log("x is " + x);
    if(steelOrFeathers(testing.sOFTesting.inputs[x]) != steelOrFeathers(testing.sOFTesting.outputs[x])){
      console.log("Test condition " + testing.sOFTesting.inputs[x] + " failed!");
      testFile.intentionallyBreak();
    } else {
      console.log("Test condition " + testing.sOFTesting.inputs[x] + " passed!");
    }
  }
}

module.exports = {sOFTest};