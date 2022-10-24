// Card Array of the images being flipped.

const cardArray = [
    {
        name: 'fries',
        img: 'images/fries.png',
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png',
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png',
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png',
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png',
    },
    {
        name: 'pizza',
        img: 'images/pizza.png',
    },
    {
        name: 'fries',
        img: 'images/fries.png',
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png',
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png',
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png',
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png',
    },
    {
        name: 'pizza',
        img: 'images/pizza.png',
    }
]

// Card Array Sort with Math.random Statement

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')
const cardsChosen = []
const cardsChosenIds = []
const cardsWon = []

// Function with event listener on click, that flips the images.

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
       const card =  document.createElement('img')
       card.setAttribute('src', 'images/blank.png')
       card.setAttribute('data-id', i)
       card.addEventListener('click', flipCard)
       gridDisplay.appendChild(card)
    }
}
createBoard()

// This function targets the <img> tag with querySelectorAll, and logs in the dev console and an Alert pop-up for a Match.

function checkMatch() {
 const cards = document.querySelectorAll('img')
 console.log(cards)

    console.log('check for match!')
    if (cardsChosen[0] == cardsChosen[1]) {
        alert('You Found a match')
       cards[cardsChosenIds[0]].setAttribute('src', 'images/white.png')
       cards[cardsChosenIds[1]].setAttribute('src', 'images/white.png')
       cards[cardsChosenIds[0]].removeEventListener('click', flipCard)
       cards[cardsChosenIds[1]].removeEventListener('click', flipCard)
    }
}

// Function that flips the card, and logs in the Dev console the Card ID, i.e Milkshake, Pizza, etc.

function flipCard() {
    console.log(cardArray)
    const cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    console.log('clicked', cardId)
    console.log(cardsChosen)
    console.log(cardsChosenIds)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout( checkMatch, 500)
    }
}