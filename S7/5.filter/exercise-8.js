const streamers = [
  {name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, 
  {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
  {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, 
  {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

document.addEventListener('DOMContentLoaded', () => {

  // botón y al input usando sus IDs
  const button = document.querySelector('button[data-function="toShowFilterStreamers"]');
  const input = document.getElementById('filterInput');

  // evento de click al botón
  button.addEventListener('click', () => {
    // valor del input
    const searchTerm = input.value.toLowerCase();

    // Filtra los streamers cuyo nombre incluya el término de búsqueda
    const filteredStreamers = streamers.filter(streamer => 
      streamer.name.toLowerCase().includes(searchTerm)
    );

    console.log(filteredStreamers);
  });
});


  
  