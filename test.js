const testFile = require("./files/javascript/file");
const testingObj = testFile.readJSON()
const sOFTests = testingObj.sOFTesting

//test steelOrFeathers
for(var x = 0; x < sOFTests.inputs.length; x++) {
  if(testFile.steelOrFeathers(sOFTests.inputs[x]) != sOFTests.outputs[x]){
    console.log("Test condition " + sOFTests.inputs[x] + " failed!");
    testFile.intentionallyBreak();
  } else {
    console.log("Test condition " + sOFTests.inputs[x] + " passed!");
  }
}




console.log("done with the test! woot woot!");