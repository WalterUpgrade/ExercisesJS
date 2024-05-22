document.addEventListener('DOMContentLoaded', () => {
    const cardArray = [
        { id: 1, name: "earth", img: "public/exercise-1/earth.svg" },
        { id: 2, name: "jupiter", img: "public/exercise-1/jupiter.svg" },
        { id: 3, name: "mars", img: "public/exercise-1/mars.svg" },
        { id: 4, name: "mercury", img: "public/exercise-1/mercury.svg" },
        { id: 5, name: "saturn", img: "public/exercise-1/saturn.svg" },
        { id: 6, name: "uranus", img: "public/exercise-1/uranus.svg" },
        { id: 7, name: "earth", img: "public/exercise-1/earth.svg" },
        { id: 8, name: "jupiter", img: "public/exercise-1/jupiter.svg" },
        { id: 9, name: "mars", img: "public/exercise-1/mars.svg" },
        { id: 10, name: "mercury", img: "public/exercise-1/mercury.svg" },
        { id: 11, name: "saturn", img: "public/exercise-1/saturn.svg" },
        { id: 12, name: "uranus", img: "public/exercise-1/uranus.svg" }
    ];

    const grid = document.querySelector('[data-function="grid"]');
    const scoreDisplay = document.querySelector('[data-function="score"]');
    const attemptDisplay = document.querySelector('[data-function="attempts"]');

    cardArray.sort(() => 0.5 - Math.random());
    console.log("Cartas mezcladas: ", cardArray.map(card => card.name));

    let cardsChosen = [];
    let cardsChosenIds = [];
    let cardsWon = [];

    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            const card = document.createElement('img');
            card.setAttribute('src', 'public/exercise-1/universe.svg');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard);
            grid.appendChild(card);
        }
    }

    function flipCard() {
        const cardId = this.getAttribute('data-id');
        const card = cardArray[cardId];

        if (cardsChosenIds[0] === cardId || cardsWon.includes(cardId)) {
            return; 
        }

        cardsChosen.push(card.name);
        cardsChosenIds.push(cardId);
        this.setAttribute('src', card.img);

        console.log(`Carta seleccionada: ${card.name} en posición ${cardId}`);

        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500);
        }
    }

    function checkForMatch() {
        const cards = document.querySelectorAll('img');
        const optionOneId = cardsChosenIds[0];
        const optionTwoId = cardsChosenIds[1];

        console.log("Comprobando coincidencia para", cardsChosen);

        if (cardsChosen[0] === cardsChosen[1]) {
            alert('¡Encontraste una coincidencia!');
            cards[optionOneId].setAttribute('src', 'public/exercise-1/tick.svg');
            cards[optionTwoId].setAttribute('src', 'public/exercise-1/tick.svg');
            cardsWon.push(optionOneId);
            cardsWon.push(optionTwoId);
            scoreDisplay.textContent = cardsWon.length / 2;
        } else {
            cards[optionOneId].setAttribute('src', 'public/exercise-1/universe.svg');
            cards[optionTwoId].setAttribute('src', 'public/exercise-1/universe.svg');
            alert('Lo siento, intenta de nuevo');
        }

        cardsChosen = [];
        cardsChosenIds = [];
        attemptDisplay.textContent = ++attemptDisplay.textContent;

        if (cardsWon.length === cardArray.length) {
            console.log("Juego completado en", attemptDisplay.textContent, "intentos.");
            alert('¡Felicidades! Ganaste el juego');
        }
    }

    createBoard();
});
