var scoreP = 0;
var scoreC = 0;
var caption = document.querySelector('.caption h2');
var playerRock = document.querySelector('#rock');
var playerRock = document.querySelector('#paper');
var playerRock = document.querySelector('#scissors');

function rng() {
    return Math.floor(Math.random() * 3) + 1;
};

