const text = document.querySelector('.text');
const btn = document.querySelector('button');
const atr = document.querySelector('.author');
const div = document.querySelector('.quote')
const bad = document.querySelector('.bad');

const randWord = ['poor', 'shitty', 'awful', 'cheap', 'sad', 'unacceptable', 'off', 'not good', 'garbage', 'crappy']


function generateJoke() {
    bad.textContent = randWord[Math.floor(Math.random() * 10)]
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    }

    fetch('https://v2.jokeapi.dev/joke/Dark', config)
        .then(response => response.json())
        .then(data => {

            if (data.setup === undefined) {
                text.innerHTML = data.joke;
                atr.innerHTML = ""
            } else {
                text.innerHTML = data.setup
                atr.innerHTML = data.delivery

            }
        })
}

div.addEventListener('click', generateJoke)
// div.addEventListener('click', e => bad.textContent = randWord[Math.floor(Math.random() * 12)])