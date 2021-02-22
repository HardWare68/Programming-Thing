const testFile = require("./files/javascript/file");
var testing = testFile.readJSON()

//test steelOrFeathers
for(var x = 0; x > testing.sOFTesting.inputs.length; x++;) {
  if(steelOrFeathers(testing.SOFTesting.inputs[x]) != steelOrFeathers(testing.SOFTesting.outputs[x])){
    testFile.intentionallyBreak();
  }
}