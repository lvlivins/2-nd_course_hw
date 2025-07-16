const userAnswer = document.getElementById('userAnswer');
const okButton = document.getElementById('okButton');
const textResult = document.getElementById('textResult');

function textReversed() {
    return userAnswer.value.toUpperCase().split('').reverse().join('');
}

okButton.onclick = function () {
    if (userAnswer.value) {
        textResult.innerHTML = textReversed(); // .innerHTML - вставка в HTML разметку
    }
    userAnswer.value = '';
}

// Более универсальный вариант
// function textReversed(forAnyOtherTextElementById) {
//     return forAnyOtherTextElementById.toUpperCase().split('').reverse().join('');
// }

// okButton.onclick = function () {

//     if (userAnswer.value) {
//         textResult.innerHTML = textReversed(userAnswer.value);
// // .innerHTML - вставка в HTML разметку. Можно поменять userAnswer.value на другое поле, куда вводиться текст
//     }
//     userAnswer.value = '';
// }