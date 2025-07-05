// // Задание 1 
const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
];

console.log(people.sort(upAge)); // преобразует все элементы в строки -> исп функцию-компаратор a,b a - b

function upAge(a, b) {
    return a.age - b.age
}

// Задание 2
function isPositive(number) {
    if (number > 0) {
        return true;
    }
}

function isMale(arr) {
    if (arr.gender == 'male') {
        return true;
    }
}

function filter(arr, callback) {
    const newMass = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i]) == true) {
            newMass.push(arr[i]);
        }
    }
    return newMass;
};

console.log(filter([3, -4, 1, 9], isPositive));

const people0 = [
    { name: 'Глеб', gender: 'male' },
    { name: 'Анна', gender: 'female' },
    { name: 'Олег', gender: 'male' },
    { name: 'Оксана', gender: 'female' }
];

console.log(filter(people0, isMale));

// Задание 3
let currentDate = new Date();

const stopTimer = setInterval(() => {
    console.log(currentDate);
}, 1000);

setTimeout(() => {
    clearInterval(stopTimer);
    console.log(`Прошло 30 секунд`)
}, 5000);

// Задание 4
function delayForSecond(callback) {
    setTimeout(() => {
        callback();
    }, 1000);
}

delayForSecond(function () {
    console.log('Привет, Глеб!');
})
// Задание 5

function delayForSecond(cb) {
    setTimeout(() => {
        console.log(`Прошла одна секунда`);
        if (true) { cb(); } // можно просто cb();
    }, 1000)
}

function sayHi(name) {
    console.log(`Привет, ${name}!`);
}

delayForSecond(
    function () {  // функция-обертка? 
        sayHi('Глеб')
    });
