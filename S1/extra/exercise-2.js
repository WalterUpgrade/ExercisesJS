const fruits = ['Strawberry', 'Banana', 'Orange', 'Apple'];
const foodSchedule = [
    { name: "Salad", isVegan: true },
    { name: "Salmon", isVegan: false },
    { name: "Tofu", isVegan: true },
    { name: "Burger", isVegan: false },
    { name: "Rice", isVegan: true },
    { name: "Pasta", isVegan: true }
];

let fruitIndex = 0; 
for (let i = 0; i < foodSchedule.length; i++) {
    if (!foodSchedule[i].isVegan) {

        // Si la comida no es vegana, reemplázala con la fruta correspondiente del array 'fruits'
        foodSchedule[i].name = fruits[fruitIndex];
        fruitIndex++; 
        
        if (fruitIndex >= fruits.length) {
            fruitIndex = 0; 
        }
    }
}

console.log(foodSchedule);
