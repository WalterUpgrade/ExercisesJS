const streamers = [
  { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
  { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
  { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
  { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
];

const newStreamers = streamers.filter((streamer) => {
  if (streamer.gameMorePlayed.includes("Legends")) {
    const streamerObj = {
      name: streamer.name,
      age: streamer.age,
      gameMorePlayed: streamer.gameMorePlayed,
    };
    if (streamer.age > 35) {
      streamerObj.gameMorePlayed = streamerObj.gameMorePlayed.toUpperCase();
    }
    return true;
  }
  return false;
});

console.log(newStreamers);
