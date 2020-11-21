'use strict';

//form for user name input
//case sensitive ==> YES
//event listener for name submission
//event handler - check if player exists in local storage
//user enter - is new or previous player? //
//if player name is new, instantiate
//name case sensitive ==> YES
//OPEN: total questions, correct answers?


//Global
//form for user to input player
var playerForm = document.getElementById('playernameform');


//variables
var playerName;
var playerDataArray = [];
var gameNumber = 0;
var gameNumberArray = [];
// var playerDataArrayIndex;

// constructor with properties of playerName
function Player(name) {
  this.name = name;
  this.correctAnswers = 0;
  this.totalAnswers = 0;
  this.highScore = 0;
  this.new = true;
  gameNumberArray.push(this);
  playerDataArray.push(this);
}

//does player exist?
// function newToGame(){
// var playerIsNew = true;

// for (var i = 0; i < playerDataArray.length; i++){

// }
// //check for name
// }
// if(playerIsNew){
//   // insantiate NewPlayer
// }

//save to local storage

// var stringifiedPlayerData = JSON.stringify(playerDataArray);
// localStorage.setItem('playerInformation', stringifiedPlayerData);
// localStorage.setItem('playerInformation', stringifiedPlayerData);


// var retrievedPlayerResults = localStorage.getItem()
// playerDataArray = JSON.parse




//event handler for player to submit name
function handleSubmit(event) {
  event.preventDefault();
  playerName = event.target.name.value;
  playerName = playerName.toLowerCase();
  // checkPlayer(event);
  // gameNumber++;
  console.log(playerName);
  document.getElementById('playernameform').reset();
}

// event listener
playerForm.addEventListener('submit', handleSubmit);
