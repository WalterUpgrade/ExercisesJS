document.addEventListener('DOMContentLoaded', function() {
    var newDiv = document.createElement('div');

    // párrafos al div utilizando un bucle
    
    for (var i = 1; i <= 6; i++) {
        var newParagraph = document.createElement('p');
        newParagraph.textContent = 'Párrafo ' + i;
        newDiv.appendChild(newParagraph);
    }

    // div al cuerpo del documento
    document.body.appendChild(newDiv);

    console.log(newDiv);
});