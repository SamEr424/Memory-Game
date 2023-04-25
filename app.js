const cardArray = [
    {
        name: 'fries',
        img: 'images/002.jpg',
    },
    {
        name: 'cheeseburger',
        img: 'images/DSC_0549.jpg',
    },
    {
        name: 'hotdog',
        img: 'images/kendis2.jpg',
    },
    {
        name: 'ice-cream',
        img: 'images/linah21.jpg',
    },
    {
        name: 'milkshake',
        img: 'images/mk13.jpg',
    },
    {
        name: 'pizza',
        img: 'images/oldonyo27.jpg',
    },
    {
        name: 'fries',
        img: 'images/002.jpg',
    },
    {
        name: 'cheeseburger',
        img: 'images/DSC_0549.jpg',
    },
    {
        name: 'hotdog',
        img: 'images/kendis2.jpg',
    },
    {
        name: 'ice-cream',
        img: 'images/linah21.jpg',
    },
    {
        name: 'milkshake',
        img: 'images/mk13.jpg',
    },
    {
        name: 'pizza',
        img: 'images/oldonyo27.jpg',
    },

]
cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []

//console.log(gridDisplay)

function createBoard () {
    for (let i=0; i<cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/total23.jpg')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)
        //console.log(card, i)

    }
}
createBoard()

function checkMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]


    console.log(cards)

    console.log('check for match!')
    if (optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'images/total23.jpg')
        cards[optionTwoId].setAttribute('src', 'images/total23.jpg')
        alert('you have clicked the same image')
    }
    if (cardsChosen[0] == cardsChosen[1]) {
        alert('You found a match!')
        cards[optionOneId].setAttribute('src', 'images/oldonyo33.jpg')
        cards[optionTwoId].setAttribute('src', 'images/oldonyo33.jpg')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src', 'images/total23.jpg')
        cards[optionTwoId].setAttribute('src', 'images/total23.jpg')
        alert('sorry try again!')
    }

    resultDisplay.textContent = cardsWon.length
    cardsChosen = []
    cardsChosenIds = []

    if (cardsWon.length == cardArray.length/2) {
        resultDisplay.textContent = 'Congratulations you found them all!'
    }





}

function flipCard() {
    //console.log(cardArray)
    const cardId = this.getAttribute('data-id')
    //console.log(cardArray[cardId].name)
    cardsChosen.push(cardArray[cardId].name)
    //console.log('clicked', cardId)
    //console.log(cardsChosen)
    cardsChosenIds.push(cardId)
    console.log(cardsChosen)
    console.log(cardsChosenIds)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 500)
    }

}
