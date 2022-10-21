const screen = document.querySelectorAll('.screen');
const start_btn = document.getElementById('.start-btn');


let score = 0;
let select_point = {};

start_btn.addEventListener('click', () => {
    screen[0].classList.add('up');
});

choose_point_btns.forEeach((btn) => {
    btn.addEventListener('click', () => {
        const img = btn.querySelector('img');
        const src = img.getAttribute('src');
        const alt = img.getAttribute('alt');
        select_point = { src, alt };
        //cambio de pantalla
        screen[1].classList.add('up');
        setTimeout(createPoint, 1000);
        startGame();
    });
});

function startGame(){
    setInterval(increaseTime, 1000);
}
// variables de incremento de tiempo
let seconds = 0;
const Tiempo = document.getElementById('time');
//
function increaseTime(){
    let step1 = Math.floor(seconds / 60);
    let step2 = seconds % 60;
    //Operador condicional ternario
    step1 = step1 < 10 ? `0${step1}` : step1;
    step2 = step2 < 10 ? `0${step2}` : step2;
    Tiempo.innerHTML = `Tiempo: ${step1}:${step2}`;
    seconds++;
}

function createPoint(){
    const point = document.createElement('div')
    //addpoint
    point.classList.add('point');
    const {x, y} = getrlocation()
    point.style.top = `${y}px`;
    point.style.left = `${x}px`;
    point.innerHTML = `<img src="${select_point.src}" alt="${select_point.alt}" style="transform: rotate(${Math.random() * 360}deg)" />`;
}

function getrlocation(){

}