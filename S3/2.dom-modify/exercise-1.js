document.addEventListener('DOMContentLoaded', function() {
    var newDiv = document.createElement('div');

    newDiv.id = 'myNewDiv';
    document.body.appendChild(newDiv);
});

console.log('Div creado y añadido al body:');
console.log(newDiv);  