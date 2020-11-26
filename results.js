'use strict';

// local player variable
// instantiate player - name & results
// get player name from local storage
// store player score to local storage with player
// var stringifiedResults = JSON.stringify(productsArray);
// OPEN: date?
// pull player & score from local storage
// sort by high score
// render to results


//variables
var playerDataArray = [];
var retrievedResults = localStorage.getItem('playerResults');
if (retrievedResults){
  playerDataArray = JSON.parse(retrievedResults);
}

// constructor with properties of playerName
function Player(playerName, playerScore) {
  this.name = playerName;
  this.playerScore = playerScore;
  playerDataArray.push(this);
}

var retrievedPlayerName = localStorage.getItem('playerName');
var parsedretrievedPlayer = JSON.parse(retrievedPlayerName);
localStorage.removeItem('playerName');

var retrievedPlayerScore = localStorage.getItem('playerScore');
var parsedretrievedScore = JSON.parse(retrievedPlayerScore);
localStorage.removeItem('playerScore');

if (retrievedPlayerScore && retrievedPlayerName) {
  new Player(parsedretrievedPlayer,parsedretrievedScore);
}


var stringifiedResults = JSON.stringify(playerDataArray);
console.log(stringifiedResults);
localStorage.setItem('playerResults', stringifiedResults);

console.log('player data: ' + playerDataArray);

// --------------------------------------------------------
var parentElement = document.getElementById('result-table');
var outPut = parseInt(localStorage.getItem('playerScore'));

var users = [
  // { name: 'Player Name', playerScore: 'High Score'},
  { name: 'Taylor', playerScore: 63 },
  { name: 'Thomas', playerScore: 74 },
  { name: 'Matthew',playerScore: 96 },
  { name: 'Dawit', playerScore:  9 },
];

var allUsers = [...users, ...playerDataArray];
console.log('allUsers: ', allUsers);
//sort by value
function descending (a,b){
  return b.playerScore - a.playerScore;
}
allUsers.sort(descending);
console.log('allUsers.sorted: ', allUsers);

console.log(users.sort(descending));
var scoreRowOne = document.createElement('tr');
var scoreHeadOne = document.createElement('th');
scoreHeadOne.textContent = 'Player Name';
var tableDataOne = document.createElement('td');
tableDataOne.textContent = 'Score';
scoreRowOne.appendChild(scoreHeadOne);
scoreRowOne.appendChild(tableDataOne);
parentElement.appendChild(scoreRowOne);

for (var i = 0; i < allUsers.length; i++) {
  var scoreRowOne = document.createElement('tr');
  var scoreHeadOne = document.createElement('th');
  scoreHeadOne.textContent = allUsers[i].name;
  var tableDataOne = document.createElement('td');
  tableDataOne.textContent = allUsers[i].playerScore;
  scoreRowOne.appendChild(scoreHeadOne);
  scoreRowOne.appendChild(tableDataOne);
  parentElement.appendChild(scoreRowOne);
}

// just need to put data into array and store that data
// solution now but need to review code and change perspective. 
// take both arrays, copy into one single array, sort that and render it.
// create a table to have 10 names. 