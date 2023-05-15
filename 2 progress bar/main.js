// const circles = document.getElementsByClassName('circle')
const circles = document.querySelectorAll('.circle')
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
const progressBar = document.querySelector('.progress-bar-green')

let counter = 0;






next.addEventListener('click', e => nextClick())
prev.addEventListener('click', e => prevClick())

if (counter < 4) {

    next.classList.add('button-active');
    prev.classList.add('button-disabled');
    progressBar.style.width = '0%';
}


function prevClick() {
    next.classList.remove('button-disabled');
    next.classList.add('button-active');
    if (counter === 3) {
        counter--
        circles[3].style.borderColor = 'var(--gray)'
        progressBar.style.width = '66%';


    } else if (counter === 2) {
        counter--
        circles[2].style.borderColor = 'var(--gray)'
        progressBar.style.width = '33%'
    } else if (counter === 1) {
        counter--
        circles[1].style.borderColor = 'var(--gray)'
        progressBar.style.width = '0%'
    }
    if (counter === 0) {
        next.classList.remove('button-disabled');
        next.classList.add('button-active');
        prev.classList.add('button-disabled');
        prev.classList.remove('button-active');
    }
    if (counter < 0) {
        counter = 0;
    }

}

function nextClick() {
    counter++
    counter === 1 ? progressBar.style.width = '33%' : counter === 2 ? progressBar.style.width = '66%' : counter === 3 ? progressBar.style.width = '99%' : console.log('went to counter over 3')
    counter === 1 ? circles[1].style.borderColor = 'var(--green)' : counter === 2 ? circles[2].style.borderColor = 'var(--green)' : counter === 3 ? circles[3].style.borderColor = 'var(--green)' : console.log('went to counter over 3')
    if (counter >= 1) {
        prev.classList.add('button-active')
        prev.classList.remove('button-disabled');
    }
    if (counter === 3) {
        next.classList.add('button-disabled');
        next.classList.remove('button-active');
    }

    if (counter > 3) {
        counter = 3;
    }

}