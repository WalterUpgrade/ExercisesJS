 const p = document.createElement('p');
 p.textContent = 'Voy en medio!';

 const firstDiv = document.querySelector('div');
 const parent = firstDiv.parentNode;

 console.log(parent.innerHTML);

 parent.insertBefore(p, firstDiv.nextSibling);

 

 console.log(parent.innerHTML);

