//im just going off of what i did previously in Java lol

var gameBoard = [["", "", ""], ["", "", ""], ["", "", ""]]; //this fella right here is a 2-D array
var isLegalMoveVar = false; //is it a legal move? (it's not legal if they try to go to spot [10,10] or if they go in a spot that is already taken)
var isBoardFullVar = false; //is game won?
var isGameWonVar = false; //is the game won?
var playerTurn = 1; //which player is going
var nextMove = [0, 0]; //the next move

const scanner = require('prompt-sync')({ sigint: true });

//function that print the board
//it do be printing
function printBoard(){
  console.log(gameBoard[0][0] + " | " + gameBoard[0][1] + " | " + gameBoard[0][2] + " | ");
  console.log("--------");
  console.log(gameBoard[1][0] + " | " + gameBoard[1][1] + " | " + gameBoard[1][2] + " | ");
  console.log("--------");
  console.log(gameBoard[2][0] + " | " + gameBoard[2][1] + " | " + gameBoard[2][2] + " | ");
}

//function that checks if the move is illegal
//when the move is wanted for 7 war crimes! :flushed:
function isLegalMove(nextMoveParam){
  try {
    if(gameBoard[nextMoveParam[0]][nextMoveParam[1]] == ""){
      isLegalMoveVar = true;
    } else {
      isLegalMoveVar = false;
    }
  } catch (e) {
    isLegalMoveVar = false;
  }
}

//function that checks if the board if full
//im sorry that this if statement looks like a cancerous tumour
function isBoardFull(paramGameBoard){
  if(paramGameBoard[0][0] != "" && paramGameBoard[0][1] != "" && paramGameBoard[0][2] != "" && paramGameBoard[1][0] != "" && paramGameBoard[1][1] != "" && paramGameBoard[1][2] != "" && paramGameBoard[2][0] != "" && paramGameBoard[2][1] != "" && paramGameBoard[2][2] != ""){
    return true;
  } else {
    return false;
  }
}

//im sorry again
function isGameWonFunction(paramGameBoard){
    //if first row is equal
    if(paramGameBoard[0][0] == paramGameBoard[0][1] && paramGameBoard[0][1] == paramGameBoard[0][2] && paramGameBoard[0][0] == paramGameBoard[0][2] && paramGameBoard[0][0] != "" && paramGameBoard[0][1] != "" && paramGameBoard[0][2] != ""){
      return true;
    }
    //if second row is equal
    else if(paramGameBoard[1][0] == paramGameBoard[1][1] && paramGameBoard[1][1] == paramGameBoard[1][2] && paramGameBoard[1][0] == paramGameBoard[1][2] && paramGameBoard[1][0] != "" && paramGameBoard[1][1] != "" && paramGameBoard[1][2] != ""){
      return true;
    }
    //if third row is equal
    else if(paramGameBoard[2][0] == paramGameBoard[2][1] && paramGameBoard[2][1] == paramGameBoard[2][2] && paramGameBoard[2][0] == paramGameBoard[2][2] && paramGameBoard[2][0] != "" && paramGameBoard[2][1] != "" && paramGameBoard[2][2] != ""){
      return true;
    }
    //if first column is equal
    else if(paramGameBoard[0][0] == paramGameBoard[1][0] && paramGameBoard[1][0] == paramGameBoard[2][0] && paramGameBoard[0][0] == paramGameBoard[2][0] && paramGameBoard[0][0] != "" && paramGameBoard[1][0] != "" && paramGameBoard[2][0] != ""){
      return true;
    }
    //if second column is equal
    else if(paramGameBoard[0][1] == paramGameBoard[1][1] && paramGameBoard[1][1] == paramGameBoard[2][1] && paramGameBoard[0][1] == paramGameBoard[2][1] && paramGameBoard[0][1] != "" && paramGameBoard[1][1] != "" && paramGameBoard[2][1] != ""){
      return true;
    }
    //if third column is equal
    else if(paramGameBoard[0][2] == paramGameBoard[1][2] && paramGameBoard[1][2] == paramGameBoard[2][2] && paramGameBoard[0][2] == paramGameBoard[2][2] && paramGameBoard[0][2] != "" && paramGameBoard[1][2] != "" && paramGameBoard[2][2] != ""){
      return true;
    }
    //if top-left to bottom-right diagonal is equal
    else if(paramGameBoard[0][0] == paramGameBoard[1][1] && paramGameBoard[1][1] == paramGameBoard[2][2] && paramGameBoard[0][0] == paramGameBoard[2][2] && paramGameBoard[0][0] != "" && paramGameBoard[1][1] != "" && paramGameBoard[2][2] != ""){
      return true;
    }
    //if top-right to bottom-left diagonal is equal
    else if(paramGameBoard[0][2] == paramGameBoard[1][1] && paramGameBoard[1][1] == paramGameBoard[2][0] && paramGameBoard[0][2] == paramGameBoard[2][0] && paramGameBoard[0][2] != "" && paramGameBoard[1][1] != "" && paramGameBoard[2][0] != ""){
      return true;
    }
    else{
      return false;
    }
    //im so sorry to all my programming friends who had to scroll through a thousand if statements
  }

//the actual tic-tac-toe jazz
function ticTacToe(){
  while(!isGameWonVar){
    //print the board
    printBoard();

    //find out who's turn it is
    if(playerTurn == 1){
      console.log("It is player 1's turn!");
    } else {
      console.log("It is player 2's turn!");
    }

    //loop until they give us a legal move
    while(!isLegalMoveVar){
      //prompt user for input
      var nextMoveOne = scanner("Enter your move! (Format it like so: \"row,column\")").split(",");

      //get the next move, and hopefully split it into an array
      //with correct regex. how the hell do i even regex????
        try {
          nextMove[0] = parseInt(nextMoveOne[0]);
          nextMove[1] = parseInt(nextMoveOne[1]);
        } catch(e) {
          isLegalMoveVar = false;
        }

      //check if it's a legal move
      isLegalMove(nextMove);

      //if it is not legal, let them know they did a bad
      if(isLegalMoveVar == false){
        console.log("That is an illegal move. Please enter a legal move.")
      }
    }

    //do the move. you know, put it to the gameBorad array or whatever
    if(playerTurn == 1){
      gameBoard[nextMove[0]][nextMove[1]] = "O";
      playerTurn = 2;
    } else {
      gameBoard[nextMove[0]][nextMove[1]] = "X";
      playerTurn = 1;
    }

    //check if anyone has won
    isGameWonVar = isGameWonFunction(gameBoard);

    //check if the board is full
    isBoardFullVar = isBoardFull(gameBoard);
    if(isBoardFullVar){
      break;
    }

    //reset the legality stuff because otherwise it gets stuck lol
    isLegalMoveVar = false;
  }

  //somebody won!
  if(!isBoardFullVar){
    if(playerTurn == 1){
      console.log("Player 2 has won!");
    } else {
      console.log("Player 1 has won!");
    }
  }else{
    console.log("Draw!");
  }
}

module.exports = {ticTacToe, isGameWonFunction};