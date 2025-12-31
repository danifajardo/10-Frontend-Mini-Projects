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
    }
];


