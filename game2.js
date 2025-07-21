const ArithmeticOperation = document.getElementById('ArithmeticOperation');
const userAnswer = document.getElementById('userAnswer');
const okButton = document.getElementById('okButton');
const winText = document.querySelector('.games-box__win-txt');
const noWinText = document.querySelector('.games-box__nowin-txt');


function ArithmeticProblemRandom() {
    const number1 = Math.floor(Math.random() * 10) + 1;
    const number2 = Math.floor(Math.random() * 10) + 1;
    const actions = ['+', '-', '*', '/'];
    const randomNumber = Math.floor(Math.random() * actions.length); // console.log(actions.length) == 4
    const action = actions[randomNumber]; // для рандомизированного выбора между 4 элементами в массиве по индексу

    if (action === '+' ) {
        ArithmeticOperation.innerText = `${number1} + ${number2}`;
        return number1 + number2;
    }
    if (action === '-') {
        ArithmeticOperation.innerText = `${number1} - ${number2}`;
        return number1 - number2;
    }
    if (action === '*') {
        ArithmeticOperation.innerText = `${number1} × ${number2}`;
        return number1 * number2;
    } else {
        ArithmeticOperation.innerText = `${number1} ÷ ${number2}`;
        return number1 / number2;
    }
}

let correctAnswer = ArithmeticProblemRandom();

okButton.onclick = function () {
    const answerText = userAnswer.value.replace(',', '.'); //   при вводе с запятыми - конверт в точки для понимания ответа js
    const userFinalAnswer = Number(answerText);

    if (userFinalAnswer === correctAnswer) {
        winText.style.display = 'block'; 
        noWinText.style.display = 'none';
        correctAnswer = ArithmeticProblemRandom(); // для создания новой задачи и так далее 
    } else {
        noWinText.style.display = 'block';
        winText.style.display = 'none';
    }

    userAnswer.value = ''; // чтоб чистилось поле ввода для нового примера 
};