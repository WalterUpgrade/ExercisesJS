document.addEventListener('DOMContentLoaded', () => {
    const countries = [
        {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'},
        {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
        {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
        {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
        {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
    ];

    const container = document.getElementById('countries-container');

    countries.forEach(country => {
        const div = document.createElement('div');
        const h4 = document.createElement('h4');
        h4.textContent = country.title;
        const img = document.createElement('img');
        img.src = country.imgUrl;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Remove';
        deleteButton.onclick = function() {
            div.remove(); // elimino el div desde la DOM
            console.log('Element removed:', div);
        };

        div.appendChild(h4);
        div.appendChild(img);
        div.appendChild(deleteButton); // elimina el boton del div
        container.appendChild(div);
    });
});
