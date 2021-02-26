const testFile = require("./files/javascript/file");
const testingObj = testFile.readJSON('./files/JSON/testData.json');
const ticTacToe = require("./files/javascript/file");

const sOFTests = testingObj.sOFTesting;
const nPTTests = testingObj.nPTTesting;
const tTTTests = tsetingObj.tTTTesting;

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

//test ticTacToe.isGameWonFunction
console.log("Testing isGameWonFunction...");
for(var x = 0; x < tTTTests.iGWFTesting.inputs.length; x++){
  if(ticTacToe.isGameWonFunction(tTTTests.iGWFTesting.inputs[x]) != tTTTests.iGWFTesting.outputs[x]){
    console.log("Test condition " + tTTTests.iGWFTesting.inputs[x] + " failed!");
    testFile.intentionallyBreak();
  } else {
    console.log("Test condition " + tTTTests.iGWFTesting.inputs[x] + " passed!");
  }
}
console.log();

//test ticTacToe.isBoardFullFunction
console.log("Testing isBoardFullFunction...");
for(var x = 0; x < tTTTests.iBFFTesting.inputs.length; x++){
  if(ticTacToe.isBoardFullFunction(tTTTests.iBFFTesting.inputs[x]) != tTTTests.iBFFTesting.outputs[x]){
    console.log("Test condition " + tTTTests.iBFFTesting.inputs[x] + " failed!");
    testFile.intentionallyBreak();
  } else {
    console.log("Test condition " + tTTTests.iBFFTesting.inputs[x] + " passed!");
  }
}

console.log("done with the test! woot woot!");