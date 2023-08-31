var quizQuestions = [
    {
        question: "What does HTML stand for?",
        answers: {
            a:"HyperText Manual language",
            b:"HyperText Markup Language",
            c:"Host Testing Maneuver Language",
            d:"Handy Text Making Language"
        },
        correctAnswer: "b"
    }, 

    {
        question: "Select the Boolean value.",
        answers: {
            a:" 'True' ", //may need to change because of quotation marks
            b:"1234",
            c:"'False'",//may need to change because of quotation marks
            d:"False"
        },
        correctAnswer: "d"
    }, 

    {
        question: "If var expression2 = false, what is the value of console.log(expression1 &&  !expression2 ?",
        answers: {
            a:"False", 
            b:"Undefined",
            c:" 'True' ",//may need to change because of quotation marks
            d:"True"
        },
        correctAnswer: "d"
    }, 


    {
        question: "What is the name for a variable placed within a function?",
        answers: {
            a:"Local Scope", 
            b:"Internal Scope",
            c:"External Scope",
            d:"Global Scope"
        },
        correctAnswer: "a"
    }, 

    {
        question: "What does the '.' symbole represent in CSS?",
        answers: {
            a:"id", 
            b:"body",
            c:"class",
            d:"header"
        },
        correctAnswer: "c"
    }, 
];

var questionEl = document.getElementById("#question");
var multiChoice = document.getElementById("#multiplechoice");
var nextQuestion = document.getElementById("#nextquestionbtn");

var scoreNumber = 0;
 