const input = document.querySelector('input');

const choices = document.querySelector('.choices')
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


    }
})