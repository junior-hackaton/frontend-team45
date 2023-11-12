let score = 0;
let time = 0;
const fears = document.querySelector('.fear');
const obstacles = document.querySelector('.obstacle');
const gameSpace = document.querySelector('#game-board');
const timeLeft = document.querySelector('.time')

// movingFears() => {
//     const position = fears.getBoundingClientRect();
//     let move = () => {
//        fears.style.top = `${position+50}px`; 
//     };
//     let moveDown = () => {
//         fears.style.top = `${position-50}px`;
//     }
// }
// setInterval(movingFears, 2000)

function killFears () {
    fears.addEventListener('click', (event) => {
        event.preventDefault();
        fears.classList.add('.shake'); // сделать анимацию тряски при убийстве страхов;
        for (key of fears) {
            key.setAttribute('disabled', ''); // Страх по которому попали становится неактивным
        }
        setInterval(fearDisappear, 1000) 
        })
}
function fearDisappear() {
    fears.style.opacity = 0;
}


// Можно оставить две разные функции на добавление и убавление очков, но я решил объединить в одну, мне кажется, так лаконичнее выходит
// function obstacle_click () {
//     obstacles.addEventListener('click', (event) => {
//         if (event.target.classList.contains('obstacle')) {
//             score--
//         }
//     })
// }


gameSpace.addEventListener('click', event => { // Здесь счётчик увеличивается за клик по страху и уменьшается за клики в других областях
    if (event.target.classList.contains ('.fear')) {
        score++;
        event.target.killFears();
    } else {
        score--
    }
})

function gameStart() { //Старт игры запускает таймер
    setGameTime(timeLeft);
} 

function setGameTime(value) { //Выбранное время таймера прописывается в блоке
    timeLeft.innerHTML = `00:${value}`;
} 

function endOfTheGame() { // Игра останавливается при таймере равном 0
    if (time===0) {
        stopTheGame();
    }
} 

function stopTheGame() { //Таймер скрывается, при разном количестве очков выводятся разные сообщения.
    timeLeft.style.visibility = "hidden"
    if(score<=5) {
        gameSpace.innerHTML = `<h1>Количество очков:${score}.<br>Страхи пока мешают ребёнку адаптироваться в семье. Попробуйте помочь ему ещё раз</h1>`;
    } else if (score>5 && score<15) {
        gameSpace.innerHTML = `<h1>Количество очков:<span>${score}.</span><br>У Вас отлично получается! Сыграете ещё раз?</h1>`;
    } else {
        gameSpace.innerHTML = `<h1>Количество очков:<span>${score}.</span><br>Все страхи побеждены раз и навсегда! Сыграете ещё раз?</h1>`;
    }
} 