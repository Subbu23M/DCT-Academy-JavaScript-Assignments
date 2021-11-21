// JavaScript Interview Preparation - SET 2
// Date:11/11/2021

// A prime number is a positive integer that is only divisible by 1 and itself. For example, 2, 3, 5, 7, 11 are the first few prime numbers.

// 1)isPrime or not
function isPrime(a) {
    // Declared & Assigned
    let boolValue = true;

    // Simple...if
    if (a === 1) {
        return 'one is neither prime nor composite number.'
    } else if (a > 1) {
        for (let i = 2; i < a; i++) {
            if (a % i === 0) {
                // reassigned
                boolValue = false;
                break;
            }
        }
    }
    return boolValue;
}
// Invoke function
console.log(isPrime(3));

// reusability
console.log(isPrime(4));
console.log(isPrime(17));

//2)Find largest and smallest number in unsorted array
function maxMinOfArray(a) {
    // Declared & Assigned
    let maxNum = a[0];
    let minNum = a[0];

    for (let i = 0; i < a.length; i++) {
        if (maxNum < a[i]) {
            // reassigned
            maxNum = a[i];
        }
        if (minNum > a[i]) {
            // reassigned
            minNum = a[i];
        }
    }
    const result = [maxNum, minNum];
    return result;
}
// Invoke function
console.log(maxMinOfArray([1, 5, 15, 4, 7, 3]));

// reusability
console.log(maxMinOfArray([-20, 34, 21, -87, 92, 2147483647]));

// 3)find all permutations of String
function permutation(str) {
    const result = [];

    if (str.length === 1) {
        result.push(str);
    }

    for (let i = 0; i < str.length; i++) {
        const char = str[i];

        const remaininingCharacters =
            str.slice(0, i) + str.slice(i + 1, str.length);

        const innerPermutations = permutation(remaininingCharacters);

        for (let chars of innerPermutations) {
            result.push(char + chars);
        }
    }
    return result;
}
// Invoke function
console.log(permutation('xyz'));

// 4) Wheel of Fortune
function winner(a) {
    // Declared & Assigned
    const emptyArray = [];

    a.map((ele) => {
        // Declared & Assigned
        let sum = 0;

        // Object Destructuring - ES6
        const {
            scores
        } = ele;

        for (let i = 0; i < scores.length; i++) {
            // reassigned
            sum = sum + scores[i];
        }
        emptyArray.push(sum);
        console.log(emptyArray);
    })
    const maxScore = Math.max(...emptyArray);
    const minScore = emptyArray.indexOf(maxScore);
    return a[minScore].name;
}
c1 = {
    "name": "Bob",
    "scores": [10, 65]
}

c2 = {
    "name": "Bill",
    "scores": [90, 5]
}

c3 = {
    "name": "Charlie",
    "scores": [40, 55]
}

// Invoke function
console.log(winner([c1, c2, c3]));

// 5)Mexican Wave
function wave(a) {
    // reassigned
    a = a.toLowerCase();

    const result = [...a]
        .map(function (char, i) {
            return `${a.slice(0, i)}${char.toUpperCase()}${a.slice(i + 1, a.length)}`;
        })
        .filter(function (char) {
            return /[A-Z]/.test(char);
        });
    return result;
}
// Invoke function
console.log(wave('hello'));

// reusability
console.log(wave('gap'));

// 6) Mispelled word
var mispelled = function (word1, word2) {
    let w = word1.length - word2.length > 0 ? word1.length : word2.length;
    let num = 0;

    for (let i = 0; i < w; i++) {
        if (word1[i] !== word2[i]) {
            num = num + 1;
        }
    }

    return num === 1;
};
// Invoke function
console.log(mispelled('versed', 'xersed'));

// reusability
console.log(mispelled('versed', 'applb'));
console.log(mispelled('versed', 'v5rsed'));
console.log(mispelled('1versed', 'versed'));

// 7) Array Binary Search
function binarySearch(a, b) {
    let minNum = 0;
    let maxNum = a.length - 1;

    if (!a.includes(b)) {
        return 'element not present'
    }

    while (minNum <= maxNum) {
        const res = minNum + maxNum;
        let middleNum = Math.floor(res / 2);

        if (b === a[middleNum]) {
            return middleNum
        }

        // Ternary Operator
        (b > a[middleNum]) ? minNum = middleNum + 1: maxNum = middleNum - 1;
    }
    return -1;
}
// Invoke function
console.log(binarySearch([1, 2, 3, 4, 5, 7, 8, 9], 1));

// reusability
console.log(binarySearch([1, 2, 3, 4, 5, 7, 8, 9], 5));

//8) Is a pangram?
function pangram(a) {
    // reassigned
    a = a.toLowerCase();
    const alphabets = 'abcdefghijklmnopqrstuvwxyz';

    const result = alphabets.split('').every(function (ele) {
        if (a.indexOf(ele) !== -1) {
            return true;
        }
    })
    return result;
}
// Invoke function
console.log(pangram('The quick brown fox jumps over the lazy dog'));

//9) Mr. Robert has a string to play with
function transformedString(a) {
    // Declared & Assigned
    let aSplit = a.split('');
    // console.log(aSplit);

    // Declared & Assigned
    const emptyArray = [];

    let count = 1;

    for (let i = 0; i < aSplit.length; i++) {
        if (aSplit[i] === aSplit[i + 1]) {
            // reassigned
            count++;
        } else {
            let value = `${aSplit[i]}${count}`;
            emptyArray.push(value);
            // reassigned
            count = 1;
        }
    }
    return emptyArray.join('');
}
// Invoke function
console.log(transformedString('addba'));

// reusability
console.log(transformedString('aaabbdcccccf'));

// 10)Find the sum of the numbers which do not repeat in the array
function nonRepeatedSum(a) {
    const result = a.filter(function (ele) {
        if (a.indexOf(ele) === a.lastIndexOf(ele)) {
            return true;
        }
    })
    const resultArr = result;
    // console.log(resultArr);

    let sum = 0;
    for (let i = 0; i < resultArr.length; i++) {
        sum = sum + resultArr[i];
    }
    return sum;
}
// Invoke function
console.log(nonRepeatedSum([10, 5, 3, 4, 3, 5, 6]));

// reusability
console.log(nonRepeatedSum([1, 6, 2, 5, 4, 11]));

// 11)Matrix Multiplier
function getMatrixProduct(a, b) {
    let result = new Array(a.length);

    for (let i = 0; i < result.length; i++) {
        result[i] = new Array(b[i].length);
        for (let j = 0; j < a.length; j++) {
            result[i][j] = 0;
            for (let k = 0; k < b.length; k++) {
                result[i][j] += a[i][k] * b[k][j];
            }
        }
    }
    return result;
}
// Invoke function
console.log(getMatrixProduct([
    [1, 2],
    [3, 4]
], [
    [5, 6],
    [7, 8]
]));

// 12)Matrix creation
function getMatrix(a) {
    let result = new Array(a);

    for (let i = 0; i < result.length; i++) {
        result[i] = new Array(a);
        for (let j = 0; j < result[i].length; j++) {
            if (i === j) {
                result[i][j] = 1;
            } else {
                result[i][j] = 0;
            }
        }
    }
    return result;
}
// Invoke function
console.log(getMatrix(1));

// reusability
console.log(getMatrix(2));
console.log(getMatrix(5));