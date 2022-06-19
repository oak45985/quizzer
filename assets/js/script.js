// var timer = 0;
var timerEl = document.getElementById('countdown');
var startQuizEl = document.querySelector("#start-button");
var questionListEl = document.querySelector("#question-list");
var createQuizEl = [];
var qOne  = ['This is question 1', 'Answer 1.1', 'Answer 1.2', 'Answer 1.3', 'Answer 1.4'];
var qTwo  = ['This is question 2', 'Answer 2.1', 'Answer 2.2', 'Answer 2.3', 'Answer 2.4'];
var qThr  = ['This is question 3', 'Answer 3.1', 'Answer 3.2', 'Answer 3.3', 'Answer 3.4'];
var qCycle = [];

var killButton = function(event) {
    event.preventDefault();
    // console.log("You've started the quiz!");
    var button = document.getElementById('start-button');
    button.remove()

    countdown();

    beginQuiz();
};

var beginQuiz = function () {

    var newQuestionEl = document.createElement("h3");
    newQuestionEl.className = "quiz-title";
    newQuestionEl.innerHTML = qOne[0]
    questionListEl.appendChild(newQuestionEl);

    var newAnswerOneEl = document.createElement("button");
    newAnswerOneEl.className = "quiz-question"
    newAnswerOneEl.innerHTML = qOne[1]
    questionListEl.appendChild(newAnswerOneEl);

    var newAnswerTwoEl = document.createElement("button");
    newAnswerTwoEl.className = "quiz-question"
    newAnswerTwoEl.innerHTML = qOne[2]
    questionListEl.appendChild(newAnswerTwoEl);

    var newAnswerThrEl = document.createElement("button");
    newAnswerThrEl.className = "quiz-question"
    newAnswerThrEl.innerHTML = qOne[3]
    questionListEl.appendChild(newAnswerThrEl);

    var newAnswerFouEl = document.createElement("button");
    newAnswerFouEl.className = "quiz-question"
    newAnswerFouEl.innerHTML = qOne[4]
    questionListEl.appendChild(newAnswerFouEl);
};


var cycleQuestion = function(event) {

    var qTry = qOne + qTwo + qThr;
    // for (var i = 0; i < qTry.length; i++) {
        
    // }
    console.log(qTry);

    
};

// var createQuizEl = function(quizQuestion) {
//     var document.createElement("div");

//     // return quizQuestion;
// }

// var quizQuestion = function() {
//     var actionContainerEl = document.createElement("div");
//     actionContainerEl.className = "question-list";

//     var questionForQuizEl = document.createElement("h3");
//     questionForQuizEl.textContent = qOne[question];

//     var choiceOneButtonEl = document.createElement("button");
//     choiceOneButtonEl.textContent = "Answer 1";
//     choiceOneButtonEl.setAttribute("data-task-id");
//     actionContainerEl.appendChild(choiceOneButtonEl);

//     var choiceTwoButtonEl = document.createElement("button");
//     choiceTwoButtonEl.textContent = "Answer 2";
//     choiceTwoButtonEl.setAttribute("data-task-id");
//     actionContainerEl.appendChild(choiceTwoButtonEl);

//     var choiceThrButtonEl = document.createElement("button");
//     choiceThrButtonEl.textContent = "Answer 3";
//     choiceThrButtonEl.setAttribute("data-task-id");
//     actionContainerEl.appendChild(choiceThrButtonEl);

//     var choiceFouButtonEl = document.createElement("button");
//     choiceFouButtonEl.textContent = "Answer 4";
//     choiceFouButtonEl.setAttribute("data-task-id");
//     actionContainerEl.appendChild(choiceFouButtonEl);



//     return actionContainerEl;
// }

function countdown() {
    var timeLeft = 60;

    var timeInterval = setInterval(function () {
        if (timeLeft > 1) {
            timerEl.textContent = timeLeft;
            timeLeft--;
        }
        else if (timeLeft === 1) {
            timerEl.textContent = timeLeft;
            timeLeft--;
        }
        else {
            timerEl.textContent = "";
            clearInterval(timeInterval);
            displayMessage("get 'em next time you lucky fuck");
        }
    }, 1000);

}

startQuizEl.addEventListener('click', killButton);
startQuizEl.addEventListener('click', cycleQuestion);