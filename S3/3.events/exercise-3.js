document.addEventListener('DOMContentLoaded', () => {
    const textInput = document.getElementById('textInput');
    
    if (textInput) {
        textInput.addEventListener('input', (event) => {
            console.log(event.target.value);
        });
    } else {
        console.error('El elemento input no se encontró en el DOM');
    }
});
