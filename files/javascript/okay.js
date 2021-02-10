var fortniteCard = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
var wants = "who";
var flag = false;

class trolls{
  constructor(status){
    this.status = "Not blocked";
  }
  static blocked(){
    return "Blocked!";
  }
}

function bananas(){
  console.log(fortniteCard[19]);
  if(wants == "who"){
    console.log("Yes, I'm giving it away.");
  }
  share();
  share();
  share();
  trolls.status = trolls.blocked();
  console.log(trolls.status);
}

function share(){
  if(flag == false){
    flag = true;
    console.log("And remember");
  }
}

module.exports = {bananas};