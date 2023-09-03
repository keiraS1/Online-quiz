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
            {text:" 'True' ", correct: false}, //may need to change because of quotation marks
            {text:"1234", correct: false},
            {text:"'False'", correct: false},//may need to change because of quotation marks
            {text:"False", correct: true}
        ]
    }, 

    {
        question: "If var expression2 = false, what is the value of console.log(expression1 &&  !expression2 ?",
        answers: [
            {text:"False",correct: false}, 
            {text:"Undefined", correct: false},
            {text:" 'True' ", correct: false},//may need to change because of quotation marks
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



var questionEl = document.getElementById("question");
var answerButton = document.getElementById("answeroption");
var homePage = document.getElementById("homepage");
var startQuizBtn = document.getElementById("startquizbutton");
var quizSheet = document.getElementById("quizsheet");

startQuizBtn.addEventListener("click",startQuiz);

function startQuiz() {
//    console.log("this works right??");
    startQuizBtn.classList.add("hide");
    homePage.classList.add("hide");
    timerOn();
    
    showQuestions();

}

currentQuestionIndex = 0
score = 0


function collectPoints (){

}
function showQuestions(){
    
}
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
        }
    }, 1000);
}

// timerOn();
