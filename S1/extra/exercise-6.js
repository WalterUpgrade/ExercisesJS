const goodProducts = [];
const badProducts = [];
const products = [
    {name: 'Gorra de rodilla', sellCount: 10},
    {name: 'Pantalón de pana', sellCount: 302},
    {name: 'Reloj de papel albal', sellCount: 23},
    {name: 'Inpar de zapatos', sellCount: 6}
];

for (let product of products) {
    if (product.sellCount > 20) {
        goodProducts.push(product);  
    } else {
        badProducts.push(product);  
    }
}

console.log(goodProducts);  // productos con más de 20 ventas
console.log(badProducts);    // con 20 ventas o menos
