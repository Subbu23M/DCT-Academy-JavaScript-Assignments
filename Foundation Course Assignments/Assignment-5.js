// Find the first n elements of the array

/*
    To access the first n elements of an array, we can use the built-in slice() method by passing 0, n as an arguments to it.
*/


// Declared & assigned
const carNames = ['benz', 'volvo', 'hyundai', 'bmw'];

// We can continue,
const extractElements = carNames.slice(0, 1);

console.log(extractElements);

// Output

/*
    [ 'benz' ]

*/


function first(arr, num) {

    // Declared
    let firstElement;
    // console.log(firstElement);

    if (num === undefined) {
        //Assigned
        firstElement = arr[0];
    } else {
        //Assigned
        firstElement = arr.slice(0, num);
    }

    return firstElement
}

// Declared & assigned
const firstArrayElement1 = first([7, 9, 0, -2])
console.log(firstArrayElement1);

// reusability
const firstArrayElement2 = first([], 3)
console.log(firstArrayElement2);

// reusability
const firstArrayElement3 = first([7, 9, 0, -2], 3)
console.log(firstArrayElement3);

// reusability
const firstArrayElement4 = first([7, 9, 0, -2], 6)
console.log(firstArrayElement4);