const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const appList = document.getElementById('appList');

apps.forEach(app => {

    const listItem = document.createElement('li');
    
    // array como contenido del <li>
    listItem.textContent = app;
    
    // <li> a la lista <ul>
    appList.appendChild(listItem);
});
