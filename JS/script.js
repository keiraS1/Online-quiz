var questionEl = document.getElementById("question");
var answerButton = document.getElementById("answeroption");
var homePage = document.getElementById("homepage");
var startQuizBtn = document.getElementById("startquizbutton");
var quizSheet = document.getElementById("quizsheet");
var score = document.getElementById("currentscore");


var questions = [
    {
        question: "What does HTML stand for?",
        answers: [
            {text: "HyperText Manual language", correct: false},
            {text:"HyperText Markup Language", correct: true},
            {text:"Host Testing Maneuver Language",  correct: false},
            {text:"Handy Text Making Language",  correct: false}
        ]
        },

    {
        question: "Select the Boolean value.",
        answers: [
            {text:" 'True' ", correct: false}, 
            {text:"1234", correct: false},
            {text:" 'False' ", correct: false},
            {text:"False", correct: true}
        ]
    }, 

    {
        question: "If var expression2 = false, what is the value of console.log(expression1 &&  !expression2 ?",
        answers: [
            {text:"False",correct: false}, 
            {text:"Undefined", correct: false},
            {text:" 'True' ", correct: false},
            {text:"True", correct: true}
        ]
    }, 


    {
        question: "What is the name for a variable placed within a function?",
        answers: [
            {text:"Local Scope",  correct: true},
            {text:"Internal Scope", correct: false},
            {text:"External Scope", correct: false},
            {text:"Global Scope", correct: false}
        ]
    }, 

    {
        question: "What does the '.' symbole represent in CSS?",
        answers: [
            {text:"id", correct: false},
            {text:"body", correct: false},
            {text:"class",correct: true},
            {text:"header", correct: false}
        ]
    }, 
];

let currentQuestion = 0;
var score = 0;













startQuizBtn.addEventListener("click", startQuiz);

function startQuiz() {
//    console.log("this works right??");
    startQuizBtn.classList.add("hide");
    homePage.classList.add("hide");
    timerOn();
    
    showQuestions();

}


// function collectPoints (){

// }
function showQuestions(){
    console.log("does this work in the console")
    console.log(questions);

    currentQuestion = 0;
    // quizSheet.removeAttribute("none");
    // quizSheet.classList.remove("none");
    questionEl.innerHTML = questions[currentQuestion].question;
}

// showQuestions()

// must make for loop for questions



// startQuiz();

    // timer within the quiz
    var secondLeft = 75

var timerEl = document.querySelector(".timerZ");

function timerOn(){
    var secondsInterval = setInterval(function(){
        secondLeft--;
        timerEl.textContent = secondLeft + " second(s) left to complete the quiz";

        if (secondLeft === 0) {
            clearInterval(secondsInterval);
            window.location.assign("http://127.0.0.1:5500/Online-quiz/highscores.html");
        }
    }, 1000);
}

// timerOn();
