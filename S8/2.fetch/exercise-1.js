document.addEventListener('DOMContentLoaded', () => {
    const apiUrl = 'https://api.agify.io?name=michael';

    fetch(apiUrl)
        .then(response => response.json())
        .then(console.log)
        .catch(console.error);
});
