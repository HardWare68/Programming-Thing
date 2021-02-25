const testFile = require("./files/javascript/file");
const testingObj = testFile.readJSON();
const sOFTests = testingObj.sOFTesting;
const nPTTests = testingObj.nPTTesting;

//test steelOrFeathers
console.log("Testing steelOrFeathers...");
for(var x = 0; x < sOFTests.inputs.length; x++) {
  if(testFile.steelOrFeathers(sOFTests.inputs[x]) != sOFTests.outputs[x]){
    console.log("Test condition " + sOFTests.inputs[x] + " failed!");
    testFile.intentionallyBreak();
  } else {
    console.log("Test condition " + sOFTests.inputs[x] + " passed!");
  }
}
//blank line for neatness sake
console.log(); 

//test ninePlusTen
console.log("Testing ninePlusTen...");
for(var x = 0; x < nPTTests.inputs.length; x++){
  if(testFile.ninePlusTen(nPTTests.inputs[x]) != nPTTests.outputs[x]){
    console.log("Test condition " + nPTTests.inputs[x] + " failed!");
    testFile.intentionallyBreak();
  } else {
    console.log("Test condition " + nPTTests.inputs[x] + " passed!");
  }
}
console.log();

console.log("done with the test! woot woot!");