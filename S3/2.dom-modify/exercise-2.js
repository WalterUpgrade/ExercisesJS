document.addEventListener('DOMContentLoaded', function() {
    var newDiv = document.createElement('div');
    var newParagraph = document.createElement('p');
    newParagraph.textContent = 'Este es un párrafo dentro de un div.';

    // párrafo al div
    newDiv.appendChild(newParagraph);

    // div al cuerpo del documento
    document.body.appendChild(newDiv);
    
    console.log(newDiv);
});
