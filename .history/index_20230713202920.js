var scoreP = 0;
var scoreC = 0;
var caption = document.querySelector('.caption h2');
var btn = document.querySelector('#btn');

function rng1() {
    return (Math.floor(Math.random() * 3) + 1);
};

function rng2() {
    return (Math.floor(Math.random() * 3) + 1);
};

btn.addEventListener('click', function() {
    rng1();
    rng2();

    if (rng1 === 1) {
        
    }
})
