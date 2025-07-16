// По заданию
// const gameVar = ["камень", "ножницы", "бумага"];
// const userAnswer = prompt(gameVar);


// function machineAnswer() {
//     const randomVar = Math.floor(Math.random() * gameVar.length); // 0 1 или 2 индекс 
//     const randomAnswer = gameVar[randomVar];
//     alert(`Выбор соперника ${randomAnswer}`);

//     if (randomAnswer == userAnswer) {
//         alert('Ничья.');
//     }

//     if (randomAnswer == 'камень' && userAnswer == 'ножницы') {
//         alert('Поражение!Побеждает камень.');
//     }

//     if (randomAnswer == 'ножницы' && userAnswer == 'бумага') {
//         alert('Поражение!Побеждают ножницы.');
//     }

//     if (randomAnswer == 'бумага' && userAnswer == 'камень') {
//         alert('Поражение!Побеждает бумага.');
//     }

//     if (randomAnswer == 'ножницы' && userAnswer == 'камень') {
//         alert('Победа!');
//     }

//     if (randomAnswer == 'бумага' && userAnswer == 'ножницы') {
//         alert('Победа!');
//     }

//     if (randomAnswer == 'камень' && userAnswer == 'бумага') {
//         alert('Победа!');
//     }

// };

// machineAnswer();

// Свой вариант 

const userAnswer1 = document.getElementById('userAnswer1');
const userAnswer2 = document.getElementById('userAnswer2');
const userAnswer3 = document.getElementById('userAnswer3');

const winText1 = document.getElementById('winText1');
const winText2 = document.getElementById('winText2');
const winText3 = document.getElementById('winText3');
const noWinText1 = document.getElementById('noWinText1');
const noWinText2 = document.getElementById('noWinText2');
const noWinText3 = document.getElementById('noWinText3');
const drawText = document.getElementById('drawText');



const gameVar = ["1. Камень", "2. Ножницы", "3. Бумага"];

function chooseAnswer() {

    userAnswer1.onclick = function () {
        machineAnswerAndUser(0);
    };
    userAnswer2.onclick = function () {
        machineAnswerAndUser(1);
    };

    userAnswer3.onclick = function () {
        machineAnswerAndUser(2);
    };
};

function machineAnswerAndUser(userAnswer) {
    const randomVar = Math.floor(Math.random() * gameVar.length); // 0 1 или 2 индекс

    winText1.style.display = 'none';
    winText2.style.display = 'none';
    winText3.style.display = 'none';
    noWinText1.style.display = 'none';
    noWinText2.style.display = 'none';
    noWinText3.style.display = 'none';
    drawText.style.display = 'none';

    if (randomVar === userAnswer) {
        drawText.style.display = 'block'
    } else if (randomVar === 0 && userAnswer === 1) {
        noWinText1.style.display = 'block';

    } else if (randomVar === 1 && userAnswer === 2) {
        noWinText2.style.display = 'block';

    } else if (randomVar === 2 && userAnswer === 0) {
        noWinText3.style.display = 'block';

    } else if (randomVar === 1 && userAnswer === 0) {
        winText1.style.display = 'block';

    } else if (randomVar === 2 && userAnswer === 1) {
        winText2.style.display = 'block';

    } else if (randomVar === 0 && userAnswer === 2) {
        winText3.style.display = 'block';
    }
};

chooseAnswer();


