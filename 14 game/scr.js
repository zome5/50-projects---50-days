let screen = document.querySelector('.screen');
let scoreValue = document.querySelector('.scoreValue')
const imgs = ['/img/pawn.png', '/img/rook.png', '/img/bishop.png', '/img/queen.png', '/img/king.png', '/img/knight.png'];

let scoreDisplay = 0;
scoreValue.textContent = scoreDisplay;


function piece(name, img, score) {
    this.name = name;
    this.score = score;
    this.createPiece = () => {
        this.element = document.createElement('img');
        this.element.src = img;
        this.element.style.top = Math.random() * 80 + "%";
        this.element.style.left = Math.random() * 80 + "%";
    }
    this.add = () => {
        this.createPiece();
        screen.appendChild(this.element);
        this.element.addEventListener('click', e => {
            this.remove(name)
            scoreDisplay += this.score;
            scoreValue.textContent = scoreDisplay;
        })
    }
    this.remove = () => {
        screen.removeChild(this.element);
    }
}
let pawn = new piece('pawn', imgs[0], 1);
let rook = new piece('rook', imgs[1], 5);
let bishop = new piece('bishop', imgs[2], 3);
let queen = new piece('queen', imgs[3], 8);
let king = new piece('king', imgs[4], 10);
let knight = new piece('knight', imgs[5], 3);


setInterval(pawn.add, 3000)

setInterval(knight.add, 5500)
setInterval(bishop.add, 6500)
setInterval(rook.add, 8000)
setInterval(queen.add, 10000)
setInterval(king.add, 12000)