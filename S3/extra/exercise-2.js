document.addEventListener('DOMContentLoaded', function() {
    const elementToRemove = document.querySelector('.fn-remove-me');
    if (elementToRemove) {
        elementToRemove.remove();
        console.log("Elemento eliminado correctamente");
    } else {
        console.log("No se encontró ningún elemento para eliminar");
    }
});
