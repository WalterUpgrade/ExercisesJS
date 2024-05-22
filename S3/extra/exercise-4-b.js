document.addEventListener('DOMContentLoaded', function() {
    const countries = [
        { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
        { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
        { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
        { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
        { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
    ];

    const countryList = document.getElementById('countryList');
    const removeButton = document.getElementById('removeButton');

    // Función para renderizar los elementos de la lista

    function renderCountryList() {
        countryList.innerHTML = '';
        countries.forEach(country => {
            const li = document.createElement('li');
            li.textContent = country.title;
            countryList.appendChild(li);
        });
    }

    // eliminar el último elemento de la lista
    function removeLastItem() {
        if (countries.length > 0) {
            countries.pop();
            renderCountryList();
            console.log("Último elemento eliminado");
        } else {
            console.log("La lista está vacía");
        }
    }

    // Renderizar la lista al cargar la página
    renderCountryList();


    
    removeButton.addEventListener('click', removeLastItem);        // event listener al botón

});