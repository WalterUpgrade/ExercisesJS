const baseUrl = 'https://api.nationalize.io?name=';

        document.getElementById('consultButton').addEventListener('click', () => {
            const name = document.getElementById('nameInput').value;
            if (name) {
                fetch(`${baseUrl}${name}`)
                    .then(response => response.json())
                    .then(data => {
                        document.getElementById('result').innerHTML = JSON.stringify(data);
                    })
                    .catch(error => {
                        console.error('Error:', error);
                    });
            } else {
                alert('Por favor, ingrese un nombre.');
            }
        });