// 11/08/2021

// Practice - SET 4

// 1)Write a function called appendToString, which accepts two strings.

// Process - 1
function appendToString(a, b) {
    return a + b;
}

// Process - 2
function appendToString(a, b) {
    return `${a} ${b}`;
}
console.log(appendToString("Hello", " World!"));

// reusability
console.log(appendToString("Foo", "bar"));
console.log(appendToString("bar", "Foo"));
console.log(appendToString("", "test"));
console.log(appendToString("other test", ""));

// 2)find minimum number in an array without using built in function
function min(arr) {
    const minNum = arr[0];

    let result;

    // We use for...loop to iterate on every element in the array.
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < minNum) {
            result = arr[i];
            break;
        }
    }
    return result;
}

console.log(min([5, 1, 4, 7, 1, 2]));

// reusability
console.log(min([-1, 6, 3, 2.2, -10, -4]));

// 3)Square even numbers and return sum of squared
// Process - 1
function squareEvenNumbers(arr) {
    let result = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            result = result + arr[i] * arr[i];
        }
    }
    return result;
}
// Process - 2
function squareEvenNumbers(a) {
    // Declared & Assigned
    let sum = 0;

    a.forEach((num) => {
        if (num % 2 === 0) {
            // reassigned
            sum = sum + (num * num);
        }
    })
    return sum;
}
console.log(squareEvenNumbers([1, 2, 3, 4, 5]));

// reusability
console.log(squareEvenNumbers([1, 3, 5, 7]));
console.log(squareEvenNumbers([5, 6, 7]));

// 4)String Includes
function stringIncludes(a, b) {
    let result;

    for (let i = 0; i < a.length; i++) {
        if (a[i] === b) {
            result = true;
        } else {
            result = false;
        }
    }
    return result;
}

console.log(stringIncludes("awesome", "e"));

// reusability
console.log(stringIncludes("awesome", "z"));

// 5)Repeat the string number of times
function repeat(a, b) {
    let result = "";

    for (let i = 0; i < b; i++) {
        result = result + a;
    }
    return result;
}

console.log(repeat("Matt", 3));

// reusability
console.log(repeat("Elie", 2));
console.log(repeat("Michael", 0));

// 6)object to array of elements
function entries(a) {
    // We use for..in loop to iterate on every property in the object. 
    const propKeys = [];
    for (const key in a) {
        propKeys.push([key, a[key]]);
    }
    return propKeys;
}

console.log(entries({
    a: 1,
    b: 2,
    c: 3
}));

// reusability
console.log(entries({
    first: 'Matt',
    last: 'Lane',
    isDogOwner: true
}));
console.log(entries({}));

// 7)Check array contains three odd numbers

const arrNums = [0, 1, 2, 3]
console.log(arrNums[0] + arrNums[2]);

function threeOddNumbers(a) {
    // Declared
    let result;

    // Declared & Assigned
    let three = 0;

    // We use for...loop to iterate on every element in the array
    for (let i = 0; i < a.length; i = i + 2) {
        // reassigned
        three = three + a[i];

        if (three % 2 === 1) {
            // assigned
            result = true;
        } else {
            // assigned
            result = false;
        }
    }
    return result;
}

console.log(threeOddNumbers([1, 2, 3, 4, 5]));

// reusability
console.log(threeOddNumbers([0, -2, 4, 1, 9, 12, 4, 1, 0]));
console.log(threeOddNumbers([5, 2, 1]));
console.log(threeOddNumbers([1, 2, 3, 3, 2]));

//8) Find the highest scoring word in the string
function longestCharacter(str) {
    // Declared & Assigned
    const splitStr = str.split(' ');
    console.log(splitStr);
    console.log(splitStr[0]);

    // Declared & Assigned
    const emptyArray1 = [];

    for (let i = 0; i < splitStr.length; i++) {
        // Declared & Assigned
        let weight = 0;

        for (let j = 0; j < splitStr[i].length; j++) {
            // reassigned
            weight = weight + splitStr[i].charCodeAt(j) - 96;
            console.log(weight);
        }
        emptyArray1.push(weight);
        console.log(emptyArray1);
    }
    // Declared & Assigned
    const finalResult1 = emptyArray1.indexOf(Math.max(...emptyArray1));
    console.log(finalResult1);
    return splitStr[finalResult1]
}

console.log(longestCharacter('a b c d e f'));

// reusability
console.log(highestScoringWord("hello world"));
console.log(highestScoringWord("go ahead make my day"));
console.log(highestScoringWord("there is no place like home"));
console.log(highestScoringWord("aaaaaa bbb cc f"));
console.log(highestScoringWord("bbb cc f aaaaaa"));

console.log(highestScoringWord('this sentence has two highest scoring words"'));

// 9)Check vowels and consonants are alternative

function isAlt(a) {
    let result;

    const vowels = ['a', 'e', 'i', 'o', 'u'];

    for (let i = 0; i < a.length; i++) {
        if (vowels.includes(a[i]) && vowels.includes(a[i + 2])) {
            result = true;
            break;
        } else {
            result = false;
        }
    }
    return result;
}

console.log(isAlt('amazon'));

// reusability
console.log(isAlt('apple'));
console.log(isAlt('banana'));

// 10)Return a new array of rankings of the original array
function rankings(a) {
    // Declared & Assigned
    const ranks = [];

    for (let i = 0; i < a.length; i++) {
        // Declared & Assigned
        let r = 1;

        for (let j = 0; j < a.length; j++) {
            if (a[j] > a[i]) {
                r = r + 1;
            }
        }
        ranks.push(r);
    }
    return ranks;
}

console.log(rankings([10, 5, 20]));

// reusability
console.log(rankings([6, 8, 1, 12, 4, 3, 9]));
console.log(rankings([100]));
console.log(rankings([4, 2, 3, 1]));
