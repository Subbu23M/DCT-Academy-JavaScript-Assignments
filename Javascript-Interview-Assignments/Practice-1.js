// JavaScript Interview Preparation - SET 1
// Date:01/11/2021

// 1)Balanced Array
function balancedArray(a) {
    // Declared & Assigned
    let firstHalfSum = 0;
    let secondHalfSum = 0;

    const arrLength = a.length;

    const breakIndex = Math.floor(arrLength / 2);

    // We use for...loop to iterate on every element in the array
    for (let i = 0; i < breakIndex; i++) {
        // reassigned
        firstHalfSum = firstHalfSum + a[i];
    }

    for (let i = breakIndex; i < arrLength; i++) {
        // reassigned
        secondHalfSum = secondHalfSum + a[i];
    }

    const result = Math.abs(firstHalfSum - secondHalfSum);
    return result;
}

// Invoke function
console.log(balancedArray([1, 2, 1, 2, 1, 3]));

// reusability
console.log(balancedArray([20, 10]));

// 2)Reverse a String
// Process - 1
function reverseString(a) {

    const result = a.split('').reverse().join('');
    // console.log(result);

    return result;
}

// Invoke function
console.log(reverseString('sir'));

// reusability
console.log(reverseString('pen'));

// Process - 2
function reverseStringOne(a) {
    let reverseStr = '';

    if (a.length === 0) {
        return 'string is empty';
    }

    for (let i = a.length - 1; i >= 0; i--) {
        // reassigned
        reverseStr = reverseStr + a[i];
    }
    return reverseStr;
}

// Invoke function
console.log(reverseStringOne('hello'));

// reusability
console.log(reverseStringOne('Greetings from the moon!'));

// 3)Remove Duplicate
function uniqueElements(a) {
    const result = a.filter(function (ele) {
        if (a.indexOf(ele) === a.lastIndexOf(ele)) {
            return true;
        }
    });
    return result;
}

const numbers = [1, 2, 3, 4, 1, 2];
console.log(uniqueElements(numbers));

// reusability
console.log(uniqueElements([10, 20, 30, 40, 10, 20]));
console.log(uniqueElements([1, 2, 3, 2, 3]));

// 4)First not Repeated char
const str = 'subbu';

/*
    s u b b u
i=  0 1 2 3 4
*/

console.log(str.indexOf('s'));
console.log(str.lastIndexOf('s'));
console.log(str.charAt(0));

// Process-1
function nonRepeatedChar(a) {
    // Declared & Assigned
    let nonRepeatedCharacter = '';

    // We use Traditional for...loop to iterate on every character in the string
    for (let i = 0; i < a.length; i++){
        if (a.indexOf(a.charAt(i)) === a.lastIndexOf(a.charAt(i))) {
            // reassigned
            nonRepeatedCharacter = nonRepeatedCharacter + a.charAt(i);
            break;
        }
    }
    return nonRepeatedCharacter;
}

// Process-2
function nonRepeatedChar(a){
    const result = a.split('').filter((char) => {
        if(a.indexOf(char) === a.lastIndexOf(char)){
            return true;
        }
    })
    return result.join('');
}
// Invoke function
console.log(nonRepeatedChar('abacddbec'));

// reusability
console.log(nonRepeatedChar('dctacademy'));

// 5)Highest occurred character in a String
function highestOccurance(a) {
//     Declared & Assigned
    let count = 0;
    let result = '';
    
    // reassigned
    a = a.split('');
    // console.log(a); returns array of elements

    a.forEach(function (char) {
        if (a.length > count) {
//             reassigned
            count = a.length;
            result = char;
        }
    })
    return result;
}
// Invoke function
console.log(highestOccurance('apple'));

// reusability
console.log(highestOccurance('aaaaaaaaaaaaaaaaabbbbcddddeeeeee'));

// 6)check if two Strings are anagrams of each other
function anagramCheck(a, b) {
    // Declared & Assigned
    const str1 = a.toLowerCase().split('').sort().join('');
    const str2 = b.toLowerCase().split('').sort().join('');

    return (str1 === str2);
}
// Invoke the function
console.log(anagramCheck('Army', 'Mary'));

// reusability
console.log(anagramCheck('indian', 'ndiani'));

// 7)Sort an array in place using QuickSort algorithm
function quickSort(arr, length = arr.length - 1, start = 0) {
    if (arr.length < 2) {
        return arr;
    }

    const pivot = arr[arr.length - 1];
    console.log(pivot);

    const left = [];
    const right = [];

    while (start < length) {
        // Ternary Operator
        (arr[start] < pivot) ? left.push(arr[start]): right.push(arr[start])

        start++;
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
}
console.log(quickSort([4, 9, 2, 6, 8, 10, 3, 1, 7, 5]));

// 8)Factorial using recursive function
function recursiveFactorial(a) {
    if (a === 0 || a === 1) {
        a = 1;
    }

    for (let i = a - 1; i >= 1; i--) {
        if (a > 0) {
            a = a * i;
        }
    }
    return a;
}

// 9)Dancing Sentence
function makeDancing(a) {
    // Declared & Assigned
    const result = [];

    // reassigned
    a = a.split('');

    let boolValue = false;
    
    a.forEach((char, i) => {
        if (char === ' ') {
            // reassigned
            boolValue = !boolValue;
        }

        // Nested Ternary Operator
        (boolValue) ?
        (i % 2 === 0 ?
            emptyArray.push(char.toLowerCase()) :
            emptyArray.push(char.toUpperCase())) :
        (i % 2 === 0 ?
            emptyArray.push(char.toUpperCase()) :
            emptyArray.push(char.toLowerCase()));
    })
    return result.join('');
}

// Invoke function
console.log(makeDancing('This is a dancing sentence'));

// reusability
console.log(makeDancing('ThIs Is A   dAnCiNg SeNtEnCe'));
console.log(makeDancing('aaaaaaaaaaa'));
console.log(makeDancing('z'));

// 10)Unique Elements of two Arrays
function difference(a, b) {

    const aSort = a.sort();
    const bSort = b.sort();

    const combineArrays = aSort.concat(bSort);

    if (combineArrays.length === 0) {
        return 'empty array'
    }

    const resultOne = combineArrays.filter(function (ele, i) {
        if (combineArrays.indexOf(ele) === i) {
            return true;
        }
    });
    return resultOne;
}
// Invoke function
console.log(difference([1, 2, 3], [100, 2, 1, 10]));
console.log(difference([], []));
