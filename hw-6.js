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

for (let massiveNumber of number9) {
    for (element of massiveNumber) {
        togetherNumber.push(element)
    }
}
console.log(togetherNumber);
// (10)
const number10 = [2, 8, 5, 0];
let sumNumber10 = 0; // c const не выйдет !!! 

for (let i = 0; i < number10.length; i++) {
    sumNumber10 += number10[i];
    console.log(sumNumber10);
}
// (11)
const number11 = [2, 5, 8];
const squareNumber = number11.map(function (finalResult) {
    return finalResult ** 2;
});
console.log(squareNumber);
// (12)
const number12 = ['My', 'name', 'is', 'SlimShady'];
const lengthNumber = number12.map(function (finalLength) {
    return finalLength.length;
});
console.log(lengthNumber);
// (13)
const number13 = [-2, 5, -8];
const negativeNumber = number13.filter(function (negativeResult) {
    return negativeResult < 0;
});
console.log(negativeNumber);
// (14)
const number14 = [];
for (let i = 0; i < 10; i++) {
    const randomNumber = parseInt((Math.random() * 10) + 1);
    number14.push(randomNumber);
}
const evenNumber14 = number14.filter(function (evenNumber) {
    return evenNumber % 2 == 0;
});
console.log(number14);
console.log(evenNumber14);
// (15)
const number15 = [];
for (let i = 0; i < 6; i++) {
    const randomNumber15 = parseInt((Math.random() * 10) + 1);
    number15.push(randomNumber15);
}
const arithmeticAverage = number15.reduce(function (a, b) {
    return a + b / number15.length;
}, 0);

console.log(number15);
console.log(arithmeticAverage);