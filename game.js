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
// var topAnswer = document.getElementById('top-answer');
var surveyAnswerTwo = document.getElementById('answer-two');
// var secondAnswer = document.getElementById('answer-two');
var surveyAnswerThree = document.getElementById('answer-three');
// var thirdAnswer = document.getElementById('answer-four');
var surveyAnswerFour = document.getElementById('answer-four');
// var fourthAnswer = document.getElementById('answer-four');
var surveyAnswerFive = document.getElementById('answer-five');
// var fifthAnswer = document.getElementById('answer-five');
var surveyAnswerSix = document.getElementById('answer-six');
// var sixthAnswer = document.get
var surveyBoxes = document.getElementsByClassName('answer-box');
var answerContainer = document.getElementById('answer-submit');
var answerForm = document.getElementById('answerform');
var playNowBox = document.getElementById('play-now');
var playNowButton = document.getElementById('play-now-button');
var answerContainer = document.getElementById('survey-answers');

// display welcome message to user showing playername

//variables


//create constructor to instantiate survey questions and answers

var surveyQuestionAndAnswerArray = [];
console.log(surveyQuestionAndAnswerArray);

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



//add event listener on the play now button
//create event handler function: change the display of
//playNow event listener
// playNowButton.addEventListener('click', playNow);
answerForm.addEventListener('submit', checkAnswer);



//add event listener on the submit answer button
//create event handler function


//create a function to display random survey question, make sure that the next survey question is different from the previous (or even different from the last 5 survey questions)

function randomizeSurveyQuestion (max){
  return Math.floor(Math.random() * max);
}

var previouslyRendered = [];

function displayRandomSurveyQuestion () {
  var currentSurveyQuestionIndex = randomizeSurveyQuestion (surveyQuestionAndAnswerArray.length);
  while(previouslyRendered.includes(currentSurveyQuestionIndex)){
    currentSurveyQuestionIndex = randomizeSurveyQuestion(surveyQuestionAndAnswerArray.length);
  }
  previouslyRendered.push(currentSurveyQuestionIndex);
  console.log(currentSurveyQuestionIndex);

  var renderedQuestion = document.createElement('h4');
  renderedQuestion.textContent = surveyQuestionAndAnswerArray[currentSurveyQuestionIndex].surveyQuestion;
  surveyQuestionEl.appendChild(renderedQuestion);
}

//  timer(seconds){
//   var timeLeft = 120;
// }

// function playNow(event) {
//   //invoke timer function?
// }

//render the point function will be outside of this checkAnswer function
var playerScore = 0;
var wrongAnswerTracker = 0;

function showWrongAnswer(){
  if(wrongAnswerTracker > 0){
    var incorrect = document.createElement('h4');
    incorrect.textContent = 'wrong';
    wrongAnswer.appendChild(incorrect);
  }
}

var answerInput = document.getElementById('answerinput');
function checkAnswer(event){
  event.preventDefault();
  answerInput.value = '';
  var playerAnswer = event.target.answerForm.value;
  var answeredCorrectly = false;
  for(var i=0; i < surveyQuestionAndAnswerArray.length; i++){
    if (playerAnswer === surveyQuestionAndAnswerArray[i].surveyAnswer1){
      var topAnswerData = document.createElement('h4');
      topAnswerData.textContent = surveyQuestionAndAnswerArray[i].surveyAnswer1;
      surveyAnswerOne.appendChild(topAnswerData);

      answeredCorrectly = true;

      playerScore += 6;
      console.log(playerScore);

    } else if (playerAnswer === surveyQuestionAndAnswerArray[i].surveyAnswer2){
      var secondAnswerData = document.createElement('h4');
      secondAnswerData.textContent = surveyQuestionAndAnswerArray[i].surveyAnswer2;
      surveyAnswerTwo.appendChild(secondAnswerData);

      answeredCorrectly = true;

      playerScore += 5;


    } else if (playerAnswer === surveyQuestionAndAnswerArray[i].surveyAnswer3){
      var thirdAnswerData = document.createElement('h4');
      thirdAnswerData.textContent = surveyQuestionAndAnswerArray[i].surveyAnswer3;
      surveyAnswerThree.appendChild(thirdAnswerData);

      answeredCorrectly = true;

      playerScore += 4;
    } else if (playerAnswer === surveyQuestionAndAnswerArray[i].surveyAnswer4){
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
  if (answeredCorrectly === false) {
    wrongAnswerTracker++; //if wrong answer === 3, end game
    console.log(wrongAnswerTracker);
    showWrongAnswer();
  }
  if (wrongAnswerTracker === 3){
    console.log('game over');
  }
}


//render wrong red x function that is called in the else if answer doesnt equal logic
displayRandomSurveyQuestion();










//create function to initialize game - essentially invoking the generate random survey question function, loading local storage, and the timer

//create timer function

//create a wrong answer display function

//create correct answer display function (survey answers renders to the browser)

//create function to generate next question when all survey answers are provided? "give me another question" ?



