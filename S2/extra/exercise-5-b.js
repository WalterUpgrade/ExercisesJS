function findArrayIndex(array, text) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === text) {
            return i;
        }
    }
    return -1;
}

function removeItem(array, text) {
    const index = findArrayIndex(array, text);
    if (index !== -1) {
        array.splice(index, 1);
    }
    return array;
}

let array1 = ["apple", "banana", "orange", "grape"];
console.log(removeItem(array1, "orange"));           // ["apple", "banana", "grape"]

let array2 = ["cat", "dog", "rabbit", "hamster"];
console.log(removeItem(array2, "dog"));             // ["cat", "rabbit", "hamster"]

let array3 = ["red", "green", "blue", "yellow"];


console.log(removeItem(array3, "purple"));         //["red", "green", "blue", "yellow"] (no change)
