document.addEventListener('DOMContentLoaded', function() {
    var newParagraph = document.createElement('p');

    // texto del párrafo
    
    newParagraph.textContent = 'Soy dinámico!';
    document.body.appendChild(newParagraph);

    
    console.log(newParagraph.textContent);
});
