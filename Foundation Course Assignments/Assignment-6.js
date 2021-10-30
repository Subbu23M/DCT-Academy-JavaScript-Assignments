// Even & Odd

/*
    n % 2 === 0 - Even Number
    n % 2 === 1 - Odd Number

    We use for loop to iterate on every array element.
*/

function evenOdd(arr) {

    // Declared and Assigned
    let even = [];
    let odd = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {

            // reassigned
            even.push(arr[i]);
        } else {

            // reassigned
            odd.push(arr[i]);
        }
    }

    return [even, odd];

}

console.log(evenOdd([1, 2, 3, 4, 5, 6]));
console.log(evenOdd([]));