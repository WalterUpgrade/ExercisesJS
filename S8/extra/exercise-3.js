document.addEventListener('DOMContentLoaded', function() {
    const orderList = document.getElementById('order-list');

    async function getProductName(productId) {
        const response = await fetch(`http://localhost:3000/products/${productId}`);
        const product = await response.json();
        return product.name;
    }

    // pedidos en el HTML
    async function displayOrders() {
        const response = await fetch('http://localhost:3000/orders');
        const orders = await response.json();

        orders.sort((a, b) => new Date(b.date) - new Date(a.date));

        for (const order of orders) {
            const productName = await getProductName(order.productId);

            const orderItem = document.createElement('li');
            orderItem.textContent = `${productName} - Cantidad: ${order.quantity}`;

            orderList.appendChild(orderItem);
        }
    }

    displayOrders();
});