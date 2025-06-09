// let products = ['Кресло', 'Стул', 'Стол'];

// products[products.length] = 'Диван';
// console.log(products); // Результат: ['Кресло', 'Стул', 'Стол', 'Диван']
// (1) 
const number1 = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < number1.length; i++) {
    if (number1[i] == 10)
        break;
    console.log(number1[i]);
}
// (2)
const number2 = [1, 5, 4, 10, 0, 3];
console.log(number2[4]) // 0
// (3)
const number3 = [1, 5, 4, 10, 0, 3];
const joinedNumber = number3.join(" ");
console.log(joinedNumber);
// (4)
const number4 = [
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1]
]
for (let item of number4) {
    console.log(item);
}
// (5)
const number5 = [1, 1, 1];
const pushedNumber = number5.push(2, 2, 2);
console.log(number5);
// (6)
const number6 = [9, 8, 7, 'a', 6, 5];
const sortedNumber = number6.sort();
const poppedNumber = sortedNumber.pop();
console.log(sortedNumber);
// (7)
const number7 = [9, 8, 7, 6, 5];
const userInput = +prompt('Угадай число');
if (number7.includes(userInput)) {
    alert("Угадал!");
} else {
    alert("Не угадал!");
}
// (8)
const number8 = 'abcdef';
const splittedNumber = number8.split("");
const reversedNumber = splittedNumber.reverse();
const joinedNumber8 = reversedNumber.join("");
console.log(joinedNumber8);
// (9)
const number9 = [
    [1, 2, 3],
    [4, 5, 6]
];
const togetherNumber = [];

for (let arrIn of number9) {
    for (element of arrIn) {
        togetherNumber.push(element)
    }
}
console.log(togetherNumber);
// (10)
const number10 = [2, 8, 5, 0];
for (elementNumber10 of number10) {
}
10
15
15
// (11)