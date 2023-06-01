const nav = document.querySelector('nav');
const navShow = document.querySelector('.show')
const x = document.querySelector('nav>.fa-x')
const bars = document.querySelector(
    '.fa-bars')
x.addEventListener('click', e => {
    nav.classList.remove('show')
})

if (nav.classList.contains('show') === false) {
    bars.addEventListener('click', e => {
        if (nav.classList.contains('show') === true) {
            nav.style.transition = '.5s'
        }
        if (nav.classList.contains('show') === false) {
            nav.classList.add('show')
            nav.style.transition = '.5s'
        }



    })
}