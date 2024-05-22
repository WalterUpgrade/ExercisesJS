function swap(array, index1, index2) {
    if (index1 < 0 || index1 >= array.length || index2 < 0 || index2 >= array.length) {
        console.log("Los índices están fuera del rango del array.");
        return array;
    }

    const temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;

    return array;
}

let myArray = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño'];
console.log(swap(myArray, 1, 3)); 


//  'Mesirve', 'Ronalguiño', 'Fernando Muralla', 'Cristiano Romualdo'
