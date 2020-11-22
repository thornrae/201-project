'use strict';
//Elements from the DOM
var playerForm = document.getElementById('playernameform');
var playMessage = document.getElementById('gogame');
var playerNameSection = document.getElementById('player-name-section');
var goToGame = document.getElementById('gotogame');
//variables
// var playerName;
// var playerDataArray = [];
// constructor with properties of playerName
// function Player(name) {
//   this.name = name;
//   this.highScore = 0;
//   playerDataArray.push(this);
// }
//button hides results until presssed
function buttonFunction() {
  var x = document.getElementById('rules');
  if (x.style.display === 'none') {
    x.style.display = 'block';
  } else {
    x.style.display = 'none';
  }
}
// event handler for player to submit name
function handleSubmit(event) {
  event.preventDefault();
  var playerName = event.target.name.value;
  playerName = playerName.toLowerCase();
  // hides player name entry form
  playerNameSection.style.display = 'none';
  // exposes button that takes player to the game
  goToGame.style.display = 'block';
  playMessage.textContent = `${playerName}, Let's Play!`;
  // stores player name to local storage
  localStorage.setItem('playerName', playerName);
  //console.log(playerName);
  // clears name from form after player hits submit
  document.getElementById('playernameform').reset();
}
// event listener
playerForm.addEventListener('submit', handleSubmit);