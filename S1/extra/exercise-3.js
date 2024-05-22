const movies = [
    { name: "Your Name", durationInMinutes: 130 },
    { name: "Pesadilla antes de navidad", durationInMinutes: 225 },
    { name: "Origen", durationInMinutes: 165 },
    { name: "El señor de los anillos", durationInMinutes: 967 },
    { name: "Solo en casa", durationInMinutes: 214 },
    { name: "El jardin de las palabras", durationInMinutes: 40 }
];

let smallMovies = [];   // Menos de 100 minutos
let mediumMovies = [];  // Menos de 200 minutos
let largeMovies = [];   // De 200 minutos o más

for (let movie of movies) {
    if (movie.durationInMinutes < 100) {
        smallMovies.push(movie);
    } else if (movie.durationInMinutes >= 100 && movie.durationInMinutes < 200) {
        mediumMovies.push(movie);
    } else {
        largeMovies.push(movie);
    }
}

console.log("Películas pequeñas (menos de 100 minutos):", smallMovies);
console.log("Películas medianas (100 a menos de 200 minutos):", mediumMovies);
console.log("Películas grandes (200 minutos o más):", largeMovies);
