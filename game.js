'use strict';

//grab html elements
var timerBox = document.getElementById('timer-box');
var timer = document.getElementById('timer');
var incorrectAnswerBox = document.getElementById('incorrect-answer-box');
var wrongAnswer = document.getElementById('wrong-answer');
var scoreBoardBox = document.getElementById('scoreboard-box');
var scoreboard = document.getElementById('scoreboard');
var surveyQuestionEl = document.getElementById('question-box');
var surveyAnswerOne = document.getElementById('answer-one');
var surveyAnswerTwo = document.getElementById('answer-two');
var surveyAnswerThree = document.getElementById('answer-three');
var surveyAnswerFour = document.getElementById('answer-four');
var surveyAnswerFive = document.getElementById('answer-five');
var surveyAnswerSix = document.getElementById('answer-six');
var surveyBoxes = document.getElementsByClassName('answer-box');
var answerContainer = document.getElementById('answer-submit');
var answerForm = document.getElementById('answerform');
var playNowBox = document.getElementById('play-now');
var playNowButton = document.getElementById('play-now-button');
var answerContainer = document.getElementById('survey-answers');

//(low priority) display welcome message to user showing playername

//variables
var surveyQuestionAndAnswerArray = [];
var previouslyRendered = [];
var playerScore = 0;
var wrongAnswerTracker = 0;

//constructor to instantiate survey questions and answers
function SurveyQuestionSet (surveyQuestion, surveyAnswer1, surveyAnswer2, surveyAnswer3, surveyAnswer4, surveyAnswer5, surveyAnswer6) {
  this.surveyQuestion = surveyQuestion;
  this.surveyAnswer1 = surveyAnswer1;
  this.surveyAnswer2 = surveyAnswer2;
  this.surveyAnswer3 = surveyAnswer3;
  this.surveyAnswer4 = surveyAnswer4;
  this.surveyAnswer5 = surveyAnswer5;
  this.surveyAnswer6 = surveyAnswer6;

  surveyQuestionAndAnswerArray.push(this);
}

new SurveyQuestionSet ('Tell us something that many people do just once a week', 'church', 'grocery shop', 'laundry', 'clean house', 'sleep in', 'eat out');
new SurveyQuestionSet ('Name something you might eat with a hamburger', 'french fries', 'soup', 'salad', 'onion rings', 'tater tots', 'pickles');
new SurveyQuestionSet ('How long is an "unbearable" commute?', '1 hour', '30 minutes', '45 minutes', '2 hours', '1.5 hours');
new SurveyQuestionSet ('Name something you always have to keep plugged in', 'TV', 'phone', 'computer', 'lamp', 'headphones', 'computer mouse');
new SurveyQuestionSet ('Name a metal old coins might be made out of', 'silver', 'gold', 'copper', 'bronze', 'zinc', 'steel');
new SurveyQuestionSet ('Name a superhero member of the Justice League', 'superman', 'wonder woman', 'aquaman', 'the flash', 'cyborg');
new SurveyQuestionSet ('Name a type of bear', 'grizzly', 'polar', 'panda', 'teddy', 'brown', 'black');

//event listener for submit answer button
answerForm.addEventListener('submit', checkAnswer);

function randomizeSurveyQuestion (max){
  return Math.floor(Math.random() * max);
}

//function to display random survey question
  //current logic is trying to make sure that the same question question isn't repeated back to back
      //another option- make sure that no questions repeat in a single user session
function displayRandomSurveyQuestion () {
  var currentSurveyQuestionIndex = randomizeSurveyQuestion (surveyQuestionAndAnswerArray.length);
  while(previouslyRendered === currentSurveyQuestionIndex){
    currentSurveyQuestionIndex = randomizeSurveyQuestion(surveyQuestionAndAnswerArray.length);
  }
  previouslyRendered.push(currentSurveyQuestionIndex);
  console.log('current survey index: ' + currentSurveyQuestionIndex);

  var renderedQuestion = document.createElement('h4');
  renderedQuestion.textContent = surveyQuestionAndAnswerArray[currentSurveyQuestionIndex].surveyQuestion;
  surveyQuestionEl.appendChild(renderedQuestion);
}
displayRandomSurveyQuestion();

//create a timer function

//create event handler function for the play now button
    //ceate event listener
    //display random question (invoke displayRandomSurveyQuestion function here)
    //invoke timer function
    //hide button

    
//function to show wrong answer alert
  //replace content generated to img
  //add buzzer sound
function showWrongAnswer(){
  if(wrongAnswerTracker > 0){
    var incorrect = document.createElement('h4');
    incorrect.textContent = 'wrong';
    wrongAnswer.appendChild(incorrect);
  }
}

//function to render player score
function renderScore(){
  var scoreData = document.createElement('h4');
  scoreData.textContent = playerScore;
  scoreBoardBox.appendChild(scoreData);
}

//event handler function for answer submit button
  //if answer is correct, render answer to the DOM, add points to score
  //track and render current score
function checkAnswer(event){
  event.preventDefault();
  var playerAnswer = event.target.answerForm.value;
  var answeredCorrectly = false;
  for(var i=0; i < surveyQuestionAndAnswerArray.length; i++){
    if (playerAnswer === surveyQuestionAndAnswerArray[i].surveyAnswer1){
      var topAnswerData = document.createElement('h4');
      topAnswerData.textContent = surveyQuestionAndAnswerArray[i].surveyAnswer1;
      surveyAnswerOne.appendChild(topAnswerData);

      answeredCorrectly = true;

      playerScore += 6;

      // console.log('top answer ' + playerScore);

    }else if (playerAnswer === surveyQuestionAndAnswerArray[i].surveyAnswer2){
      var secondAnswerData = document.createElement('h4');
      secondAnswerData.textContent = surveyQuestionAndAnswerArray[i].surveyAnswer2;
      surveyAnswerTwo.appendChild(secondAnswerData);

      answeredCorrectly = true;

      playerScore += 5;

    }else if (playerAnswer === surveyQuestionAndAnswerArray[i].surveyAnswer3){
      var thirdAnswerData = document.createElement('h4');
      thirdAnswerData.textContent = surveyQuestionAndAnswerArray[i].surveyAnswer3;
      surveyAnswerThree.appendChild(thirdAnswerData);

      answeredCorrectly = true;

      playerScore += 4;
    }else if (playerAnswer === surveyQuestionAndAnswerArray[i].surveyAnswer4){
      var fourthAnswerData = document.createElement('h4');
      fourthAnswerData.textContent = surveyQuestionAndAnswerArray[i].surveyAnswer4;
      surveyAnswerFour.appendChild(fourthAnswerData);

      answeredCorrectly = true;

      playerScore +=3;
    }else if (playerAnswer === surveyQuestionAndAnswerArray[i].surveyAnswer5){
      var fifthAnswerData = document.createElement('h4');
      fifthAnswerData.textContent = surveyQuestionAndAnswerArray[i].surveyAnswer5;
      surveyAnswerFive.appendChild(fifthAnswerData);

      answeredCorrectly = true;
      playerScore +=2;

    }else if (playerAnswer === surveyQuestionAndAnswerArray[i].surveyAnswer6){
      var sixthAnswerData = document.createElement('h4');
      sixthAnswerData.textContent = surveyQuestionAndAnswerArray[i].surveyAnswer6;
      surveyAnswerSix.appendChild(sixthAnswerData);

      answeredCorrectly = true;

      playerScore +=1;
    }
  }
  renderScore(playerScore);
  event.target.answerForm.value = null;
  if (answeredCorrectly === false) {
    wrongAnswerTracker++; //if wrong answer === 3, end game
    console.log('wrong answer :' + wrongAnswerTracker);
    showWrongAnswer();
  }
  if (wrongAnswerTracker === 3){
    console.log('game over');
    localStorage.setItem('playerScore', playerScore);
  }
}

//write a function for what happens when:
  //user gets three answers wrong
  //timer runs out

//connect local storage

















