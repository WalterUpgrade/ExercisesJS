function fetchData(name) {
    $.ajax({
        url: 'https://api.nationalize.io?name=',
        method: 'GET',
        data: { name: name },
        success: function(response) {
            displayResults(response);
        },
        error: function() {
            $('#results').html('<p>Error al obtener datos de la API</p>');
        }
    });
}

// resultados en elementos <p> con botones de eliminación

function displayResults(data) {
    var resultsDiv = $('#results');
    resultsDiv.empty();
    
    for (var i = 0; i < data.length; i++) {
        var item = data[i];
        var resultText = 'El nombre ' + item.name + ' tiene un ' + item.percentage + ' porciento de ser de ' + item.origin;
        var paragraph = $('<p>').text(resultText);
        var deleteButton = $('<button>').text('X');
        deleteButton.click(function() {
            $(this).parent().remove(); // Elimina el párrafo asociado al botón
        });
        paragraph.append(deleteButton); // Agrega el botón al párrafo
        resultsDiv.append(paragraph);
    }
}
