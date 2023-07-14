var scoreP = 0;
var scoreC = 0;
var caption = document.querySelector('.caption h2');
var rock = document.querySelector('#rock');
var paper = document.querySelector('#paper');
var scissors = document.querySelector('#scissors');
var computer = document.querySelector('.computer img');
var player = document.querySelector('.player img');
var btn = document.querySelectorAll('.btn');
var playerPick
var computerPick

function rng() {
    return Math.floor(Math.random() * 3) + 1;
};

rock.addEventListener('click', function() {
    player.src = 'resources/rockleft.png';
    playerPick = 'rock';
});
paper.addEventListener('click', function() {
    player.src = 'resources/paperleft.png';
    playerPick = 'paper';
});
scissors.addEventListener('click', function() {
    player.src = 'resources/scissorsleft.png';
    playerPick = 'scissors';
});

for (let i = 0; i < btn.length; i ++){
    btn[i].addEventListener('click', function() {
        rng();
        if (rng() === 1) {
            computer.src = 'resources/rock.png';
            computerPick = 'rock';
        } else if (rng() === 2) {
            computer.src = 'resources/paper.png';
            computerPick = 'paper';
        } else if (rng() === 3) {
            computer.src = 'resources/scissors.png';
            computerPick = 'scissors';
        }

        if (playerPick === computerPick) {
            caption.innerHTML = 'Tie!'
        } else if (playerPick === 'rock' && computerPick === 'paper') {
            caption.innerHTML = 'Point for Computer!'
        } else if (playerPick === 'scissors' && computerPick === 'rock') {
            caption.innerHTML = 'Point for Computer!'
        } else if (playerPick === 'paper' && computerPick === 'scissors') {
            caption.innerHTML = 'Point for Computer!'
        } else if (playerPick === 'rock' && computerPick === 'scissors') {
            caption.innerHTML = 'Point for Player!'
        } else if (playerPick === 'scissors' && computerPick === 'paper') {
            caption.innerHTML = 'Point for Player!'
        } else if (playerPick === 'paper' && computerPick === 'rock') {
            caption.innerHTML = 'Point for Player!'
        }
    });
};