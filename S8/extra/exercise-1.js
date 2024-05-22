async function fetchCharacters() {
    try {
        const response = await fetch('https://breakingbadapi.com/api/characters');
        const characters = await response.json();
        return characters;
    } catch (error) {
        console.error('Error fetching characters:', error);
        return [];
    }
}

async function displayCharacters() {
    const characters = await fetchCharacters();
    const gallery = document.getElementById('gallery');

    characters.forEach(character => {
        const characterDiv = document.createElement('div');
        characterDiv.innerHTML = `
            <img src="${character.img}" alt="${character.name}">
            <p>${character.name}</p>
        `;
        gallery.appendChild(characterDiv);
    });
}

displayCharacters();