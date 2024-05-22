const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

const container = document.querySelector('div[data-function="printHere"]');

const ul = document.createElement('ul');

cars.forEach(car => {


    const li = document.createElement('li');

    li.textContent = car;

    ul.appendChild(li);
});

container.appendChild(ul);
