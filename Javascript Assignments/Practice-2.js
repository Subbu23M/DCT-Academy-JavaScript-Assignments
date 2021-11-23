// Date:06/07/2021

// 1)Create a function that takes an integer and return true if it's divisible by 100, otherwise return false.
function divisible(a) {
    // Ternary Operator
    const result = (a % 100 === 0) ? 'true' : 'false';
    return result;
}

// Declared & Assigned
const result1 = divisible(1);
console.log(result1);

// reusability
const result2 = divisible(1000);
console.log(result2);

console.log("hello".length);

// 2) Frames Per Second
function frames(a, b) {
    return a * b * 60;
}

console.log(frames(10, 1));
console.log(frames(10, 25));

// 3)Create a function that finds the word "bomb" in the given string. If found, return "Duck!!!", otherwise return "There is no bomb, relax.".
// Process - 1
function bomb(str) {
    // reassigned
    str = str.split(" ");
//     console.log(str);

    // Declared
    let result;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === "bomb") {
            // assigned
            result = "Duck!!!";
        } else {
            // assigned
            result = "There is no bomb, relax.";
        }
    }
    return result;
}

// Process - 2
function bomb(a) {
    // Ternary Operator
    const result = a.includes('bomb') ? 'Duck!!!' : 'There is no bomb, relax.';
    return result;
}
console.log(bomb("There is a bomb"));
console.log(bomb("This goes boom!!!"));

// 4) Create a function that takes a word and returns the new word without including the first character.
function newWord(a) {
    return a.slice(1);
}
console.log(newWord("apple"));
console.log(newWord("cherry"));

// Declared & Assigned
const arrStr = ["hello", "bye"];
console.log(arrStr.indexOf("hello"));
console.log(arrStr.indexOf("bye"));

// 5)Given two integers, a and b, return true if a can be divided evenly by b. Return false otherwise.
function dividesEvenly(a, b) {
    // Ternary Operator
    const result = (a % b === 0) ? 'true' : 'false';
    return result;
}

// Declared & Assigned
const result1 = dividesEvenly(98, 7);
console.log(result1);

// reusability
const result2 = dividesEvenly(85, 4);
console.log(result2);

// reusability
const result3 = dividesEvenly(10, 3);
console.log(result3);

// 6)Create a function that takes an array and a string as arguments and return the index of the string.
// Process - 1
function findIndex(arr, str) {
    // Declared
    let result;

    for (let i = 0; i < arr.length; i++) {
        // assigned
        result = arr.indexOf(str);
    }
    return result;
}

// Process - 2
function findIndex(a, b) {
    // Declared
    let result;

    a.forEach((word, index) => {
        if (word === b) {
            // reassigned
            result = index;
        }
    })
    return result;
}

// Declared & Assigned
const result11 = findIndex(["hi", "edabit", "fgh", "abc"], "fgh");
console.log(result11);

// reusability
const result12 = findIndex(["red", "blue", "Blue", "Green"], "blue");
console.log(result12);

const result13 = findIndex(["a", "g", "y", "d"], "d");
console.log(result13);

const result14 = findIndex(
    ["Pineapple", "Orange", "Grape", "Apple"],
    "Pineapple"
);
console.log(result14);

// 7)Using Ternary Operators
function yeah_nope(a) {
    // Declared & Assigned
    const is_yeah_nope = true;

    // if(a === is_yeah_nope){
    //     return 'yeah';
    // }else{
    //     return 'nope'
    // }
    // return is_yeah_nope;

    return (result25 = a === is_yeah_nope ? "yeah" : "nope");
}

console.log(yeah_nope(true));
console.log(yeah_nope(false));

// 8) Flip the Boolean
console.log(!Boolean(0));
console.log(!Boolean(1));

console.log(Boolean(true));

// Process - 1
function flipBool(a) {
    // Declared
    let result1;

    if (Boolean(a) === true) {
        // assigned
        result1 = 0;
    } else {
        // assigned
        result1 = 1;
    }

    return result1;
}

// Process - 2
function flipBool(a) {
    // Ternary Operator
    const result = (Boolean(a)) ? 0 : 1;
    return result;
}
console.log(flipBool(true));
console.log(flipBool(false));
console.log(flipBool(1));
console.log(flipBool(0));

//9) Check if an Array Contains a Given Number
function check(a, b) {
    // Declared
    let result3;

    for (let i = 0; i < a.length; i++) {
        if (a[i] === b) {
            result3 = true;
            break;
        } else {
            result3 = false;
        }
    }

    return Boolean(result3);
}

// Declared & Assigned
const check1 = check([1, 2, 3, 4, 5], 3);
console.log(check1);

// reusability
const check2 = check([1, 1, 2, 1, 1], 3);
console.log(check2);

// reusability
const check3 = check([5, 5, 5, 6], 5);
console.log(check3);

// reusability
const check4 = check([], 5);
console.log(check4);

// 10)Create a function that returns true if a string contains any spaces.
function hasSpaces(str) {
    // Ternary Operator
    const result = (a.indexOf(' ') >= 0) ? true : false;
    return result;
}
console.log(hasSpaces("hello"));
console.log(hasSpaces("hello,               world"));

console.log(hasSpaces(" "));
console.log(hasSpaces(""));

/*
    1)Empty string ('') without white spaces - indexOf - 0
    2)' ' - String without any character. returns (-1) with white spaces.
*/

//11) Create a function that takes an object argument sizes (contains width, length, height keys) and returns the volume of the box.

const obj1 = {
    width: 2,
    length: 5,
    height: 1,
};

const obj2 = {
    width: 2,
    length: 3,
    height: 5,
};

// for(const key in obj1){
//     console.log(key);
//     console.log(obj1[key]);
// }

// console.log(obj1['width']);

function volumeOfBox(obj) {
    return obj["width"] * obj["height"] * obj["length"];
}

console.log(volumeOfBox(obj1));
console.log(volumeOfBox(obj2));

const result = obj1["width"] * obj1["length"] * obj1["height"];
console.log(result);

// 12)Create a function that returns the number of arguments it was called with.
function numArgs(a) {
    return arguments.length;
}

console.log(numArgs());
console.log(numArgs("foo", "bar"));
console.log(numArgs("true", "false"));
console.log(numArgs({}));

// 13)Create a function that takes two numbers num1, num2, and an array arr and returns an array containing all the numbers in arr greater than num1 and less than num2.

function arrBetween(num1, num2, arr) {
    // Declared & Assigned
    const arrNum = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > num1 && arr[i] < num2) {
            arrNum.push(arr[i]);
        }
    }
    return arrNum;
}

console.log(arrBetween(3, 8, [1, 5, 95, 0, 4, 7]));
console.log(arrBetween(7, 32, [1, 2, 3, 78]));

// 14)A typical car can hold four passengers and one driver, allowing five people to travel around. Given n number of people, return how many cars are needed to seat everyone comfortably.

function carsNeeded(a) {
    return a % 4;
}

console.log(carsNeeded(5));
console.log(carsNeeded(11));
console.log(carsNeeded(1));
console.log(carsNeeded(0));

// 15)Extract City Facts

const cityFacts = function cityFacts(obj) {
    return `${obj.name} has a population of ${obj.population} and is situated in ${obj.continent}`;
};

console.log(
    cityFacts({
        name: "Paris",
        population: "2,140,526",
        continent: "Europe",
    })
);

console.log(
    cityFacts({
        name: "Tokyo",
        population: "13,929,286",
        continent: "Asia",
    })
);
