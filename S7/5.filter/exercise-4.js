const streamers = [
    {name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
    {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
    {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
    {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
  ];
  
  const youngLolStreamers = streamers.filter(streamer => streamer.age < 30 && streamer.gameMorePlayed.toLowerCase() === 'league of legends');
  
  console.log(youngLolStreamers);

  // [  {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}]

  