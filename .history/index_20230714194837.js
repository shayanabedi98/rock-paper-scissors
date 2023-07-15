var scoreP = 0;
var scoreC = 0;
var winner = document.querySelector('.winner h1');
var caption = document.querySelector('.caption h2');
var rock = document.querySelector('#rock');
var paper = document.querySelector('#paper');
var scissors = document.querySelector('#scissors');
var computer = document.querySelector('.computer img');
var player = document.querySelector('.player img');
var btn = document.querySelectorAll('.btn');
var playerPick;
var computerPick;
var rules = document.querySelector('.rules');
var rulesClose = document.querySelector('.rules button');
var rulesButton = document.querySelector('.rules-btn button');

rules.style.visibility = 'hidden';

rulesButton.addEventListener('click', function() {
    rules.style.visibility = 'visible';
});

rulesClose.addEventListener('click', function() {
    rules.style.visibility = 'hidden';
    rules.style.animationDuration = '1s'
});

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
            caption.innerHTML = 'Tie!';
        } 
        
        else if ((playerPick === 'rock' && computerPick === 'paper') || (playerPick === 'scissors' && computerPick === 'rock') || (playerPick === 'paper' && computerPick === 'scissors')) {
            caption.innerHTML = 'Point for Computer!';
            scoreC ++;
        } 
        
        else if ((playerPick === 'rock' && computerPick === 'scissors') || (playerPick === 'scissors' && computerPick === 'paper') || (playerPick === 'paper' && computerPick === 'rock')) {
            caption.innerHTML = 'Point for Player!';
            scoreP ++;
        }

        document.querySelector('.player h3').innerHTML = 'Player: ' + scoreP;
        document.querySelector('.computer h3').innerHTML = 'Computer: ' + scoreC;

        if (scoreC === 3) {
            window.location.replace('./loser.html');
        } else if (scoreP === 3) {
            window.location.replace('./winner.html');
        }
    });
};

function playAgain() {
    window.location.replace('./index.html');
}

