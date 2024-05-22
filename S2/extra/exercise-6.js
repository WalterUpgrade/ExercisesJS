function rollDice(numFaces) {

    return Math.floor(Math.random() * numFaces) + 1;
}

console.log(rollDice(6)); // Tirada de un dado de 6 caras
console.log(rollDice(10)); // Tirada de un dado de 10 caras
console.log(rollDice(20)); // Tirada de un dado de 20 caras
