// 24/07/2021

// Practice - SET 3

//1) Create the function sumOfDigits that adds individual digits of a number, and returns the sum.
// function declaration
// Process - 1
function sumOfDigits(num) {
    // Declared & Assigned
    let sum = 0;

    // Here parameters acts as local variables & placeholders.

    // Declared & Assigned
    const numToStr = num.toString();

    // split('') - return array of strings.

    // Declared & Assigned
    const strToArr = numToStr.split("");

    // We use for..loop to iterate on every element in the array
    for (let i = 0; i < strToArr.length; i++) {
        sum = sum + parseInt(strToArr[i]);
    }
    return sum;
}
// Process - 2
function sumOfDigits(a) {
    // reassigned
    a = String(a).split('');
    // console.log(a);

    // Declared & Assigned
    let sum = 0;

    a.forEach((num) => {
        // reassigned
        sum = sum + Number(num);
    })
    return sum;
}
console.log(sumOfDigits(414));

// reusability
console.log(sumOfDigits(2913));

// 2)Count Up then Down
function countUpThenDown(num) {
    // Declared & Assigned
    const arrNums = [];

    for (let i = 0; i <= num; i++) {
        arrNums.push(i);
    }

    for (let i = num - 1; i >= 0; i--) {
        arrNums.push(i);
    }
    return arrNums;
}

console.log(countUpThenDown(2));

// reusability
console.log(countUpThenDown(0));

// 3)Authenticate
// Process - 1
function authenticate(arr, str) {
    // Declared
    let result;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === str) {
            // assigned
            result = 'authenticated';
            break;
        } else {
            // assigned
            result = 'not authenticated';
        }
    }
    return result;
}

// Process - 2
function authenticate(a, b) {

    for (let i = 0; i < a.length; i++) {
        // Ternary Operator
        const result = (a[i] === b) ? 'authenticated' : 'not authenticated';
        return result;
    }
}

// Declared & Assigned
const passwordArray = [
    "Password123",
    "dct@academy",
    "qwerty",
    "secret123",
    "gopro123",
    "harryp@tter",
];

const res1 = authenticate(passwordArray, 'Password123');
console.log(res1);

// reusability
const res2 = authenticate(passwordArray, 'Balrog');
console.log(res2);

// 4) Find Even or Odd
// Process - 1
function findEO(a) {
    // Declared
    let result;

    if (a % 2 === 0) {
        // Assigned
        result = "Even";
    } else {
        // Assigned
        result = "Odd";
    }
    return result;
}

// Process - 2
function findEO(a) {
    // Ternary Operator
    const result = (a % 2 === 0) ? 'Even' : 'Odd';
    return result;
}
console.log(findEO(10));

// reusability
console.log(findEO(11));

// 5)Grasshopper - Summation
function summation(a) {
    // Declared & Assigned
    let result = 0;

    for (let i = 0; i <= a; i++) {
        // reassigned
        result = result + i;
    }
    return result;
}

console.log(summation(2));

// reusability
console.log(summation(8));

/*
    Representation

    i=0;i<=2; - 0<=2 -T
    0 + 0 = 0
    i++

    i=1;i<=2; - 1<=2 -T
    0 + 1 = 1
    i++

    i=2;i<=2; - 2<=2 -T
    0 + 1 + 2 = 3 
    i++

    i=3;i<=2; - 3<=2 -F
    return i = 3;
*/

// 6)Sum positive Numbers
// Process - 1
function sumPos(a) {
    // Declared & Assigned
    let result = 0;

    for (let i = 0; i < a.length; i++) {
        if (a[i] > 0) {
            // reassigned
            result = result + a[i];
        }
    }
    return result;
}

// Process - 2
function sumPos(a) {
    // Declared & Assigned
    let result = 0;

    a.forEach((num) => {
        if (num > 0) {
            // reassigned
            result = result + num;
        }
    })
    return result;
}
console.log(sumPos([1, -4, 7, 12]));

// reusability
console.log(sumPos([]));

// 7)String Count
function strCount(str, char) {
    // Declared & Assigned
    let result = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            // reassigned
            result = result + i;
            break;
        }
    }
    return result;
}

console.log(strCount("Hello", "o"));

// reusability
console.log(strCount("Hello", "l"));
console.log(strCount("", "z"));

// 8)Simple Multiplication
function multiplyMe(a) {
    // Declared
    let result;

    if (a % 2 === 0) {
        // assigned
        result = (a * 8);
    } else {
        // assigned
        result = (a * 9);
    }
    return result;
}

console.log(multiplyMe(2));

// reusability
console.log(multiplyMe(3));

// 9)The Array Cafe
function findNotBookedTables(a) {
    // Declared & Assigned
    const tables = [];

    for (let i = 0; i < a.length; i++) {
        if (a[i] === "not booked") {
            tables.push(i);
        }
    }

    if (a.length === 0) {
        return "empty array";
    }

    return tables;
}

console.log(
    findNotBookedTables([
        "not booked",
        "booked",
        "booked",
        "not booked",
        "not booked",
    ])
);

// reusability
console.log(findNotBookedTables([]));

// 10)Fizz Buzz
function fizzBuzz(i) {
    // Declared
    let result;

    if (i % 3 === 0 && i % 5 === 0) {
        // Assigned
        result = "FizzBuzz";
    } else if (i % 3 === 0) {
        // Assigned
        result = "Fizz";
    } else if (i % 5 === 0) {
        // Assigned
        result = "Buzz";
    } else {
        result = "";
    }

    return result;
}

console.log(fizzBuzz(6));

// reusability
console.log(fizzBuzz(10));
console.log(fizzBuzz(15));
console.log(fizzBuzz(7));
