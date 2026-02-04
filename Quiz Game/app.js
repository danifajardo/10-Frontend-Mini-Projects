// DOM Elements
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const startButton = document.getElementById("start-btn");
const questionText = document.getElementById("question-text");
const answerContainer = document.getElementById("answer-container");
const currentQuestionSpan = document.getElementById("current-question");
const totalQuestionSpan = document.getElementById("total-question");
const scoreSpan = document.getElementById("score");
const finalScoreSpan = document.getElementById("final-score");
const maxScoreSpan = document.getElementById("max-score");
const resultMessage = document.getElementById("result-message");
const restartButton = document.getElementById("restart-btn");
const progressBar = document.getElementById("progress");

//Quiz questions

const quizQuestions = [
    {
        question: "What is the capital of France?",
        answers: [
            {text: "London", correct: false},
            {text: "Paris", correct: true},
            {text: "Lisbon", correct: false},
            {text: "Prague", correct: false}
        ]
    },
    {
        question: "What stands for O.N.U?",
        answers: [
            {text: "Original Nuts from Uganda", correct: false},
            {text: "Ovnis Untited for Nascar", correct: false},
            {text: "Organiation of United Nations", correct: true},
            {text: "Obese Unified for Nachos", correct: false}
        ]
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: [
            {text: "Venus", correct: false},
            {text: "Mars", correct: true},
            {text: "Jupiter", correct: false},
            {text: "Saturn", correct: false}
        ]
    },
    {
        question: "What is the largest ocean on Earth?",
        answers: [
            {text: "Atlantic Ocean", correct: false},
            {text: "Indian Ocean", correct: false},
            {text: "Artic Ocean", correct: false},
            {text: "Pacific Ocean", correct: true}
        ]
    },
    {
        question: "Which is NOT a programming language?",
        answers: [
            {text: "Java", correct: false},
            {text: "CY", correct: true},
            {text: "Python", correct: false},
            {text: "Javascript", correct: false}
        ]
    }
];

//Quiz state variables
let currentQuestionIndex = 0;
let score = 0;
let answersDisabled = false;

totalQuestionSpan.textContent = quizQuestions.length;
maxScoreSpan.textContent = quizQuestions.length;

//event listeners

startButton.addEventListener("click", startQuiz)
restartButton.addEventListener("click", restartQuiz)

function startQuiz(){
    //restart variables
    currentQuestionIndex = 0;
    scoreSpan.textContent = 0;

    startScreen.classList.remove("active");
    quizScreen.classList.add("active");

    //show the first question
    showQuestion();
}

function showQuestion(){
    if(currentQuestionIndex > 4){
        currentQuestionIndex = 0;
        //should to redirect to the result screen
    }else{
        //set text of the question
        questionText.textContent = quizQuestions[currentQuestionIndex].question;
        //set answers
        for (let index = 0; index < quizQuestions[currentQuestionIndex].length; index++) {
            const element = array[index];
            
        }
        //add 
    }
}

function selectAnswer(element, id, answer){
    
}

function restartQuiz(){
    console.log("quiz re-started");
}


