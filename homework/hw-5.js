// Задание 1
function smallNumber(a, b) {
    return a <= b ? a : b;
}

console.log(smallNumber(4, 8));
// Задание 2
// 1 вариант
function typeNumber() {
    let userAnswer2 = Number(prompt("Введите число для проверки на четность и нечетность."));
    if (userAnswer2 % 2 == 0) {
        alert("Число четное");
    } else {
        alert("Число нечетное");
    }
}

typeNumber();

// 2 вариант
const evenNumber = (Number) => {
    return Number % 2 == 0 ? `Число четное` : `Число нечетное`;
}

console.log(evenNumber(5));
// или const userInput = prompt("Введите число");
// const userAnswer = Number(userInput); 
// console.log(evenNumber(userAnswer));
// Задание 3
function giveNumber(someNumber) {
    const finalNumber = Number(someNumber);
    const result = finalNumber ** 2;
    return result;
}

console.log(giveNumber(55));
// Задание 4
const newInput = Number(prompt("Сколько вам лет?"));

function newUser() {
    if (newInput <= 0) {
        alert('Вы ввели неправильное значение')
    } else if (newInput >= 0 && newInput <= 12) {
        alert('Привет, друг!')
    } else if (newInput >= 13) {
        alert('Добро пожаловать!')
    }
}

newUser();
// Задание 5 - typeof number не сработает тк NaN в Number(prompt() станет Number и будет выполнять NaN

const firstNumber = Number(prompt("Введите первое число"));
const secondNumber = Number(prompt("Введите второе число"));

const rightNumber = (c, d) => {

    if (!isNaN(firstNumber) && !isNaN(secondNumber)) { // -> (isNaN(firstNumber) == false && isNaN(secondNumber) == false)
        console.log(c * d);
    } else {
        console.log('Одно или оба значения не являются числом');
    }
}

rightNumber(firstNumber, secondNumber);

// Задание 6
const askUser = Number(prompt("Введите число"));

function resultAnswer() {
    return (typeof askUser === 'number' && !isNaN(askUser))
        ? alert(`${askUser} в кубе равняется ${askUser ** 3}`)
        : alert('Переданный параметр не является числом')
}

// resultAnswer();
// Задание 7 toFixed() -> в строку, чтобы было число - > Number(()toFixed(2))

const pi = 3.14;

const circle1 = {
    radius: 5,
    getArea() {
        return pi * this.radius ** 2
    },
    getPerimeter() {
        return 2 * pi * this.radius
    }
}

const circle2 = {
    radius: 6,
    getArea() {
        return pi * this.radius ** 2
    },
    getPerimeter() {
        return 2 * pi * this.radius
    }
}

console.log(circle1.getArea());
console.log(circle1.getPerimeter());
console.log(circle2.getArea());
console.log(circle2.getPerimeter());