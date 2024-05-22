const baseUrl = 'https://api.nationalize.io?name=';

        document.getElementById('consultButton').addEventListener('click', async () => {
            const name = document.getElementById('nameInput').value.trim();
            const resultDiv = document.getElementById('result');
            resultDiv.innerHTML = ''; 

            if (!name) {
                alert('Por favor, ingrese un nombre.');
                return;
            }

            try {
                const response = await fetch(`${baseUrl}${name}`);
                const data = await response.json();

                if (data.country && data.country.length > 0) {
                    data.country.forEach(({ country_id, probability }) => {
                        const p = document.createElement('p');
                        p.textContent = `El nombre ${name} tiene un ${(probability * 100).toFixed(2)}% de ser de ${country_id}.`;
                        resultDiv.appendChild(p);
                    });
                } else {
                    const p = document.createElement('p');
                    p.textContent = `No se encontraron datos para el nombre ${name}.`;
                    resultDiv.appendChild(p);
                }
            } catch (error) {
                console.error(error);
                const p = document.createElement('p');
                p.textContent = 'Ocurrió un error al consultar la API.';
                resultDiv.appendChild(p);
            }
        });