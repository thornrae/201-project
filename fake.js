'use strict';

// Elements
var codeBlock = document.getElementById('codeBlock-img');
var userAnswerForm = document.getElementById('userAnswerForm');
var resultMessage = document.getElementById('resultMessage');
var enterButton = document.getElementById('enterButton');
var nextButton = document.getElementById('nextButton');
var timeBlock = document.getElementById('counter');
var statusBar = document.getElementById('correct-bars');
var resultMessageContainer = document.getElementById('resultMessageContainer');
var congratsMessage = document.getElementById('congratsMessage');
var congratsMessage2 = document.getElementById('congratsMessage2');
var goToResultPageContainer = document.getElementById('see-results');
var statusBarContainer = document.getElementById('statusBarContainer');
var timerDisplay = document.getElementById('timer');
var resultDisplay = document.getElementById('resultMessageContainer');
var codeBlockDisplay = document.getElementById('code-block');
var userInputBox = document.getElementById('user-input-box');
var nextButtonContainer = document.getElementById('nextButtonContainer');
var timeLeft = 30;// Can manualy enter time left here
var correctAnswerAmount = 4;// Manually enter correct amount to get to result page

// Listeners
userAnswerForm.addEventListener('submit', handleSubmitAnswer);
nextButton.addEventListener('click', handleNextQuestionButton);

// Variables
var codeBlockWithAnswers = [];
var currentCodeBlock;
var gameTimer;

// Constructor Function for CodeBlockPair with Answers
function CodeBlockPair(codeBlockImg, answer) {
  this.codeBlockImg = codeBlockImg;
  this.answer = answer;
  codeBlockWithAnswers.push(this);
}


new CodeBlockPair('../codeBlock-images/q1-a4.png', [4]);
new CodeBlockPair('../codeBlock-images/q2-a7.png', [7]);
new CodeBlockPair('../codeBlock-images/q3-a14.png', [14]);
new CodeBlockPair('../codeBlock-images/q5-a8.png', [8]);
new CodeBlockPair('../codeBlock-images/q8-a5.png', [5]);
new CodeBlockPair('../codeBlock-images/q11-a4.png', [4]);
new CodeBlockPair('../codeBlock-images/q14-a2.png', [2]);
new CodeBlockPair('../codeBlock-images/q17-a2.png', [2]);
new CodeBlockPair('../codeBlock-images/q19-a1.png', [1]);
new CodeBlockPair('../codeBlock-images/q20-a6.png', [6]);
new CodeBlockPair('../codeBlock-images/q21-a3.png', [3]);
new CodeBlockPair('../codeBlock-images/q22-a1or10.png', [1], [10]);
new CodeBlockPair('../codeBlock-images/q23-a7.png', [7]);
new CodeBlockPair('../codeBlock-images/q25-a5.png', [5]);
new CodeBlockPair('../codeBlock-images/q26-a4.png', [4]);
new CodeBlockPair('../codeBlock-images/q27-a1.png', [1]);
new CodeBlockPair('../codeBlock-images/q28-a7.png', [7]);
new CodeBlockPair('../codeBlock-images/q29-a5.png', [5]);
new CodeBlockPair('../codeBlock-images/q30-a4.png', [4]);


// Use for Testing Website
// new CodeBlockPair('../codeBlock-images/A1.png', [1]);
// new CodeBlockPair('../codeBlock-images/A5.png', [5]);
// new CodeBlockPair('../codeBlock-images/A10.png', [10]);
// new CodeBlockPair('../codeBlock-images/A15.png', [15]);
// new CodeBlockPair('../codeBlock-images/A20.png', [20]);
// new CodeBlockPair('../codeBlock-images/A25.png', [25]);

function randomizer(max) {
  return Math.floor(Math.random() * max);
}


var previousIndex;
function displayRandomCodeBlock() {
  var codeBlockIndex = randomizer(codeBlockWithAnswers.length);
  while (previousIndex === codeBlockIndex) {
    codeBlockIndex = randomizer(codeBlockWithAnswers.length);
  }
  currentCodeBlock = codeBlockWithAnswers[codeBlockIndex];
  var image = currentCodeBlock.codeBlockImg;
  codeBlock.src = image;
  previousIndex = codeBlockIndex;
}


function initializeGame() {
  loadLocalStorage();
  displayRandomCodeBlock();
  timer(timeLeft);
}


function handleSubmitAnswer(event) {
  event.preventDefault();
  var userAnswer = +event.target.userAnswer.value; //plus is the same as parseInt
  var playerSessionArray = playersData[currentPLayerIndex].session;
  var currentSession = playerSessionArray[playerSessionArray.length - 1];
  if (currentCodeBlock.answer.includes(userAnswer)) {
    currentSession.correctAttempts++;
    addElementToPage('li', '  ', statusBar);
    resultMessage.textContent = 'CORRECT!!';
    resultMessageContainer.style.backgroundColor = 'rgb(27, 164, 0)';
    timeBlock.style.visibility = 'hidden';
    enterButton.style.visibility = 'hidden';
    nextButton.style.visibility = 'visible';
    clearInterval(gameTimer);
  } else {
    resultMessage.textContent = 'WRONG!! Try Again';
    resultMessageContainer.style.backgroundColor = 'red';
  }
  currentSession.attempts++;
  playersData[currentPLayerIndex].session[playerSessionArray.length - 1] = currentSession;
  saveToLocalStorage();
  event.target.userAnswer.value = '';
  if (currentSession.correctAttempts >= correctAnswerAmount) {
    displayCongratsMessage();
  }
}


function handleNextQuestionButton(event) {
  event.preventDefault();
  timeBlock.textContent = '';
  displayRandomCodeBlock();
  timer(timeLeft);
  timeBlock.style.visibility = 'visible';
  nextButton.style.visibility = 'hidden';
  enterButton.style.visibility = 'visible';
  resultMessage.textContent = '';
  resultMessageContainer.style.backgroundColor = 'white';
}


function timer(seconds) {
  var timeleft = seconds;
  clearInterval(gameTimer);
  gameTimer = setInterval(function () {
    if (timeleft <= 0) {
      clearInterval(gameTimer);
      resultMessageContainer.style.backgroundColor = 'red';
      resultMessage.textContent = "Time's up";
      enterButton.style.visibility = 'hidden';
      nextButton.style.visibility = 'visible';
    } else {
      timeBlock.textContent = timeleft + ' Seconds left';
    }
    timeleft--;
  }, 1000);
}


function addElementToPage(elementType, content, parentEl) {
  var newEl = document.createElement(elementType);
  newEl.textContent = content;
  parentEl.appendChild(newEl);
}


function displayCongratsMessage() {
  statusBarContainer.style.display = 'none';
  timerDisplay.style.display = 'none';
  resultDisplay.style.display = 'none';
  codeBlockDisplay.style.display = 'none';
  userInputBox.style.display = 'none';
  nextButtonContainer.style.display = 'none';
  goToResultPageContainer.style.width = '500px';
  goToResultPageContainer.style.height = '250px';
  congratsMessage.textContent = 'Congratulations!!';
  congratsMessage2.textContent = 'You Found our Errors!! Come back again for more training.';
}

initializeGame();