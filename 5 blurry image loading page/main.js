const loading = document.querySelector('.loading')

function blur(x) {
    document.querySelector('body').style.backdropFilter = `blur(${x}px)`;
}

let j = 25;
let x = 150;
for (let i = 0; i < 101; i++) {


    setTimeout(() => {
        if (i % 4 === 0) j--;
        loading.textContent = i + "%";
        blur(j)
        x--
        loading.style.opacity = (x / 100);
        if (i === 100) loading.style.opacity = 0;

    }, i * 30);


}