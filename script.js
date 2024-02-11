const questions = [
    {
        question: "Which is largest animal in te world?",
        answers: [
            { text: "Shark", correct: false},
            { text: "Blue Whale", correct: True},
            { text: "Elephant", correct: false},
            { text: "Giraffe", correct: false},
        ]
    },

    // {
    //     question: "Which is largest animal in te world?",
    //     answers: [
    //         { text: "Shark", correct: false},
    //         { text: "Blue Whale", correct: True},
    //         { text: "Elephant", correct: false},
    //         { text: "Giraffe", correct: false},
    //     ]
    // },

    {
        question: "Which is the smallest country in te world?",
        answers: [
            { text: "Vatican city", correct: True},
            { text: "Bhutan ", correct: False},
            { text: "Nepal", correct: false},
            { text: "Shri Lanka", correct: false},
        ]
    },

    {
        question: "Which is largest Desart in te world?",
        answers: [
            { text: "Kalahari", correct: false},
            { text: "Gobi", correct:false },
            { text: "Sahara", correct: false},
            { text: "Antarctica", correct: True},
        ]
    },


    {
        question: "Which is smallest continent in te world?",
        answers: [
            { text: "Asia", correct: false},
            { text: "Australia", correct:True },
            { text: "Arctic", correct: false},
            { text: "Africa", correct: false},
        ]
    },
    
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.
    question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct
        }
        button.addEventListener("click",selctAnswer);
    });
}
function resetState() {
    nextButton.style.display = "none";
    while(answerButton.firstChild){}
    answerButtons.removeChild(answerButton.firstChild);
};

function resetState(){
    nextButton.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}
startQuiz();