//im just going off of what i did previously in Java lol

var gameBoard = [["", "", ""], ["", "", ""], ["", "", ""]]; //this fella right here is a 2-D array
var isLegalMoveVar = false; //is it a legal move? (it's not legal if they try to go to spot [10,10] or if they go in a spot that is already taken)
var isBoardFullVar = false; //is game won?
var isgameWonVar = false; //is the game won?
var playerTurn = 1; //which player is going
var nextMove = [0, 0]; //the next move

const scanner = require('prompt-sync')({ sigint: true });

while(isGameWonVar){
  //print the board

  //find out who's turn it is

  //loop until they give us a legal move
  while(!isLegalMoveVar){
    //prompt user for input

    //get the next move, and hopefully split it into an array
    //with correct regex. how the hell do i even regex????

    //check if it's a legal move

    //if it is not legal, let them know they did a bad
  }

  //do the move. you know, put it to the gameBorad array or whatever

  //check if anyone has won

  //check if the board is full

  //reset the legality stuff because otherwise it gets stuck lol
}

//somebody won!