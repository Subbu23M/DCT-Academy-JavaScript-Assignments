// Practice Set-6 02/09/2021

// 1)First not Repeated char
const firstName = 'subbu';

/*
    s   u   b   b   u
i   0   1   2   3   4 

firstName.indexOf('s') - 0
firstName.charAt(0) - 's'
*/

console.log(firstName.indexOf('s'));
console.log(firstName.lastIndexOf('s'));
console.log(firstName.charAt(0));

// Process - 1
function nonRepeatedChar(a) {
    let result = '';
    for (let i = 0; i < a.length; i++) {
        if (a.indexOf(a.charAt(i)) === a.lastIndexOf(a.charAt(i))) {
            console.log(a.charAt(i));
//             console.log(i);
            result = a.charAt(i);
            break;
        }
    }
    return result;
}

// Process - 2
function nonRepeatedChar(a) {
    const result = a.split('').filter((char) => {
        if (a.indexOf(char) === a.lastIndexOf(char)) {
            return true;
        }
    })
    return result.join('');
}
console.log(nonRepeatedChar('abacddbec'));

// 2)Factorial
function factorial(num) {
    // here num acts as local variable.

    if (num === 0 || num === 1) {
        num = 1;
    }

    for (let i = num - 1; i >= 1; i--) {
        if (num > 0) {
            // reassigned
            num = num * i;
        }
    }

    return num;
}

console.log(factorial(4));

// reusability
console.log(factorial(5));
console.log(factorial(0));
console.log(factorial(1));

/*
    1)i = 3; 3 >= 1; True
    num = 4 * 3;
    num = 12;
    i--

    2)i = 2; 2 >= 1; True
    num = 12 * 2;
    num = 24;
    i--

    3)i = 1 ; 1 >= 1; True
    num = 24 * 1;
    num = 24;
    i--;

    4)i = 0; 0 >= 1 - False

    return 24;
*/

// 3)Merge two strings
function mergeStrings(a, b) {
    let result = [];

    const length = Math.min(a.length, b.length);

    for (var i = 0; i < length; i++) {
        result.push(a[i], b[i]);
    }

    result.push(a.slice(i));
    result.push(b.slice(i));

    return result.join('');
}

console.log(mergeStrings('virat', 'kohli'));

// reusability
console.log(mergeStrings('bangalore', 'mysore'));

// 4)Sum 2 Array Indexes
function sumTwoArrayIndexes(a, b) {
    const emptyArray = [];

    const twoArrayLengths = Math.max(a.length, b.length);

    for (let i = 0; i < twoArrayLengths; i++) {
        const mainLogic = (a[i] || 0) + (b[i] || 0);

        emptyArray.push(mainLogic);
    }
    return emptyArray;
}

const arrOne = [1, 0, 2, 3, 4];

const arrTwo = [3, 5, 6, 7, 8, 13];

console.log(sumTwoArrayIndexes(arrOne, arrTwo));

// 5) Find Twins
function findTwins(a) {
    // Declared
    let result;

    if (a.length === 0) {
        // assigned
        result = null;
    }

    for (let i = 0; i < a.length; i++) {
        if (a.indexOf(a[i]) !== a.lastIndexOf(a[i])) {
            // assigned
            result = a[i];
            break;
        } else {
            // assigned
            result = null;
        }
    }
    return result;
}

console.log(findTwins([4, 1, 6, 1, 5]));

// reusability
console.log(findTwins([2, 3, 6, 34, 7, 8, 2]));
console.log(findTwins([3, 6, 9, 2, 4, 3, 1, 0]));
console.log(findTwins([]));
console.log(findTwins([3, 1, 4, 2, 5]));

// 6)Find the number of capitals in the string
// Process - 1
function totalCaps(a) {

    let count = 0;
    const res = a.join('').split('');

    for (let i = 0; i < res.length; i++) {
        if (res[i] === res[i].toUpperCase()) {
            count = count + 1;
        }
    }
    return count;
}
// Process - 2
function totalCaps(a) {
    // Declared & Assigned
    let count = 0;

    const result = a.join('').split('').forEach((char) => {
        if (char === char.toUpperCase()) {
            // reassigned
            count = count + 1;
        }
    })
    return count;
}
console.log(totalCaps(['AwesomE', 'ThIngs', 'hAppEning', 'HeRe']));

// reusability
console.log(totalCaps(['Elie', 'Matt', 'Tim']));
console.log(totalCaps(['hello', 'world']));

// Example
const mangoes = ['green', 'yellow', 'red']
const splArr = mangoes.join('').split('');
console.log(splArr);

// 7)Returns the number of times a number is followed by a larger number
function findGreaterNumbers(a) {
    // Declared & Assigned
    let count = 0;

    if (a.length === 0) {
        return count;
    }

    for (let i = 0; i < a.length; i++) {
        let splArr = a.slice(i + 1);
        console.log(splArr);
        console.log(splArr.length);

        for (let j = 0; j < splArr.length; j++) {
            if (a[i] < splArr[j]) {
                count = count + 1;
            }
        }
    }
    return count;
}

console.log(findGreaterNumbers([1, 2, 3]));

// reusability
console.log(findGreaterNumbers([6, 1, 2, 7]));
console.log(findGreaterNumbers([5, 4, 3, 2, 1]));
console.log(findGreaterNumbers([]));

/*
    1)Array = [1,2,3]
    i = 0; 0 < 3 - True
    splArray = array.slice(0 +1) - [2,3]
    
    j=0;0 < 2; - True
    a[0] - 1 , splArr[0] - 2 
    1 < 2 - True
    count increments to 2 

    2)
    i = 1; 1 < 3 - True
    splArray = array.slice(1 +1) - [3]
    
    j=1;1 < 2; - True
    a[1] - 2 , splArr[1] - 3 
    2 < 3 - True
    count increments to 3  

    3) 
    i = 2; 2 < 3 - True
    splArray = array.slice(2 + 1) - []
    And loop stops count - 3
*/

// 8)Reverse vowels in string
function reverseVowels(a) {
    // Declared & Assigned
    const strLength = a.length;

    // Spread operator converts string to array of characters.
    let str = [...a];

    const emptyArray = [];

    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

    for (let i = 0; i < strLength; i++) {
        if (vowels.includes(a[i])) {
            emptyArray.push(a[i]);
        }
    }

    for (let i = 0; i < strLength; i++) {
        if (vowels.includes(str[i])) {
            str[i] = emptyArray.pop();
        }
    }
    return str.join('');
}
console.log(reverseVowels('Hello!'));

// reusability
console.log(reverseVowels('Tomatoes'));
console.log(reverseVowels('Reverse Vowels In A String'));
console.log(reverseVowels('aeiou'));
console.log(reverseVowels('why try,shy fly?'));

// 9)Get all array elements except those with specified indexes
// Process - 1
function arrayExcept(a, b) {

    const emptyArray = [];

    for (let i = 0; i < a.length; i++) {
        if (b.includes(i)) {
            continue;
        } else {
            emptyArray.push(a[i])
        }
    }
    return emptyArray;
}
// Process - 2
function arrayExcept(a, b) {
    for (let i = b.length - 1; i >= 0; i--) {
        a.splice(b[i], 1)
    }
    return a;
}

const arrOne = ['a', 'b', 'c', 'd', 'e'];
const arrTwo = ['a', 'b', 'c', 'd', 'e'];

const indexOne = [1, 3]
const indexTwo = [1]

console.log(arrayExcept(arrOne, indexOne));

// reusability
console.log(arrayExcept(arrTwo, indexTwo));

// 10)find the missing number in an array
const arrNums = [1, 2, 3];
const res = Math.min(...arrNums);
console.log(res);

function missingElement(a) {
    // Declared
    let result;

    const minNum = Math.min(...a);
    const maxNum = Math.max(...a);

    for (let i = minNum; i < maxNum; i++) {
        if (a.indexOf(i) < 0) {
            // reassigned
            result = i;
        }
    }
    return result;
}

console.log(missingElement([1, 2, 3, 5]));

// reusability
console.log(missingElement([19, 18, 17, 15]));
