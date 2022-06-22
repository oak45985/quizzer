// var timer = 0;
var timerEl = document.getElementById('countdown');
var startQuizEl = document.querySelector("#start-button");
var questionListEl = document.querySelector("#question-list");
var createQuizEl = [];
var ques  = [ { 
        question: 'This is question 1', 
        answers: { a: 'Answer 1.1', b: 'Answer 1.2', c: 'Answer 1.3', d: 'Answer 1.4'}, 
        correctAnswer: 'a'},
        { 
        question: 'This is question 2', 
        answers: { a: 'Answer 2.1', b: 'Answer 2.2', c: 'Answer 2.3', d: 'Answer 2.4'}, 
        correctAnswer: 'c'},
        { 
        question: 'This is question 3', 
        answers: { a: 'Answer 3.1', b: 'Answer 3.2', c: 'Answer 3.3', d: 'Answer 3.4'}, 
        correctAnswer: 'c'}
        ];
var currentQ = 0;
var quizScore = 0;

var killButton = function(event) {
    event.preventDefault();
    // console.log("You've started the quiz!");
    var button = document.getElementById('start-button');
    button.remove()

    countdown();

    beginQuizEl();
};

var beginQuizEl = function () {

    // var clickAnswerEl = [];

    var newQuestionEl = document.createElement("h3");
    newQuestionEl.className = "quiz-title";
    newQuestionEl.textContent = ques[0].question;
    questionListEl.appendChild(newQuestionEl);

    var newAnswerOneEl = document.createElement("button");
    newAnswerOneEl.className = "quiz-question"
    newAnswerOneEl.textContent = ques[0].answers.a;
    newAnswerOneEl.setAttribute("data-value","a");
    newAnswerOneEl.addEventListener("click", checkAnswer);
    questionListEl.appendChild(newAnswerOneEl);

    var newAnswerTwoEl = document.createElement("button");
    newAnswerTwoEl.className = "quiz-question"
    newAnswerTwoEl.textContent = ques[0].answers.b;
    newAnswerTwoEl.setAttribute("data-value", "b");
    newAnswerTwoEl.addEventListener("click", checkAnswer);
    questionListEl.appendChild(newAnswerTwoEl);

    var newAnswerThrEl = document.createElement("button");
    newAnswerThrEl.className = "quiz-question"
    newAnswerThrEl.textContent = ques[0].answers.c;
    newAnswerThrEl.setAttribute("data-value","c");
    newAnswerThrEl.addEventListener("click", checkAnswer);
    questionListEl.appendChild(newAnswerThrEl);

    var newAnswerFouEl = document.createElement("button");
    newAnswerFouEl.className = "quiz-question"
    newAnswerFouEl.textContent = ques[0].answers.d;
    newAnswerFouEl.setAttribute("data-value","d");
    newAnswerFouEl.addEventListener("click", checkAnswer);
    questionListEl.appendChild(newAnswerFouEl);

};

function checkAnswer(event) {
    // console.log(this,"onclick",event);
    
    var userSelect = this.getAttribute("data-value")
    if (userSelect === ques[currentQ].correctAnswer) {
        console.log("correct")
        quizScore = quizScore + 1;
        //create positive reinforcement
    } else {
        console.log("wrong")
        //create negative reinforcement
        //subtract time from counter item
    };

    if (currentQ < ques.length - 1) {
        currentQ = currentQ + 1;//currentQ++
        whichQuestion()
    } else { 
        console.log("end of quiz");
        //enter high score and log
    }
};

 var whichQuestion = function() {
  document.querySelector(".quiz-title").textContent = ques[currentQ].question;
  
  var qOption = document.querySelectorAll(".quiz-question");
  qOption[0].textContent = ques[currentQ].answers.a;
  qOption[1].textContent = ques[currentQ].answers.b;
  qOption[2].textContent = ques[currentQ].answers.c;
  qOption[3].textContent = ques[currentQ].answers.d;    
};

// var showQuestion = function(){
//     var currentQuestion = quizQuestions[questionNumber];
  
//     var title = document.getElementById('question-title');
//     title.textContent = currentQuestion.question
  
//     choicesElement.innerHTML = '';
  
//     currentQuestion.answers.forEach(function(option, index) {
//       var choiceButton = document.createElement('button')
//       choiceButton.setAttribute('value', option);
//       choiceButton.setAttribute('class', 'choice');
//       choiceButton.textContent = index + 1 + ':' + option;
//       //check if question is right or wrong
//       choiceButton.onclick = checkAnswer
//       choicesElement.appendChild(choiceButton);
  
//     });
//   };

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
// startQuizEl.addEventListener('click', cycleQuestion);