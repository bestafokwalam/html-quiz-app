const questions = [
    {
        question: "What is the most friendly programming language",
        answers: [
            { text: "Javascript", correct: false},
            { text: "Pyhton", correct: false},
            { text: "Typescript", correct: false},
            { text: "Php", correct: true},
        ]
    },
    {
        question: "How long those it take to learn and understand HTML",
        answers: [
            { text: "Two weeks", correct: false},
            { text: "Two months", correct: false},
            { text: "Six weeks and 9days", correct: true},
            { text: "One year and 2 months", correct: false},
        ]
    },
    {
        question: "What is the most treanding AI ever used",
        answers: [
            { text: "Silicon.io", correct: false},
            { text: "ChatXboot", correct: false},
            { text: "ChatGPT 3.5", correct: true},
            { text: "ClickUp", correct: false},
        ]
    },
    {
        question: "If Yommie and Best where born in 1995, how old will they be today?",
        answers: [
            { text: "33years", correct: false},
            { text: "28years", correct: true},
            { text: "50years", correct: false},
            { text: "43years", correct: false},
        ]
    },
    {
        question: "How many headings those an html has.?",
        answers: [
            { text: "4", correct: false},
            { text: "5", correct: false},
            { text: "3", correct: false},
            { text: "6", correct: true},
        ]
    },
    {
        question: "What  are the three ways to write css with html?",
        answers: [
            { text: "inline,external and internal", correct: true},
            { text: "frontend, backend and full-stack", correct: false},
            { text: "none of the above", correct: false},
            { text: "code regularly", correct: false},
        ]
    },
    {
        question: "What is the best way to master programming?",
        answers: [
            { text: "daily practice", correct: true},
            { text: "weekly coding", correct: false},
            { text: "yearly project", correct: false},
            { text: "montly codings", correct: false},
        ]
    },
    {
        question: "how old is javascript?",
        answers: [
            { text: "33years", correct: false},
            { text: "28years", correct: true},
            { text: "50years", correct: false},
            { text: "43years", correct: false},
        ]
    }
];
const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;


function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selecttedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerBotton.children).forEach(button  => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < question.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

startQuiz();