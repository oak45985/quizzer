// var timer = 0;
var timerEl = document.getElementById('countdown');
var startQuizEl = document.querySelector("#start-button");
var questionListEl = document.querySelector("#question-list");
var showScoreEl = document.querySelector("#high-score");
var createQuizEl = [];
var ques  = [ { 
        question: 'This is question 1', 
        answers: { a: 'Answer 1.1', b: 'Answer 1.2', c: 'Answer 1.3', d: 'Answer 1.4'}, 
        correctAnswer: 'a',
        quesNum: "1"},
        { 
        question: 'This is question 2', 
        answers: { a: 'Answer 2.1', b: 'Answer 2.2', c: 'Answer 2.3', d: 'Answer 2.4'}, 
        correctAnswer: 'c',
        quesNum: "2"},
        { 
        question: 'This is question 3', 
        answers: { a: 'Answer 3.1', b: 'Answer 3.2', c: 'Answer 3.3', d: 'Answer 3.4'}, 
        correctAnswer: 'd',
        quesNum: "3"}
        ];
var currentQ = 0;
var quizScore = 0;
var timeLeft = 60;
var timeInterval;
var loadScore;

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
        var showCorrectEl = document.createElement("h3");
        showCorrectEl.className = "correct-wrong";
        showCorrectEl.textContent = "Question " + ques[currentQ].quesNum + ": CORRECT!";
        questionListEl.appendChild(showCorrectEl);
        //create positive reinforcement
    } else {
        console.log("wrong");
        timeLeft = timeLeft - 10;
        var showCorrectEl = document.createElement("h3");
        showCorrectEl.idName = "correct-wrong";
        showCorrectEl.textContent = "Question " + ques[currentQ].quesNum + ": WRONG!";
        questionListEl.appendChild(showCorrectEl);
        //create negative reinforcement
        //subtract time from counter item
    };

    if (currentQ < ques.length - 1) {
        currentQ = currentQ + 1;//currentQ++
        whichQuestion()
        function fadeOut()
        {
            var item = showCorrectEl;
            item.remove();
        }
        var delay = 500;
        setTimeout(fadeOut, delay);
    } else { 
        console.log("end of quiz");
        clearInterval(timeInterval);
        enterInitials();
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

function enterInitials () {

    var scoreDisplay = document.createElement("h3");
    scoreDisplay.textContent = "Score: "+ (quizScore*25 + timeLeft);
    var inputElement = document.createElement("input");
    var buttonElement = document.createElement("button");
    buttonElement.textContent = "Save User Initials & Restart the Quiz";
    questionListEl.innerHTML = "";
    questionListEl.appendChild(scoreDisplay);
    questionListEl.appendChild(inputElement);
    questionListEl.appendChild(buttonElement);

    buttonElement.addEventListener("click", function(event) {
        // event.preventDefault();
        console.log("submit clicked");

        var oldScore = function() {
            var larry = localStorage.getItem('student');
            
            if (larry === null) {
                oldScoreJsn = {name: "", score: parseInt(0)};
                // console.log("larry yes");
            }
            else{
                oldScoreJsn = JSON.parse(larry);
                // console.log("larry no");
            }

        };
        
        oldScore();

        console.log(oldScoreJsn);

        var student = {
            name: inputElement.value,
            score: parseInt(quizScore*25 + timeLeft),
        };
        console.log(student.score);
        var saveScore = function() {
        localStorage.setItem("student", JSON.stringify(student));
        };

        if ( oldScoreJsn.score < student.score ) {
            saveScore(); 
        } else {
            console.log("NOPE");
        };
        // debugger;
        location.reload();
    });
}

function countdown() {
    // var timeLeft = 60;

     timeInterval = setInterval(function () {
        if (timeLeft > 1) {
            timerEl.textContent = timeLeft;
            timeLeft--;
        }
        else if (timeLeft === 1) {
            timerEl.textContent = timeLeft;
            timeLeft--;
        }
        else {
            timerEl.textContent = "TIME UP";
            clearInterval(timeInterval);
            enterInitials();
        }
    }, 1000);

}

// startQuizEl.addEventListener('click', killButton);

var loadScore = function () {
    var pistol1 = localStorage.getItem('student');
    
    if (pistol1 === null) {
        pistol2 = {name: "", score: parseInt(0)};
        var loadScoreEl = document.createElement("p");
        loadScoreEl.className = "final-score"
        loadScoreEl.innerHTML = "<p>There's no current high score!</p>";
        showScoreEl.appendChild(loadScoreEl);
    }
    else{
        pistol2 = JSON.parse(pistol1);
        console.log(JSON.parse(pistol1));
    var loadScoreEl = document.createElement("p");
    loadScoreEl.className = "final-score"
    loadScoreEl.innerHTML = "<p>NAME: " + JSON.parse(pistol1).name + "<br>SCORE: " + JSON.parse(pistol1).score +"</p>";
    showScoreEl.appendChild(loadScoreEl);
    }
    // console.log(JSON.parse(pistol1));
    // var loadScoreEl = document.createElement("p");
    // loadScoreEl.className = "final-score"
    // loadScoreEl.innerHTML = "<p>NAME: " + JSON.parse(pistol1).name + "<br>SCORE: " + JSON.parse(pistol1).score +"</p>";
    // showScoreEl.appendChild(loadScoreEl);
};
// loadScore();

if ( document.URL.includes("index.html")) {
    startQuizEl.addEventListener('click', killButton); }
else { loadScore();}
// startQuizEl.addEventListener('click', cycleQuestion);