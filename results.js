var parentElement = document.getElementById('result-table');
var outPut = parseInt(localStorage.getItem('playerScore'));

var users = [{ name: 'Taylor', score: 3 }, { name: 'Thomas', score: 4 }, { name: 'Matthew', score: 6 }, { name: 'Dawit', score: 9 }];
for (var i = 0; i < users.length; i++) {
  if (users[i].score < outPut) {
    var scoreRow = document.createElement('tr');
    var scoreHead = document.createElement('th');
    scoreHead.textContent = localStorage.getItem('userName');
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
