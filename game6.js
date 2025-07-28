const btnChangeColor = document.querySelector('.games-box__btn')
const bodyShowColor = document.querySelector('.games-body')

btnChangeColor.addEventListener ('click' , function() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256); 
    const b = Math.floor(Math.random() * 256); 
    bodyShowColor.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
})