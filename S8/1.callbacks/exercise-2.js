const userAnwsers = [];

function confirmExample(description){
    return confirm(description);
}

function promptExample(description){
    return prompt(description);
}

function father(description, callback){
    const result = callback(description);
    userAnwsers.push(result);
}

// Ejecutar father varias veces con diferentes funciones y descripciones
father('¿Te gusta el chocolate?', confirmExample);
father('¿Cuál es tu nombre?', promptExample);
father('¿Has viajado al extranjero?', confirmExample);
father('Escribe una frase', promptExample);
father('¿Te gustan los videojuegos?', confirmExample);

console.log(userAnwsers);


// 127.0.0.1:5500 dice
// ¿ te gusta el chocolate?
//               cancelar    aceptar