var containerQuestionsEl = document.getElementById("question-container");
var questionEl = document.getElementById("question");
var answerButtonEl = document.getElementById("answer-buttons");
var containerEndEl = document.getElementById("end-container");
var containerScoreEl = document.getElementById("score-banner");
var formInitials = document.getElementById("initials-form");
var containerHighscoresEl = document.getElementById("high-score-container");
var viewHighScoreEl = document.getElementById("view-high-scores");
var listHighScoreEl = document.getElementById("high-score-list");
var correctEl = document.getElementById("correct");
var wrongEl = document.getElementById("wrong");

var btnGoBackEl = document.querySelector("#go-back");
var btnClearScoresEl = document.querySelector("#clear-high-scores");

var startGameEl = document.querySelector("#intstructions-container");
var btnStartEl = document.querySelector("#start-game");
var timerEl = document.querySelector(".timer");
var timeLeft = 10;
var timerInterval;
var questionIndex = 0;

var score = 0;
var highScores =[];

// array of questions for quiz
var questions = [
    { qtn:'Arrays in Javascript can be used to store_________ .', 
      correctAns:'4. All of the above.',
      ansOptions: [{option: '1. numbers'},
                    {option: '2. boolean'},
                    {option:'3. string'}, 
                    {option:'4. All of the above'}]

    },
    { qtn: 'What does DOM stand for?',
      correctAns: '2. Document Object Model',
      ansOptions: [ {option: '1. Do Order Model'}, 
                    {option: '2. Document Object Model'}, 
                    {option: 'Document Order Message'}, 
                    {option: '4. Distance Object Module'}]
    },
    { qtn: 'Which of the following is not a valid data type?',
      correctAns: '3. Alert',
      ansOptions: [ {option: '1. String'}, 
                    {option: '2. Numbers'}, 
                    {option: '3. Alert'}, 
                    {option: '4. Boolean'}]
}
];

function startgame(){
     // activate the timer to count down
     timerInterval = setInterval(tick, 1000);
     timerEl.textContent = timeLeft;

     // hide initial screen
    startGameEl.setAttribute("class", "hidden");
    // display the quetions
    startQuestions();
    // call the function that calls the questions
}
function startQuestions(){
    //show the question el
   containerQuestionsEl.setAttribute("class","show");
    //get question from array
   var index = questions.length * Math.random() << 0;
    console.log(questions[index].qtn);
    //question content to the element including title and choices as buttons
    questions[index].qtn;
    
    //event listener choices
        //answerclick function
}

// function answerClick(){
//     //penalise time
//     //increase questionnindex

// }

function tick (){
    if (timeLeft<=0){
        endQuiz();
    }
    timeLeft--;
    timerEl.textContent = timeLeft;

}

function endQuiz(){

    clearInterval(timerInterval);
    console.log("endQuiz");
    //show end quiz 
}
// on click start game
btnStartEl.addEventListener("click", startgame)
