const tf2 = document.querySelector('.tf2');
const d2 = document.querySelector('.d2');

function script(a, b) {
    a.addEventListener('mouseover', e => {
        a.classList.add('active')
        b.classList.add('blur')
    })
    a.addEventListener('mouseleave', e => {
        a.classList.remove('active')
        b.classList.remove('blur')
    })
    b.addEventListener('mouseover', e => {
        b.classList.add('active')
        a.classList.add('blur')
    })
    b.addEventListener('mouseleave', e => {
        b.classList.remove('active')
        a.classList.remove('blur')
    })
}
script(tf2, d2);