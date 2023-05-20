const labels = document.querySelectorAll('label');
const inputs = document.querySelectorAll('input');
labels.forEach(label => label.innerHTML = label.textContent
    .split("")
    .map(letter => `<span>${letter}</span>`)
    .join(''))


const emailArr = [];
document.querySelectorAll('.email>span').forEach(span => emailArr.push(span))
const passArr = [];
document.querySelectorAll('.pw>span').forEach(span => passArr.push(span))
// let spanTransition = 200;
// inputs[0].addEventListener('click', e => {
//     for (let i = 0; i < emailArr.length; i++) {
//         spanTransition += 100;
//         emailArr[i].style.transition = spanTransition + "ms" + " ease";
//         emailArr[i].classList.add('labelactive');
// }
// })

let spanTransition = 100;
inputs[0].addEventListener('focus', e => {
    spanTransition = 100
    for (let i = 0; i < emailArr.length; i++) {
        spanTransition += 200;
        emailArr[i].style.transition = spanTransition + "ms" + " cubic-bezier(.5, -0.6, 0.3, .75)";
        emailArr[i].style.transform = "translateY(-50px)"
    }
})
inputs[0].addEventListener('blur', e => {
    spanTransition = 100
    for (let i = 0; i < emailArr.length; i++) {
        spanTransition += 200;
        emailArr[i].style.transition = spanTransition + "ms" + " cubic-bezier(.5, -0.6, 0.3, .75)";
        emailArr[i].style.transform = "translateY(0px)"
    }
})


inputs[1].addEventListener('focus', e => {
    spanTransition = 100
    for (let i = 0; i < passArr.length; i++) {
        spanTransition += 200;
        passArr[i].style.transition = spanTransition + "ms" + " cubic-bezier(.5, -0.6, 0.3, .75)";
        passArr[i].style.transform = "translateY(-30px)"

    }
})
inputs[1].addEventListener('blur', e => {
    spanTransition = 100
    for (let i = 0; i < passArr.length; i++) {
        spanTransition += 200;
        passArr[i].style.transition = spanTransition + "ms" + " cubic-bezier(.5, -0.6, 0.3, .75)";
        passArr[i].style.transform = "translateY(0px)"

    }
})