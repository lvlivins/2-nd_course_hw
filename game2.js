const taskElement = document.getElementById('myText');
const answerInput = document.getElementById('userAnswer');
const okButton = document.querySelector('.games-box__btn_game2');

function generateTask() {
    const a = Math.floor(Math.random() * 10) + 1;
    const b = Math.floor(Math.random() * 10) + 1;
    const actions = ['+', '-', '*', '/'];
    const action = actions[Math.floor(Math.random() * 4)];

    if (action === '+') {
        taskElement.textContent = `${a} + ${b}`;
        return a + b;
    }
    if (action === '-') {
        const max = Math.max(a, b);
        const min = Math.min(a, b);
        taskElement.textContent = `${max} - ${min}`;
        return max - min;
    }
    if (action === '*') {
        taskElement.textContent = `${a} × ${b}`;
        return a * b;
    } else {
        taskElement.textContent = `${a * b} ÷ ${a}`;
        return b;
    }
}

let correctAnswer = generateTask();

okButton.onclick = () => {
    const userAnswer = Number(answerInput.value);

    if (userAnswer === correctAnswer) {
        alert('Верно!');
        correctAnswer = generateTask();
    } else {
        alert(`Неверно!`);
    }

    answerInput.value = '';
    answerInput.focus();
};