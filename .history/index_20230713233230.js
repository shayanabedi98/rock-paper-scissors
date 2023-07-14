var scoreP = 0;
var scoreC = 0;
var caption = document.querySelector('.caption h2');
var Rock = document.querySelector('#rock');
var paper = document.querySelector('#paper');
var scissors = document.querySelector('#scissors');
var computer = document.querySelector('.computer img').src
var player = document.querySelector('player')

function rng() {
    return Math.floor(Math.random() * 3) + 1;
};

