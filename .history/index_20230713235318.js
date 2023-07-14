var scoreP = 0;
var scoreC = 0;
var caption = document.querySelector('.caption h2');
var rock = document.querySelector('#rock');
var paper = document.querySelector('#paper');
var scissors = document.querySelector('#scissors');
var computer = document.querySelector('.computer img');
var player = document.querySelector('.player img');

function rng() {
    return Math.floor(Math.random() * 3) + 1;
};

var pickedRock = rock.addEventListener('click', function() {
    player.src = 'resources/rockleft.png';
    caption.innerHTML = rng()
})
var pickedPaper = paper.addEventListener('click', function() {
    player.src = 'resources/paperleft.png';
})
var pickedScissors = scissors.addEventListener('click', function() {
    player.src = 'resources/scissorsleft.png';
})

if (pickedRock || pickedPaper || pickedScissors) {
    if (rng() = 1) {
        computer.src = 'resources/rock.png';
    } else if (rng() = 2) {
        computer.src = 'resources/paper/png';
    } else if (rng() = 3) {
        computer.src = 'resources/scissors.png';
    }
};