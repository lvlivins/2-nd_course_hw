// Задание 1
const btnEl = document.querySelector('.body-btn1')
const mainTitle = document.querySelector('.body-h1')

btnEl.addEventListener('click', function () {
    if (mainTitle.style.display === 'block') {
        mainTitle.style.display = 'none'
    } else {
        mainTitle.style.display = 'block'
    }
})

// Задание 2
const btnEl2 = document.querySelector('.body-btn2')
const mainTxt = document.querySelector('.body-txt')

btnEl2.addEventListener('click', function () {
    mainTxt.style.color = 'blue'
})

// Задание 3
const btnEl3 = document.querySelector('.body-btn3')

btnEl3.addEventListener('click', function () {
    mainTitle.textContent = 'Привет, мир!'
})

// Задание 4
const deskTxt = document.querySelectorAll('.description')

deskTxt.forEach(function (eachP) {
    eachP.textContent = 'Измененный текст'
})

// Задание 5
const deskTxt2 = document.querySelectorAll('.description')

deskTxt2.forEach(function (eachP) {
    eachP.textContent = 'Новый текст'
})

// Задание 6
const btnEl4 = document.querySelector('.body-btn4')

btnEl4.addEventListener('click', function () {
    const newEl = document.createElement('p')
    newEl.textContent = 'Новый абзац'
    document.body.appendChild(newEl)
})

// Задание 7
const btnEl5 = document.querySelector('.body-btn5')
const firstDesc = document.querySelector('.description')

btnEl5.addEventListener('click', function () {
    firstDesc.remove()
})