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


rock.addEventListener('click', function() {
    player.src = 'resources/rockleft.png';
})
paper.addEventListener('click', function() {
    player.src = 'resources/paperleft.png';
})
scissors.addEventListener('click', function() {
    player.src = 'resources/scissorsleft.png';
})