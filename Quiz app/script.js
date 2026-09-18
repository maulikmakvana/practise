
const questions = [
    {
        q: "HTML stands for?",
        options: ["Hyper Text Markup Language", "High Text Language", "Home Tool Language", "None"],
        answer: 0
    },
    {
        q: "CSS is used for?",
        options: ["Logic", "Styling", "Database", "Server"],
        answer: 1
    },
    {
        q: "JavaScript makes website?",
        options: ["Interactive", "Only colorful", "Only fast", "None"],
        answer: 0
    },
    {
        q: "Which is a JavaScript variable keyword?",
        options: ["let", "html", "css", "body"],
        answer: 0
    },
    {
        q: "Which symbol is used for an array?",
        options: ["{}", "()", "[]", "<>"],
        answer: 2
    }
];


let index = 0;
let score = 0;
let time = 10;
let timer;


const start = document.getElementById("start");
const quizBox = document.getElementById("quiz-box");
const question = document.getElementById("question");
const options = document.getElementById("options");
const timeText = document.getElementById("time");
const next = document.getElementById("next");
const result = document.getElementById("result");
const restart = document.getElementById("restart");


start.onclick = function () {

    start.style.display = "none";
    quizBox.style.display = "block";

    showQuestion();

};


function showQuestion() {

    clearInterval(timer);

    time = 10;
    timeText.innerText = time;

    question.innerText = questions[index].q;

    options.innerHTML = "";

    questions[index].options.forEach(function (option, i) {

        let button = document.createElement("button");

        button.innerText = option;

        button.onclick = function () {
            checkAnswer(button, i);
        };

        options.appendChild(button);

    });

    timer = setInterval(function () {

        time--;
        timeText.innerText = time;

        if (time == 0) {
            clearInterval(timer);
            nextQuestion();
        }

    }, 1000);

}


function checkAnswer(button, answer) {

    clearInterval(timer);

    if (answer == questions[index].answer) {

        button.classList.add("correct");
        score++;

    } else {

        button.classList.add("wrong");

    }

}


next.onclick = function () {
    nextQuestion();
};


function nextQuestion() {

    index++;

    if (index < questions.length) {

        showQuestion();

    } else {

        quizBox.style.display = "none";
        result.innerText = "Score: " + score + " / " + questions.length;
        restart.style.display = "inline-block";

    }

}


restart.onclick = function () {

    index = 0;
    score = 0;

    result.innerText = "";
    restart.style.display = "none";
    quizBox.style.display = "block";

    showQuestion();

};