// Задание 1

const word = 'js';
const upperCase = word.toUpperCase();

console.log(upperCase);

// Задание 2

const massiveExample = ['Первая строка', 'Вторая строка', 'Третья строка'];
const search = 'Вторая';

massiveExample.forEach((line) => {
    if (line.includes(search)) {

        console.log(line);
    }
});

// Задание 3

const num = 32.58884;

console.log(Math.floor(num));
console.log(Math.ceil(num));
console.log(Math.floor(num));

// Задание 4

const nums = [52, 53, 49, 77, 21, 32];

console.log(Math.max(...nums));
console.log(Math.min(...nums));

// Задание 5

const randomNumber = Math.floor((Math.random() * 10) + 1);

console.log(randomNumber);

// Задание 6

function randomNumsInMassive() {
    const number = 12;
    const newMass = [];
    for (let i = 0; i < number / 2; i++) {
        newMass.push(Math.floor(Math.random() * (number + 1)));
    }
    return newMass;
}

console.log(randomNumsInMassive());

// Задание 7

function randomBetweenNums() {
    const num1 = 12;
    const num2 = 24;
    const finalNum = Math.round(Math.random() * (num2 - num1) + num1);
    console.log(finalNum);
};

randomBetweenNums();

// Задание 8

const myDate = new Date().toLocaleDateString('ru-RU');

console.log(myDate);

// Задание 9

const currentDate = new Date().getTime();
const days73 = 73 * 24 * 60 * 60 * 1000;
const futureDateMS = currentDate + days73;
const futureDate = new Date(futureDateMS);

console.log(futureDate.toLocaleDateString('ru-RU'));

// Задание 10

function DateAndTimeInLocalForm() {
    const currentDate = new Date();
    const days = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
    const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

    return {
        fullDay: 'Дата: ' + currentDate.getDate() + ' ' + months[currentDate.getMonth()] + ' ' + currentDate.getFullYear() + ' - это ' + days[currentDate.getDay()],
        fullTime: 'Время: ' + currentDate.getHours() + ':' + currentDate.getMinutes() + ':' + currentDate.getSeconds()
    };
}

console.log(DateAndTimeInLocalForm().fullDay);
console.log(DateAndTimeInLocalForm().fullTime);