document.addEventListener('DOMContentLoaded', () => {
    const cells = document.querySelectorAll('.cell');
    const timeLeftDisplay = document.getElementById('time-left');
    const scoreDisplay = document.getElementById('score');
    const pokeballImg = 'pokeball.png';
    const diglettImg = 'diglett.png'; // Asegúrate de tener esta imagen en tu directorio

    let score = 0;
    let timeLeft = 10;
    let timerId;
    let moveDiglettId;

    function randomCell() {
        cells.forEach(cell => {
            cell.innerHTML = `<img src="${pokeballImg}" alt="Pokeball">`;
        });

        const randomIndex = Math.floor(Math.random() * cells.length);
        const cell = cells[randomIndex];
        cell.innerHTML = `<img src="${diglettImg}" alt="Diglett">`;

        cell.onclick = () => {
            score++;
            scoreDisplay.textContent = score;
        };
    }

    function startGame() {
        timerId = setInterval(() => {
            timeLeft--;
            timeLeftDisplay.textContent = timeLeft;

            if (timeLeft === 0) {
                clearInterval(timerId);
                clearInterval(moveDiglettId);
                alert(`Time's up! Your score is ${score}`);
            }
        }, 1000);

        moveDiglettId = setInterval(randomCell, 500);
    }

    startGame();
});
