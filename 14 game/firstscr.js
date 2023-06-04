const screen = document.querySelector('.screen')

const imgs = ['pawn.png', 'rook.png', 'bishop.png', 'queen.png', 'king.png', 'knight.png']



/* <img src="/img/pawn.png" alt=""></img> */

function piece(name, img, score) {
    this.name = name;
    this.score = score;
    this.element = document.createElement('img');
    this.element.src = img;
    this.element.classList.add('pawn');
    this.element.onclick = console.log('click')
    this.add = function () {
        screen.appendChild(this.element);

        this.element.addEventListener('click', e => {
            console.log('click')
        })

    }
    this.remove = function () {
        screen.removeChild(this.element);
    }
}
let pawn = new piece('pawn', "/img/pawn.png", 10);
pawn.add();