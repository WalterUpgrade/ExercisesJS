const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const container = document.getElementById('countries-container');
console.log('Contenedor seleccionado:', container);

const ul = document.createElement('ul');   // elemento ul

console.log('Elemento ul creado:', ul);

countries.forEach(country => {

    // por cada pais creamos un li
    const li = document.createElement('li');

    li.textContent = country;
    console.log('Elemento li creado con el país:', country, li);
    ul.appendChild(li);
    console.log('Elemento li añadido a ul:', ul);
});

container.appendChild(ul);
console.log('Elemento ul añadido al contenedor:', container);

