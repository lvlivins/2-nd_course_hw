// Задание 1
let rep = 1;
while (rep <= 2) {
    console.log('Привет')
    rep++;
}
// Задание 2
let i = 1;
while (i < 6) {
    console.log(i);
    i++;
}
// Задание 3
let ii = 7;
do {
    console.log(ii);
    ii++;
}
while (ii < 23);
// Задание 4
const obj = {
    Коля: '200',
    Вася: '300',
    Петя: '400',
}
for (let key in obj) {
    console.log(`${key}: зарплата ${obj[key]} долларов`);
}
// Задание 5
let n = 1000;
let sum = n / 2;
let num = 0;
while (sum > 50) {
    console.log(sum);
    sum = sum / 2;
    num++;
}
console.log(sum); // последнее значение (<50) после которого не будет работать условие
console.log(num); // кол-во иттераций c прохождением условия
// Задание 6
let fridayFirst = 5;
while (fridayFirst <= 31) {
    console.log(`Сегодня пятница, ${fridayFirst}-е число. Необходимо подготовить отчет.`);
    fridayFirst += 7;
}
// Доп задание 
const months = [
    1, 2, 3, 4, 5,
    6, 7, 8, 9, 10
];
for (let count = 0; count < months.length; count++) {
    if (months[count] <= 1) {
        console.log(months[count]);
    }
}