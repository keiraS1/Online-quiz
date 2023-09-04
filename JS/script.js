var questionEl = document.getElementById("question");
var answerButton = document.getElementById("answeroption");
var homePage = document.getElementById("homepage");
var startQuizBtn = document.getElementById("startquizbutton");
var quizSheet = document.getElementById("quizsheet");
// var score = document.getElementById("currentscore");
var multipleChoice = document.getElementById("multiplechoice");

// timer within the quiz
var secondLeft = 75

var timerEl = document.querySelector(".timerZ");
var nextBtnQuestion = "Next Question";

var questions = [
    {
        question: "What does HTML stand for?",
        answers: [
            { text: "HyperText Manual language", correct: false },
            { text: "HyperText Markup Language", correct: true },
            { text: "Host Testing Maneuver Language", correct: false },
            { text: "Handy Text Making Language", correct: false }
        ]
    },

    {
        question: "Select the Boolean value.",
        answers: [
            { text: " 'True' ", correct: false },
            { text: "1234", correct: false },
            { text: " 'False' ", correct: false },
            { text: "False", correct: true }
        ]
    },

    {
        question: "If var expression2 = false, what is the value of console.log(expression1 &&  !expression2 ?",
        answers: [
            { text: "False", correct: false },
            { text: "Undefined", correct: false },
            { text: " 'True' ", correct: false },
            { text: "True", correct: true }
        ]
    },


    {
        question: "What is the name for a variable placed within a function?",
        answers: [
            { text: "Local Scope", correct: true },
            { text: "Internal Scope", correct: false },
            { text: "External Scope", correct: false },
            { text: "Global Scope", correct: false }
        ]
    },

    {
        question: "What does the '.' symbole represent in CSS?",
        answers: [
            { text: "id", correct: false },
            { text: "body", correct: false },
            { text: "class", correct: true },
            { text: "header", correct: false }
        ]
    },
];
let currentQuestion = 0;

startQuizBtn.addEventListener("click", startQuiz);

function startQuiz() {
    //    console.log("this works right??");
    quizSheet.classList.remove("hide");
    homePage.classList.add("hide");
    timerOn();
    nextQuestion();
    showQuestions();

}

// }
function showQuestions() {
    console.log("does this work in the console")
    console.log(questions);


    //pseudocoding -plain english
    //this function will make one question from the array appear at a time
    // take the questionEl variable and use it in this function to replace what is inside the questionEl
    questionEl.textContent = questions[currentQuestion].question;

    for (var i = 0; i < 4; i++) {
        // create the buttons that need to appear on the page. 
        var buttons = document.createElement("button")

        buttons.textContent = questions[currentQuestion].answers[i].text;
        buttons.classList.add("answeroption")

        // we need to create, add, append
        multipleChoice.append(buttons)
    }

}
// buttons.addEventListener("click", nextQuestion);

function nextQuestion (){
    // console.log("does this work")
    var nextbtn = document.createElement("button");
   
    nextbtn.textContent = nextBtnQuestion;
    nextbtn.classList.add("nextquestionbtn"); 
}


// must make a button for "next"

// difference between innerHTML and text content innerHTML- expect string text-content replace
// '<h2>Hello</h2>' - innerHtml - divs and containers
// 'Hello' - textContent - text elements
// showQuestions()

// must make for loop for questions



// startQuiz();


function timerOn() {
    var secondsInterval = setInterval(function () {
        secondLeft--;
        timerEl.textContent = secondLeft + " second(s) left to complete the quiz";

        if (secondLeft === 0) {
            clearInterval(secondsInterval);
            window.location.assign("http://127.0.0.1:5500/Online-quiz/highscores.html");
        }
    }, 1000);
}

// timerOn();
