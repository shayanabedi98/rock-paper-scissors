var scoreP = 0;
var scoreC = 0;
var caption = document.querySelector('.caption h2');
var rock = document.querySelector('#rock');
var paper = document.querySelector('#paper');
var scissors = document.querySelector('#scissors');
var computer = document.querySelector('.computer img');
var player = document.querySelector('.player img');
var btn = document.querySelectorAll('.btn');

function rng() {
    return Math.floor(Math.random() * 3) + 1;
};

rock.addEventListener('click', function() {
    player.src = 'resources/rockleft.png';
})
paper.addEventListener('click', function() {
    player.src = 'resources/paperleft.png';
})
scissors.addEventListener('click', function() {
    player.src = 'resources/scissorsleft.png';
})

for (let i = 0; i < btn.length; i ++){
    btn[i].addEventListener('click', function() {
        rng();
        if (rng() === 1) {
            computer.src = 'resources/rock.png';
        } else if (rng() === 2) {
            computer.src = 'resources/paper.png';
        } else if (rng() === 3) {
            computer.src = 'resources/scissors.png';
        }
    });
};