async function fetchDiary() {
    try {
        const response = await fetch('http://localhost:3000/diary');
        const diaryEntries = await response.json();

        diaryEntries.sort((a, b) => new Date(a.date) - new Date(b.date));
        return diaryEntries;
    } catch (error) {
        console.error('Error fetching diary entries:', error);
        return [];
    }
}

async function displayDiary() {
    const diaryEntries = await fetchDiary();
    const diaryContainer = document.getElementById('diary');

    diaryEntries.forEach(entry => {
        const entryDiv = document.createElement('div');

        const titleHeader = document.createElement('h3');
        titleHeader.textContent = entry.title;

        const dateSubtitle = document.createElement('h5');
        dateSubtitle.textContent = new Date(entry.date).toLocaleDateString();

        const descriptionParagraph = document.createElement('p');
        descriptionParagraph.textContent = entry.description;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.addEventListener('click', async () => {
            try {
                await fetch(`http://localhost:3000/diary/${entry.id}`, {
                    method: 'DELETE'
                });


                diaryContainer.removeChild(entryDiv);
            } catch (error) {
                console.error('Error deleting diary entry:', error);
            }
        });

        entryDiv.appendChild(titleHeader);
        entryDiv.appendChild(dateSubtitle);
        entryDiv.appendChild(descriptionParagraph);
        entryDiv.appendChild(deleteButton);

        diaryContainer.appendChild(entryDiv);
    });
}

displayDiary();