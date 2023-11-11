let score = 0;
const fears = document.querySelector('fear');
const obstacles = document.querySelector('obstacle');
const gameSpace = document.querySelector('#game-board');

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
        event.preventDefault()
        fears.classList.add('shake') // сделать анимацию тряски при убийстве страхов;
        for (key of fears) {
            key.setAttribute('disabled', ''); // Страх по которому попали становится неактивным
        }
        fears.style.opacity = 0;
        })
    }


// function obstacle_click () {
//     obstacles.addEventListener('click', (event) => {
//         if (event.target.classList.contains('obstacle')) {
//             score--
//         }
//     })
// }
// Можно оставить две разные функции на добавление и убавление очков, но я решил объединить в одну, мне кажется, так лаконичнее выходит

gameSpace.addEventListener('click', event => {
    if (event.target.classList.contains ('fear')) {
        score++
        event.target.killFears()
    } else {
        score--
    }
    // Здесь счётчик увеличивается за клик по страху и уменьшается за клики в других областях
})


