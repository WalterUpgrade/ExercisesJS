const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
};

Object.keys(alien).forEach(key => 
    
    console.log(`${key}: ${alien[key]}`));
