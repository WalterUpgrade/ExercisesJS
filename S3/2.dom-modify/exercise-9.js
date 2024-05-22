const divs = document.querySelectorAll('.fn-insert-here');

       divs.forEach(div => {
           const newParagraph = document.createElement('p');
           newParagraph.textContent = 'Voy dentro!';
           div.appendChild(newParagraph);
       });
       