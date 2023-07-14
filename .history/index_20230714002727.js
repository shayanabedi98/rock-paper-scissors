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
    var pickedRock = player.src = 'resources/rockleft.png';
})
paper.addEventListener('click', function() {
    var pickedPaper = player.src = 'resources/paperleft.png';
})
scissors.addEventListener('click', function() {
    var pickedScissors = player.src = 'resources/scissorsleft.png';
})

for (let i = 0; i < btn.length; i ++){
    btn[i].addEventListener('click', function() {
        rng()
        if (rng() === 1) {
            var compRock = computer.src = 'resources/rock.png';
        } else if (rng() === 2) {
            var compPaper = computer.src = 'resources/paper.png';
        } else if (rng() === 3) {
            var compScissors = computer.src = 'resources/scissors.png';
        }
    });
}

if (pickedScissors === compScissors) {
    caption.innerHTML = 'wow'
}