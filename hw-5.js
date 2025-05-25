// Задание 1
function userAnswer1(a, b) {
    if (a < b) {
        return a;
    } else {
        if (a == b) {
            return b;
        } else {
            return b;
        }
    }
}

console.log(userAnswer(8, 4));
// Задание 2
function typeNumber() {
    let userAnswer2 = Number(prompt("Введите число для проверки на четность и нечетность."));
    if (userAnswer2 % 2 == 0) {
        alert("Число четное");
    } else {
        alert("Число нечетное");
    }
}
typeNumber();
// Задание 3 
function Number1(n) {
    console.log(n * n)
}

Number1(5);

function Number2(n) {
    let numberValue = n * n;
    return numberValue;
}

console.log(Number2(5));
// Задание 4
