const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft= document.querySelector('#time-left')
const score = document.querySelector('#score')

let result = 0

function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('mole')
    })
    let randomPostion = square[Math.random() * 9]
}

function moveMole() {
    let timerId = null
    timerId = setInterval(randomSquare, 500)

}
moveMole()
