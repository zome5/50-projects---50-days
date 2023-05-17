const h2s = document.querySelectorAll('h2');

window.addEventListener('scroll', e => {
    const triggerBottom = window.innerHeight * 0.75
    h2s.forEach(h2 => {
        const h2Top = h2.getBoundingClientRect().top
        if (h2Top > triggerBottom) {
            h2.classList.add('hide');
            h2.classList.remove('show')
        } else if (h2Top <= triggerBottom) {
            h2.classList.remove('hide');
            h2.classList.add('show')
        }
    })
})

// for (let i = 0; i < h2s.length; i++) {
//     if (i % 2 === 0) h2s[i].style.backgroundColor = 'black'
// }