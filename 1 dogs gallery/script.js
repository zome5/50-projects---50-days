const cardOne = document.querySelector(".one");
const cardTwo = document.querySelector(".two");
const cardThree = document.querySelector(".three");
const cardFour = document.querySelector(".four");
const cardFive = document.querySelector(".five");
cardOne.addEventListener("mouseover", e => {
    cardHover(cardOne, cardTwo, cardThree, cardFour, cardFive)
})
cardTwo.addEventListener("mouseover", e => {
    cardHover(cardTwo, cardOne, cardThree, cardFour, cardFive)
})
cardThree.addEventListener("mouseenter", e => {
    cardHover(cardThree, cardTwo, cardOne, cardFour, cardFive)
})
cardFour.addEventListener("mouseenter", e => {
    cardHover(cardFour, cardTwo, cardThree, cardOne, cardFive)
})
cardFive.addEventListener("mouseenter", e => {
    cardHover(cardFive, cardTwo, cardThree, cardFour, cardOne)
})


function cardHover(main, two, three, four, five) {
    main.classList.add("active");
    two.classList.remove("active");
    three.classList.remove("active");
    four.classList.remove("active");
    five.classList.remove("active");
}