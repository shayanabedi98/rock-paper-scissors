function rng1() {
    return (Math.floor(Math.random() * 3) + 1);
}

var header = document.querySelector('h1');

header.addEventListener('click', function(){
    header.innerHTML = 'Clicked';
})