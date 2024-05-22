const products = [
    {name: 'Gorra de rodilla', sellCount: 10},
    {name: 'Pantalón de pana', sellCount: 302},
    {name: 'Reloj de papel albal', sellCount: 23},
    {name: 'Inpar de zapatos', sellCount: 6}
];

let totalSales = 0;  //  total de ventas

// productos
for (let i = 0; i < products.length; i++) {
    totalSales += products[i].sellCount;  // Suma el sellCount de cada producto al total
}

let averageSales = totalSales / products.length;

console.log(totalSales);
console.log(averageSales);


//Total de ventas:  341 - Media de ventas:  85.25
