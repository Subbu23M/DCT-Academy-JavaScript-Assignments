// Date:14/07/2021 

// 1)Array includes without built in function
function includes(a, b) {
    // Declared
    let result;

    // We use for...loop to iterate on every element in the array
    for (let i = 0; i < a.length; i++) {
        if (a[i] === b) {
            // assigned
            result = true;

            // Here break is called Loop Control
            break;

        } else {
            // assigned
            result = false;
        }
    }
    return result;
}

console.log(includes([1, 2, 3, 4], 4));

// reusability
console.log(includes([1, 2, 3, 4], 14));
console.log(includes([], 14));

// 2)lastIndexOf without built in function
function lastIndexOf(a, b) {
    // Declared & Assigned
    let resultIndexPosition = -1;

    // We use for...loop to iterate on every element in the array
    for (let i = 0; i < a.length; i++) {
        if (a[i] === b) {
            //re-assigned
            resultIndexPosition = i;
        }
    }
    return resultIndexPosition;
}
console.log(lastIndexOf([1, 2, 3, 4], 2));

// reusability
console.log(lastIndexOf([1, 2, 3, 4, 2], 2));
console.log(lastIndexOf([1, 2, 3, 4], 22));

// 3)push without built in function
function push(a, b) {

    // Declared & Assigned
    const arrLength = a.length;

    a[arrLength] = b;

    return a.length;

}

console.log(push([1, 2, 3], 10));

// reusability
console.log(push([5, 2, 1, 6], 20));

// 4)pop without built in function

// Declared & Assigned
const num = [1, 2, 3];

// To get last index of the element
console.log(num.length - 1);

function pop(a) {

    // Declared
    let result;

    // Declared & Assigned
    const popElement = a.length - 1;

    if (a.length > 0) {
        //assigned
        result = a[popElement];
    } else {
        //assigned
        result = 'undefined';
    }
    return result;
}

console.log(pop([1, 2, 3, 4]));

// reusability
console.log(pop([]));

// 5)shift without built in function

// Declared & Assigned
const aPeople = ['a', 'b', 'c'];

console.log(aPeople[0]);

function shift(a) {

    // Declared
    let result2;

    if (a.length === 0) {
        //assigned
        result2 = 'undefined';
    } else {
        //assigned
        result2 = a[0];
    }

    return result2;
}

console.log(shift([1, 2, 3]));

// reusability
console.log(shift(['a', 'b', 'c']));

console.log(shift([]));

//6)find keys of an object without built in function
function keys(a) {
    // Declared & Assigned
    const objPropsArr = [];

    // We use for...in loop to iterate on every element in the object
    for (const key in a) {
        objPropsArr.push(key);
    }
    return objPropsArr;
}

console.log(
    keys({
        a: 1,
        b: 2,
        c: 3,
    })
);

// reusability
console.log(
    keys({
        first: "Matt",
        last: "Lane",
    })
);
console.log(keys({}));

// 7)every function without using built in function

// result2 - Call back function
// every - Higher Order function

function every(a, b) {

    for (let element of a) {

        if (result2(element) === false) {
            return false;
        }
    }
    return true;
}

const result2 = function (ele) {

    // Just change the condition here
    return (ele > 0);

}
console.log(every([1, 2, 3, 4, 5], result2));

// 8)find values of an object without using built in function
function keys1(a) {
    // Declared & Assigned
    const objPropsArr = [];

    // We use for...in loop to iterate on every element in the object
    for (const key in a) {
        objPropsArr.push(a[key]);
    }
    return objPropsArr;
}

console.log(
    keys1({
        a: 1,
        b: 2,
        c: 3,
    })
);

// reusability
console.log(
    keys1({
        first: "Matt",
        last: "Lane",
    })
);
console.log(keys1({}));

// 9) some without built in function
function some1(arr, cb) {

    // We use for...loop to iterate on every element in the array

    for (let i = 0; i < arr.length; i++) {
        if (cb(arr[i]) === true) {
            return true;
        }
    }
    return false;
}

const cb = function (ele) {
    // Just change the condition here
    return ele > 5;
};

console.log(some1([1, 2, 3, 4, 5], cb));

// 10)reverse without built in function

/*
    1)We use for...loop to iterate on every element in the array
    2)initial value = arrName.length-1 , lowest value >= 0;decrement operator
*/

function reverse(a) {
    // Declared & Assigned
    const result = [];

    for (let i = a.length - 1; i >= 0; i--) {
        result.push(a[i]);
    }
    return result;
}
console.log(reverse([5, 4, 3, 2, 1]));

// reusability
console.log(reverse([]));
console.log(reverse([1, 2, 3]));