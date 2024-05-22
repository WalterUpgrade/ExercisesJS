document.addEventListener('DOMContentLoaded', () => {
    const countries = [
        {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'},
        {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
        {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
        {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
        {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
    ];

    const container = document.getElementById('countries-container');
    console.log('Contenedor seleccionado:', container);

    countries.forEach(country => {
        // elemento div
        const div = document.createElement('div');
        console.log('Elemento div creado:', div);

        // elemento h4 para el título
        const h4 = document.createElement('h4');
        h4.textContent = country.title;
        console.log('Elemento h4 creado con título:', country.title, h4);

        // img para la imagen
        const img = document.createElement('img');
        img.src = country.imgUrl;
        console.log('Elemento img creado con URL:', country.imgUrl, img);

        // h4 y la img al div
        div.appendChild(h4);
        div.appendChild(img);
        console.log('Elementos h4 y img añadidos al div:', div);

        container.appendChild(div);
        console.log('Elemento div añadido al contenedor:', container);
    });
});

