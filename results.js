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
var playerName;
var playerDataArray = [];

// constructor with properties of playerName
function Player(name) {
  this.name = name;
  this.highScore = 0;
  playerDataArray.push(this);
}


















// --------------------------------------------------------
// var parentElement = document.getElementById('result-table');
// var outPut = parseInt(localStorage.getItem('playerScore'));

// var users = [{ name: 'Taylor', score: 3 }, { name: 'Thomas', score: 4 }, { name: 'Matthew', score: 6 }, { name: 'Dawit', score: 9 }];
// for (var i = 0; i < users.length; i++) {
//   if (users[i].score < outPut) {
//     var scoreRow = document.createElement('tr');
//     var scoreHead = document.createElement('th');
//     scoreHead.textContent = localStorage.getItem('userName');
//     var tableData = document.createElement('td');
//     tableData.textContent = localStorage.getItem('playerScore');
//     scoreRow.appendChild(scoreHead);
//     scoreRow.appendChild(tableData);
//     parentElement.appendChild(scoreRow);
//   }
//   var scoreRowOne = document.createElement('tr');
//   var scoreHeadOne = document.createElement('th');
//   scoreHeadOne.textContent = users[i].name;
//   var tableDataOne = document.createElement('td');
//   tableDataOne.textContent = users[i].score;
//   scoreRowOne.appendChild(scoreHeadOne);
//   scoreRowOne.appendChild(tableDataOne);
//   parentElement.appendChild(scoreRowOne);
// }
