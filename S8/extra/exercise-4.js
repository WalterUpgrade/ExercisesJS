const planetsUrl = 'http://localhost:3000/planets';
        const charactersUrl = 'http://localhost:3000/characters';

        async function fetchPlanets() {
            const response = await fetch(planetsUrl);
            const planets = await response.json();
            const planetsDiv = document.getElementById('planets');

            planets.forEach(planet => {
                const planetDiv = document.createElement('div');
                planetDiv.classList.add('planet');
                planetDiv.textContent = planet.name;
                planetDiv.dataset.id = planet.id;
                planetDiv.addEventListener('click', () => displayCharacters(planet.id));
                planetsDiv.appendChild(planetDiv);
            });
        }

        async function displayCharacters(planetId) {
            const response = await fetch(`${charactersUrl}?idPlanet=${planetId}`);
            const characters = await response.json();
            const charactersDiv = document.getElementById('characters');
            charactersDiv.innerHTML = '';

            const searchInput = document.createElement('input');
            searchInput.type = 'text';
            searchInput.placeholder = 'Buscar personaje...';
            searchInput.addEventListener('input', (e) => filterCharacters(e, characters, charactersDiv));
            charactersDiv.appendChild(searchInput);

            characters.forEach(character => {
                const characterDiv = document.createElement('div');
                characterDiv.classList.add('character');
                characterDiv.innerHTML = `
                    <img src="${character.avatar}" alt="${character.name}">
                    <p>${character.name}</p>
                    <div class="description">${character.description}</div>
                `;
                characterDiv.addEventListener('click', () => toggleDescription(characterDiv));
                charactersDiv.appendChild(characterDiv);
            });
        }

        function filterCharacters(event, characters, charactersDiv) {
            const query = event.target.value.toLowerCase();
            const filteredCharacters = characters.filter(character => 
                character.name.toLowerCase().includes(query)
            );

            charactersDiv.innerHTML = '';
            charactersDiv.appendChild(event.target);  // Re-add search input

            filteredCharacters.forEach(character => {
                const characterDiv = document.createElement('div');
                characterDiv.classList.add('character');
                characterDiv.innerHTML = `
                    <img src="${character.avatar}" alt="${character.name}">
                    <p>${character.name}</p>
                    <div class="description">${character.description}</div>
                `;
                characterDiv.addEventListener('click', () => toggleDescription(characterDiv));
                charactersDiv.appendChild(characterDiv);
            });
        }

        function toggleDescription(characterDiv) {
            const descriptionDiv = characterDiv.querySelector('.description');
            descriptionDiv.style.display = descriptionDiv.style.display === 'none' ? 'block' : 'none';
        }

        fetchPlanets();




        // characters - 9 items / planets - 3 items