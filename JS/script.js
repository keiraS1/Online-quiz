// index.html page
// if (window.location.pathname === "/Online-quiz/index.html") {
    localStorage.removeItem('score'); //this will prevent the last score from adding onto the next players score 
    let score = 0;
    var questionEl = document.getElementById("question");
    var answerButton = document.getElementById("answeroption");
    var homePage = document.getElementById("homepage");
    var startQuizBtn = document.getElementById("startquizbutton");
    var quizSheet = document.getElementById("quizsheet");
    var multipleChoice = document.getElementById("multiplechoice");

    // timer within the quiz
    var secondLeft = 75

    var timerEl = document.querySelector(".timerZ");
    // multiple choice questions to use
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
    // for keeping track of number of questions to loop through
    let currentQuestion = 0;
    // when clicking on the start button- it will beging the questions function
    startQuizBtn.addEventListener("click", startQuiz);

    function startQuiz() {
        quizSheet.classList.remove("hide"); //making the quizsheet appear
        homePage.classList.add("hide"); // hiding the homepage so the quizsheet can take its place on the same page
        timerOn();
        showQuestions();

        document.getElementById('nextquestionbtn').addEventListener('click', () => {
            nextQuestion(); //this allow the player to go to the next question even if they don't answer a question
        });
    }


    function showQuestions() {

        //pseudocoding -plain english
        //this function will make one question from the array appear at a time
        // take the questionEl variable and use it in this function to replace what is inside the questionEl
        questionEl.textContent = questions[currentQuestion].question;
        multipleChoice.innerHTML = ''; 

        for (var i = 0; i < 4; i++) {
            // create the button that need to appear on the page. 
            var button = document.createElement("button")

            button.textContent = questions[currentQuestion].answers[i].text;
            button.classList.add("answeroption")
            button.addEventListener("click", function (event) {
                const selectedOption = questions[currentQuestion].answers.find(a => a.text === event.target.textContent);
                if (selectedOption.correct) {
                    // add 10 points to the players score when answer chosen is correct
                    score += 10;
                    document.getElementById('score').textContent = score;
                } else {
                    // remove 10 seconds from the timer if wrong answer
                    secondLeft -= 10;
                }

                localStorage.setItem('score', score);
                nextQuestion();
            });

            // we need to create, add, append
            multipleChoice.append(button)
        }
    }


    function nextQuestion() {
        if (currentQuestion === questions.length - 1) { // if this is the last question it will bring the player to the highscore page to input their name to store the score
            window.location.href = 'highscores.html';
        } else {
            // shows the next question
            currentQuestion += 1;
            showQuestions();
        }
    }

    //timer function starting at 75 and counting down every 1000 milisecs or 1 second
    function timerOn() {
        var secondsInterval = setInterval(function () {
            secondLeft--;
            timerEl.textContent = secondLeft + " second(s) left to complete the quiz";

            if (secondLeft === 0) {
                clearInterval(secondsInterval);
                window.location.href = 'highscores.html';
            }
        }, 1000);
    }


