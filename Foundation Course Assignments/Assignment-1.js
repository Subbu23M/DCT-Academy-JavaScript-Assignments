// Print Even & Odd

/*
    To check whether a number is even or odd,
    we can use 'Assignment Operators' and 'Comparison Operators'.
    n % 2 === 0 - Even number
    n % 2 === 1 - Odd number
*/

// We use for loop to iterate on every element in the array.
// ` ` - ES6 Template Literals Concept for String concatenation

// Declare and Assign
const evenOddNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
console.log(evenOddNumbers); //returns array of numbers

console.log(evenOddNumbers.length); //16

// for loop follows initialization,

/* let i = 0; because array index starts from zero.
    condition i < evenOddNumbers ; i < 16
    after every iteration the i value should increase i++
*/

// Method - 1

for (let i = 0; i < evenOddNumbers.length; i++) {
    console.log(i);

    if (evenOddNumbers[i] % 2 === 0) {
        console.log(`${evenOddNumbers[i]} is even`); // console.log(evenOddNumbers[i] + ' is even ');
    } else {
        console.log(`${evenOddNumbers[i]} is odd`); // console.log(evenOddNumbers[i] + ' is odd ');
    }
}


// Method-2

for (let i = 0; i < 16; i++) {

    console.log(i);

    if (i % 2 === 0) {
        console.log(`${i} is even`); // console.log(i + ' is even ') ;
    } else {
        console.log(`${i} is odd`); // console.log(i + ' is odd ');
    }
}

// Output

/*
    0 is even
    1
    1 is odd
    2
    2 is even
    3
    3 is odd
    4
    4 is even
    5
    5 is odd
    6
    6 is even
    7
    7 is odd
    8
    8 is even
    9
    9 is odd
    10
    10 is eve
    11
    11 is odd
    12
    12 is eve
    13
    13 is odd
    14
    14 is eve
    15
    15 is odd        
*/