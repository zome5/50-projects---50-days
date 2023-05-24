const boxes = document.querySelectorAll('.box>h1');
const boxesDivs = document.querySelectorAll('.box')
window.addEventListener('keydown', e => {
    boxesDivs.forEach(box => box.classList.remove('hidde'))
    document.querySelector(".massege").classList.add('hide');
    if (e.code === "Space") {
        boxes[0].textContent = 'space';
        boxes[1].textContent = e.keyCode;
        boxes[2].textContent = e.code;
    } else {
        boxes[0].textContent = e.key;
        boxes[1].textContent = e.keyCode;
        boxes[2].textContent = e.code;
    }
})