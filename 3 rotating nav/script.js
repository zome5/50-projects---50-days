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

const ham = document.querySelector(".hamburger")
const plus = document.querySelector(".plus");
const nav = document.querySelector('nav');
const container = document.querySelector('.container')
ham.addEventListener('click', e => {
    nav.classList.add('rotatenav');
    container.classList.add('rotate');
})
plus.addEventListener('click', e => {
    nav.classList.remove('rotatenav');
    container.classList.remove('rotate');
})

///////// search bar

const searchBar = document.querySelector('.searchinput')
const searchIcon = document.getElementById('searchicon')

searchIcon.addEventListener('click', e => {
    searchIcon.classList.remove('fa-magnifying-glass')
    searchIcon.classList.add('fa-angles-left')
    if (searchBar.classList.contains('activesearch') === true) {
        searchBar.classList.remove('activesearch')
        searchIcon.classList.add('fa-magnifying-glass')
        searchIcon.classList.remove('fa-angles-left')

    } else {
        searchBar.classList.add('activesearch')
    }
})