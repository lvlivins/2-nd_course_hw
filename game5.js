
const quiz = [
    {
        question: "Какого цвета небо?",
        options: ["1. Красный", "2. Синий", "3. Зеленый"],
        correctAnswer: 2 // номер правильного ответа
    },
    {
        question: "Сколько дней в неделе?",
        options: ["1. Шесть", "2. Семь", "3. Восемь"],
        correctAnswer: 2
    },
    {
        question: "Сколько у человека пальцев на одной руке?",
        options: ["1. Четыре", "2. Пять", "3. Шесть"],
        correctAnswer: 2
    }
];

// По заданию в уроке
// let sum = 0;

// function askQuestion() {
//     for (let i = 0; i < quiz.length; i++) {
//         alert(quiz[i].question);
//         const answer = Number(prompt(quiz[i].options));

//         if (answer === quiz[i].correctAnswer) {
//             sum++;
//         }
//     }
// };

// askQuestion();
// alert(sum);

// По своему
const taskText = document.getElementById('taskText');
const taskAnswer1 = document.getElementById('taskAnswer1');
const taskAnswer2 = document.getElementById('taskAnswer2');
const taskAnswer3 = document.getElementById('taskAnswer3');
const numCorrectAnswers = document.getElementById('numCorrectAnswers');

let sum = 0;
let i = 0;

function askQuestion() {

    if (i >= quiz.length) {
        numCorrectAnswers.innerHTML = sum; //  пихнуть в нач чтоб закончилось -инчае покажется вопрос, но ответов не будет и все застопиться
        return;
    }

    const question = quiz[i];
    taskText.innerHTML = question.question;
    taskAnswer1.innerHTML = question.options[0];
    taskAnswer2.innerHTML = question.options[1];
    taskAnswer3.innerHTML = question.options[2];

    taskAnswer1.onclick = function () {
        checkAnswer(1);
    };

    taskAnswer2.onclick = function () {
        checkAnswer(2);
    };

    taskAnswer3.onclick = function () {
        checkAnswer(3);
    };
}

function checkAnswer(selectAnswer) {

    if (selectAnswer === quiz[i].correctAnswer) {
        sum++;
    }
    i++;
    askQuestion();
}

askQuestion();