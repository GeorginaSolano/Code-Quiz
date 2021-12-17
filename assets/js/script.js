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
var timeLeft = 20;
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
function showStartPage() {
    containerHighscoresEl.classList.add("hidden");
    containerHighscoresEl.classList.remove("show");
    startGameEl.classList.remove("hidden");
    startGameEl.classList.add("show");
    containerScoreEl.removeChild(containerScoreEl.removeChild.lastChild);
    questionIndex = 0;
    gameOver = "";
    timerEl.textContent = 0;
    score = 0;

    if (correctEl.className = "show"){
        correctEl.classList.remove("show");
        correctEl.classList.add("hidden");
    }
    if (wrongEl.className = "show"){
        wrongEl.classList.remove("show");
        wrongEl.classList.add("hidden");
    }
}

function setTime(){
    timeLeft = 20;
    var timerCheck = setInterval(function(){
        timerEl.innerText = timeLeft;
        timeLeft --;
        if (gameOver) {
            clearInterval(timerCheck);
        }
        if (timeLeft < 0){
            showScore();
            timerEl.innerText = 0;
            clearInterval(timerCheck);
        }
    }, 1000);
}
function startGame() {
    // classes added to show or hide start and quiz screen
    startGameEl.classList.add("hidden");
    startGameEl.classList.remove("show");
    containerQuestionsEl.classList.remove("hidden");
    containerQuestionsEl.classList.add("show");
    // Shuffle questions
    arrayShuffledQuestions = questions.sort(() => Math.random()-0.5);
    setTime;
    setQuestion();
}

function setQuestion(){
    resetAnswers();
    dispalayQuestion(arrayShuffledQuestions[questionIndex]);
}

function resetAnswers() {
    while (answerButtonEl.firstChild) {
        answerButtonEl.removeChild(answerButtonEl.firstChild);
    }
}
//display question and answer option buttons
function dispalayQuestion(index) {
    questionEl.innerText = index.qtn;
    for (var i=0; i<index.ansOptions.length; i++){
        var answerButton = document.createElement("button");
        answerButton.innerText = index.ansOptions[i].option;
        answerButton.classList.add("btn");
        answerButton.classList.add("answerbtn");
        answerButton.addEventListener("click", answerCheck);
        answerButtonEl.appendChild(answerButton);

    }
}
// display message Correct on screen
function answerCorrect() {
    if (correctEl.className = "hidden") {
        correctEl.classList.remove("hidden");
        correctEl.classList.add("banner");
        wrongEl.classList.remove("banner");
        wrongEl.classList.add("hidden");
    }
}
// display message Wrong on screen
function answerWrong() {
    if (wrongEl.className = "hidden") {
        wrongEl.classList.remove("hidden");
        wrongEl.classList.add("banner");
        correctEl.classList.remove("banner");
        correctEl.classList.add("hidden");
    }
}

// check if answer is correct
function answerCheck(event) {
    var selectedanswer = event.target;
    if (arrayShuffledQuestions[questionIndex].correctAns === selectedanswer.innerText) {
        answerCorrect();
        score = score + 5
    }
    else {
        answerWrong();
        score = score -1;
        timeLeft = timeLeft - 10;
    }
    questionIndex++;
    if (arrayShuffledQuestions.length > questionIndex + 1) {
        setQuestion();

    }
    else {
        gameOver = "true";
        showScore();
    }
}
//Display final score at end of game
function showScore() {
    containerQuestionsEl.classList.add("hidden");
    containerEndEl.classList.remove("hidden");
    containerEndEl.classList.add("show");

    var scoreDisplay = document.createElement("p");
    scoreDisplay.innerText = ("Your final score is "+score+"!");
    containerScoreEl.appendChild(scoreDisplay);

}
// highscore form
function createHighScore(event){
    event.preventDefault();
    var initials = document.querySelector("#initials").value;
    if (!initials) {
        alert("Enter your initials.");
        return;
    }
    formInitials.reset();

    var HighScore = {
        initials: initials,
        score : score
    }
}



// on click start game
btnStartEl.addEventListener("click", startGame)
