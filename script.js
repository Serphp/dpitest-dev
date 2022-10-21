const screen = document.querySelectorAll('.screen');
const start_btn = document.getElementById('.start-btn');

let seconds = 0;
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
        screen[1].classList.add('up');
        setTimeout(createPoint, 1000);
        startGame();
    });
});

function start(){
    setInterval(increaseTime, 1000);
}