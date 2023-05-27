const input = document.querySelector('input');
const choices = document.querySelector('.choices')
let spans = document.querySelectorAll('span')
window.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
        let arr = [];
        input.value.split(",").forEach(word => arr.push(word));
        input.value = '';
        if (arr.length <= 1 && arr[0] === '') {
            console.log('REFERENCE 1243ADSC1')
        } else if (arr.length >= 1) {
            for (let i = 0; i < arr.length; i++) {
                let span = document.createElement('span');
                span.textContent = arr[i];

                span.classList.add('choice');
                choices.appendChild(span)
            }
            arr = [];
        }

        spans = document.querySelectorAll('span')
        pickRandom();
        if (spans.length > 0) setTimeout(() => createButton(), 1000)
    }
})



function pickRandom() {
    const len = 15;

    for (let x = 0; x < len; x++) {
        const randPick = Math.floor(Math.random() * spans.length);
        if (x < len / 3) {
            setTimeout(() => {
                spans[randPick].style.backgroundColor = '#fff';
                setTimeout(() => {
                    spans[randPick].style.backgroundColor = 'rgb(123, 61, 131)';
                }, 25);
            }, x * 50)
        } else if (x >= len / 3) {
            setTimeout(() => {
                spans[randPick].style.backgroundColor = '#fff';
                setTimeout(() => {
                    spans[randPick].style.backgroundColor = 'rgb(123, 61, 131)';
                }, 100);
            }, x * 150)
        } else {
            setTimeout(() => {
                spans[randPick].style.backgroundColor = '#fff';
                setTimeout(() => {
                    spans[randPick].style.backgroundColor = 'rgb(123, 61, 131)';
                }, 200);
            }, x * 300)
        }
    }
    setTimeout(() => {
        spans[Math.floor(Math.random() * spans.length)].style.backgroundColor = '#fff'
    }, (50 * len / 3 + 25) + (150 * len / 3 + 100) + (300 * len / 3 + 200))
}

function createButton() {

    const btn = document.createElement('button');
    btn.textContent = 'CLEAR';
    btn.classList.add('clear');
    choices.appendChild(btn)

    btn.addEventListener('click', e => {
        spans.forEach(span => span.remove())
        choices.removeChild(btn);
    })
}