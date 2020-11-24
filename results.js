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
var retrievedPlayerScore = localStorage.getItem('playerScore');
var parsedretrievedScore = JSON.parse(retrievedPlayerScore);

new Player(parsedretrievedPlayer,parsedretrievedScore);

var stringifiedResults = JSON.stringify(playerDataArray);
console.log(stringifiedResults);
localStorage.setItem('playerResults', stringifiedResults);

console.log('player data: ' + playerDataArray);


// var users = [
//   { name: 'Taylor', score: 63 },
//   { name: 'Thomas', score: 74 },
//   { name: 'Matthew',score: 96 },
//   { name: 'Dawit', score:  9 },
// ];

// //sort by value
// function descending (a,b){
//   return b.score - a.score;
// }
// console.log(users.sort(descending));






// --------------------------------------------------------
var parentElement = document.getElementById('result-table');
var outPut = parseInt(localStorage.getItem('playerScore'));

// var users = [{ name: 'Taylor', score: 3 }, { name: 'Thomas', score: 4 }, { name: 'Matthew', score: 6 }, { name: 'Dawit', score: 9 }];

var users = [
  { name: 'Taylor', score: 63 },
  { name: 'Thomas', score: 74 },
  { name: 'Matthew',score: 96 },
  { name: 'Dawit', score:  9 },
];
//sort by value
function descending (a,b){
  return b.score - a.score;
}
console.log(users.sort(descending));
for (var i = 0; i < users.length; i++) {
  if (users[i].score < outPut) {
    var scoreRow = document.createElement('tr');
    var scoreHead = document.createElement('th');
    scoreHead.textContent = localStorage.getItem('playerName');
    var tableData = document.createElement('td');
    tableData.textContent = localStorage.getItem('playerScore');
    scoreRow.appendChild(scoreHead);
    scoreRow.appendChild(tableData);
    parentElement.appendChild(scoreRow);
  }
  var scoreRowOne = document.createElement('tr');
  var scoreHeadOne = document.createElement('th');
  scoreHeadOne.textContent = users[i].name;
  var tableDataOne = document.createElement('td');
  tableDataOne.textContent = users[i].score;
  scoreRowOne.appendChild(scoreHeadOne);
  scoreRowOne.appendChild(tableDataOne);
  parentElement.appendChild(scoreRowOne);
}
