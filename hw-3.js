// Задание 1
let password = 'пароль';
let answer = String(prompt('Введите пароль'));
if (answer === password) {
    console.log('Пароль введен верно');
} else {
    console.log('Пароль введен неправильно');
}
// Задание 2
let c = 5;
if (c > 5 && c < 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}
// Задание 3
let d = 3; 
let e = 35;
if (d > 100 || e > 100) {
    console.log('Верно');
} else {
    console.log('Неверно');
}
// Задание 4
let a = '2';
let b = '3';
alert(Number(a) + Number(b));
// Задание 5
let monthNumber = Number(prompt('Введите номер месяца'));
switch (monthNumber) {
    case 1:
    case 2:
    case 3:        
        console.log('Весна')
        break;
    case 4:
    case 5:
    case 6:        
        console.log('Лето')
        break;
    case 7:
    case 8:
    case 9:        
        console.log('Осень')
        break;
    case 10:
    case 11:
    case 12:        
        console.log('Зима')
        break;
    default:
        console.log('Такого месяца не существует')
        break;
}
// Доп задание 1
let answer1 = Number(prompt ('Пожалуйста, введите любое число'));
alert(answer1);
let result = ((answer1 % 2) === 0) ? alert('Четное'): alert('Нечетное');
// Доп задание 2 
let clientOS = 1; 
if (clientOS === 0) {
    console.log('Установите версию приложения для iOS по ссылке');
} else if (clientOS === 1) {
    console.log('Установите версию приложения для Android по ссылке');
}
// Доп задание 3
let clientDeviceYear = 2015;
let clientOS1 = 1; 
if (clientOS === 0 && clientDeviceYear <= 2015) {
    console.log('Установите облегченную версию приложения для iOS по ссылке');
} else if (clientOS1 === 1 && clientDeviceYear <= 2015) {
    console.log('Установите облегченную версию приложения для Android по ссылке');
} else if ((clientOS1 === 0 || clientOS === 1) && clientDeviceYear >= 2015) {
    console.log('Установите приложение по ссылке');
}
