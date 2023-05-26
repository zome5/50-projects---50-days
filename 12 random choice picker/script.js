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
    }
})

pickRandom();

function pickRandom() {

    const len = spans.length

    setTimeout(() => {
        for (let x = 0; x < len; x++) {

            const randPick = Math.floor(Math.random() * spans.length);
            setTimeout(() => {
                spans[randPick].style.backgroundColor = "#fff"
            }, 300)
            setTimeout(() => {
                spans[randPick].style.backgroundColor = 'rgb(123, 61, 131)'
            }, 350)
        }

    }, 1)

}


// if (i <= len) {
//     spans[i].style.backgroundColor = "white"
//     setTimeout(spans[i].style.backgroundColor = 'rgb(123, 61, 131)', 200)
// } else if (i > len) {
//     spans[i].style.backgroundColor = "white"
//     spans[i].style.backgroundColor = 'rgb(123, 61, 131)'
// } else if (i > 2 * len) {
//     spans[i].style.backgroundColor = "white"
//     spans[i].style.backgroundColor = 'rgb(123, 61, 131)'
// } else {
//     spans[i].style.backgroundColor = "white"
//     spans[i].style.backgroundColor = 'rgb(123, 61, 131)'
// }
// }