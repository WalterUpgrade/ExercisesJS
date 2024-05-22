const elementsToRemove = document.querySelectorAll('.fn-remove-me');
    elementsToRemove.forEach(element => {
        element.parentNode.removeChild(element);
    });