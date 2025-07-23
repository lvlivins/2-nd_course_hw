const checkNumber = document.querySelector('.games-box__btn');
const userAnswer = document.getElementById('userAnswer');
const winText = document.querySelector('.games-box__win-txt');
const noWinText = document.querySelector('.games-box__nowin-txt');

// +1 диапазон становится 1 до 100, а не от 0 до 100 
// Math.random() — генерирует случайное число от 0 до 1 
// parseInt() - преобразует строку в целое число / убирает дробь

const secretNumber = parseInt(Math.random() * 100) + 1;

checkNumber.onclick = function () {
    const number = Number(userAnswer.value);

    if (isNaN(number) || number < 1 || number > 100) {
        return alert('Введите число от 1 до 100!');
    }

    if (number === secretNumber) {
        winText.style.display = 'block';
        noWinText.style.display = 'none';
        return;
    }
    else {
        noWinText.style.display = 'block';
        winText.style.display = 'none';

        if (number < secretNumber) {
            alert('Число больше ' + number);
        } else {
            alert('Число меньше ' + number);
        }
    }
};

console.log('Загаданное число:', secretNumber);


// Угадывается только одно заданное число
// checkNumber.onclick = function () {

//     winText.style.display = 'none';
//     noWinText.style.display = 'none';
//     // каждая попытка ввода будет убирать отображение текста, чтобы не оставалось

//     const number = Number(userAnswer.value);
//     для получения ответа в textarea и преобразовании его в число
//     .value - спец свойство у элемента ввода (input, textarea), где хранится то, что ввёл пользователь.
//     .textContent - для обычных элементов
//     .innerHTML — если нужно HTML-содержимое

//     if (Number.isNaN(number)) {
//         Number.isNaN()
//         alert('Введите число!');
//         return;
//     }

//     if (number < 1 || number > 100) {
//         alert('Число должно быть от 1 до 100!');
//         return;
//     }

//     if (number === 46) {
//         winText.style.display = 'block';
//     } else {
//         noWinText.style.display = 'block';
//         if (number < 46) {
//             alert('Число больше 45');
//         } else {
//             alert('Число меньше 47');
//         }
//     }
// };