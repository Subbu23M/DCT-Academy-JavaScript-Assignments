// Practice Set-8 27/09/2021

// 1)Count the Number of Vowels
// Process-1
function countVowels(str) {
    // Here parameters acts as Local variables and placeholders
    // reassigned
    str = str.toLowerCase();

    // Declared & Assigned
    const splStr = str.split('');

    // Declared & Assigned
    let count = 0;

    // We use Traditional for...loop to iterate on every character in the string.
    for (let i = 0; i < splStr.length; i++) {
        if ((splStr[i] === 'a') || (splStr[i] === 'e') || (splStr[i] === 'i') || (splStr[i] === 'o') || (splStr[i] === 'u')) {
            // reassigned
            count = count + 1;
        }
    }
    return count;
}

// Process - 2
function vowelCount(a) {
    // Declared & Assigned
    let count = 0;

    // reassigned
    a = a.toLowerCase();

    // ES6-Spread Operator, we can convert string to array of characters
    const aSplit = [...a];
    // console.log(aSplit);

    aSplit.forEach((char) => {
        if (
            char === 'a' ||
            char === 'e' ||
            char === 'i' ||
            char === 'o' ||
            char === 'u'
        ) {
            // reassigned
            count = count + 1;
        }
    })
    return count;
}
// Invoke function
console.log(countVowels('The quick brown fox'));

// reassigned
console.log(countVowels('javascript is awesome'));

console.log(countVowels('Dct Academy'));
console.log(countVowels('Good Job'));
console.log(countVowels('Yankees'));
console.log(countVowels('symphysy'));

// 2)Repeating Letters
// Process-1
function doubleChar(a) {
    // Declared & Assigned
    let result = '';

    for (let i = 0; i < a.length; i++) {
        result = result + a[i].repeat(2);
    }
    return result;
}

// Process-2
function doubleChar(a) {
    // Declared & Assigned
    let result = '';

    a.split('').forEach((char) => {
        // reassigned
        result = result + char.repeat(2);
    })
    return result;
}
// Invoke function
console.log(doubleChar('Hello World!'));

// reassigned
console.log(doubleChar('1234!_'));

// 3)Tuck in Array
const tuckIn = (a, b) => {
    // reassigned
    a.splice(1, 0, ...b);

    return a;
};
// Invoke function
console.log(tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]));

// reusability
console.log(tuckIn([15, 150], [45, 75, 35]));

// 4)What's Hiding Amongst the Crowd?
// Process-1
function detectWord(a) {
    // Declared & Assigned
    let result = '';

    for (let i = 0; i < a.length; i++) {
        if (a[i] === a[i].toLowerCase()) {
            // reassigned
            result = result + a[i];
        }
    }
    return result;
}

// Process-2
function detectWord(a) {
    // Declared & Assigned
    let result = '';

    a.split('').forEach((char) => {
        if (char === char.toLowerCase()) {
            // reassigned
            result = result + char;
        }
    })
    return result;
}
// Invoke function
console.log(detectWord('bEEFGBuFBRrHgUHlNFYaYr'));

// reusability
console.log(detectWord('YFemHUFBbezFBYzFBYLleGBYEFGBMENTment'));

// 5)Convert an Array to a String
function arrayToString(a) {
    return a.join('')
}

// Invoke function
console.log(arrayToString([1, 2, 3, 4, 5, 6]));

// reusability
console.log(arrayToString([1, 2, 3, 'a', 's', 'dAAAA']));

// 6)Find the Smallest and Biggest Numbers
function minMax(a) {
    // Declared & Assigned
    const emptyArray = [];

    // Here Math.min/max(...a) - returns list of arguments
    emptyArray.push(Math.min(...a));
    emptyArray.push(Math.max(...a));

    return emptyArray;
}

// Invoke function
console.log(minMax([2334454, 5]));

// Invoke function
console.log(minMax([1]));

// 7)Phone Number Formatting
function formatPhoneNumber(a) {

    const arrToStr = a.join('');

    let result = '';

    for (let i = 0; i < arrToStr.length; i++) {
        if (arrToStr[i] < 10) {

            result = result + `(${arrToStr.slice(i,arrToStr.length-7)}) ${arrToStr.slice(i+3,arrToStr.length-4)}-${arrToStr.slice(i+6,arrToStr.length)}`;
            break;
        }
    }
    return result;
}

// Invoke function
console.log(formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

// reusability
console.log(formatPhoneNumber([3, 4, 5, 5, 0, 1, 2, 5, 2, 7]));

// 8) Return the Index of the First Vowel
function firstVowel(a) {
    let count = 0;

    const splStr = a.split('');

    for (let i = 0; i < splStr.length; i++) {
        if (
            (splStr[i] === 'a' || splStr[i] === 'A') ||
            (splStr[i] === 'e' || splStr[i] === 'E') ||
            (splStr[i] === 'i' || splStr[i] === 'I') ||
            (splStr[i] === 'o' || splStr[i] === 'O') ||
            (splStr[i] === 'u' || splStr[i] === 'U')
        ) {
            count = count + i;
            break;
        }
    }
    return count;
}

// Invoke function
console.log(firstVowel('apple'));

// reusability
console.log(firstVowel('hello'));
console.log(firstVowel('STRAWBERRY'));
console.log(firstVowel('pInEaPPLe'));

// 9)Transform into an Array with No Duplicates
// Process-1
function set(a) {

    const res = new Set(a);

    const result = Array.from(res);

    return result;
}

// Process-2
function set(a) {
    const result = a.filter((num, i) => {
        if (a.indexOf(num) === i) {
            return true;
        }
    })
    return result;
}
// Invoke function
console.log(set([1, 3, 3, 5, 5, 5]));

// reusability
console.log(set([4, 4, 4, 4]));

// 10)Valid Zip Code
function isValid(a) {
    // Declared
    let result;

    // Simple...if
    if (Number(a) && a.length <= 6) {
        // Assigned
        result = true;
    } else {
        // Assigned
        result = false;
    }
    return result;
}

// Invoke function
console.log(isValid('560001'));

// reusability
console.log(isValid('3939393'));
console.log(isValid('853a7c'));
console.log(isValid('732 325'));
