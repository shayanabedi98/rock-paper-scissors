function rng1() {
    return (Math.floor(Math.random() * 3) + 1);
}

document.querySelector('h1').addEventListener('click', function() {
    innerHTML = 'Clicked!';
});