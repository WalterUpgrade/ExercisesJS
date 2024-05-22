let globalBasePrice = 10000;
const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000};

globalBasePrice = 25000;


// Actualizar finalPrice para cada coche
car1.finalPrice = car1.basePrice + globalBasePrice;
car2.finalPrice = car2.basePrice + globalBasePrice;



// precios finales actualizados
console.log(`El precio final del ${car1.name} es ${car1.finalPrice}`);
console.log(`El precio final del ${car2.name} es ${car2.finalPrice}`);

