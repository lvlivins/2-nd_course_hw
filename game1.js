const checkNumber = document.querySelector('.game1-box__btn'); // метод querySelector - для поиска элементов в HTML-документе по CSS-селектору	
const userAnswer = document.getElementById('userAnswer'); // метод getElementById - для поиска элементов в HTML-документе по id  == объект.егоМетод(параметр);
const winText = document.querySelector('.game1-box__win-txt');
const noWinText = document.querySelector('.game1-box__nowin-txt');


checkNumber.onclick = function () {

    winText.style.display = 'none';
    noWinText.style.display = 'none'; // каждая попытка ввода будет убирать отображение текста, чтобы не оставалось

    const number = Number(userAnswer.value); // для получения ответа в textarea и преобразовании его в число 
    // + .value - спец свойство у элемента ввода (input, textarea), где хранится то, что ввёл пользователь. 
    // .textContent - для обычных элементов .innerHTML — если нужно HTML-содержимое

    if (Number.isNaN(number)) { // Number.isNaN() функция проверки на число
        alert('Введите число!');
        return;
    }

    if (number < 1 || number > 100) {
        alert('Число должно быть от 1 до 100!');
        return;
    }

    if (number === 46) {
        winText.style.display = 'block';
    } else {
        noWinText.style.display = 'block';
        if (number < 46) {
            alert('Число больше 45');
        } else {
            alert('Число меньше 47');
        }
        // alert(number < 46 ? 'Число больше 45' : 'Число меньше 47'); == сокращённая форма if-else:
    }
};