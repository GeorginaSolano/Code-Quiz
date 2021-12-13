
var startGameEl = document.querySelector("#intstructions-container");
var btnStartEl = document.querySelector("#start-game");
var timerEl = document.querySelector(".timer");
var timeLeft = 10;
var timerInterval;
var questionIndex = 0;


var questions = [
    { qtn:'Arrays in Javascript can be used to store_________ .', 
      correctAns:'4. All of the above.',
      ansOptions: [{option: '1. numbers'},{option: '2. boolean'},{option:'3. string'}, {option:'4. All of the above'}]

    },
    { qtn: 'What does DOM stand for?',
      correctAns: '2. Document Object Model',
      ansOptions: [ {option: '1. Do Order Model'}, {option: '2. Document Object Model'}, {option: 'Document Order Message'}, {option: '4. Distance Object Module'}]
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
    //get question froim array
    //question content to the element including title and choices as buttons
    questions[questionIndex].;
    //event listener choices
        //answerclick function
}

function answerClicjk(){
    //penalise time
    //increase questionnindex

}

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

btnStartEl.addEventListener("click", startgame)