const bass = new Audio('sounds/bass.wav');
const clap = new Audio('sounds/clap.wav');

const one = document.querySelector('.one');
const two = document.querySelector('.two');

one.addEventListener('click', e => {
    setInterval(bass.pause(), 50)
    bass.play();

})
two.addEventListener('click', e => {
    clap.play();
})

window.addEventListener('keypress', e => {
    console.log(KeyboardEvent())
})