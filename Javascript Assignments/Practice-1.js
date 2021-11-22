// Date:01/07/2021 

// 1)Create a function that takes two numbers as arguments and return their sum.

// function declaration
function addNum(a, b) {
  // function body
  return a + b;
}

// Invoke function
console.log(addNum(2, 3));

// reusability
console.log(addNum(-3, -6));
console.log(addNum(7, 3));

// 2)Write a function that takes an integer minutes and converts it to seconds
function minSec(a) {
  return a * 60;
}

console.log(minSec(5));

// reusability
console.log(minSec(3));
console.log(minSec(2));

// 3)Create a function that takes a number as an argument, increments the number by +1 and returns the result.
function addition(a) {
  // return a = a + 1;
  // Combined Assignment Operator
  return (a += 1);
}

console.log(addition(0));

// reusability
console.log(addition(9));
console.log(addition(-3));
console.log(addition(2));

// 4)Write a function that converts hours into seconds.
function houSec(b) {
  return b * 60 * 60;
}

console.log(houSec(2));

// reusability
console.log(houSec(10));
console.log(houSec(24));

// 5)Return the First Element in an Array
function getFirstValue(arr) {
  return arr[0];
}

console.log(getFirstValue([1, 2, 3]));

// reusability
console.log(getFirstValue([80, 5, 100]));
console.log(getFirstValue([-500, 0, 50]));

// 6)Is the String Empty?
function isEmpty(a) {
    // Ternary Operator
    const result = (a.length === 0) ? 'true' : 'false';
    return result;
}
console.log(isEmpty(""));

// reusability
console.log(isEmpty(" "));
console.log(isEmpty("a"));

// 7)Less Than 100?
function lessThan100(a, b) {
  // Declared
  let result;

  if (a + b < 100) {
    //Assigned
    result = true;
  } else {
    // Assigned
    result = false;
  }

  return result;
}

console.log(lessThan100(22, 15));

// reusability
console.log(lessThan100(83, 34));
console.log(lessThan100(3, 77));

// 8)Using the "&&" Operator
function and(a, b) {
  return a && b;
}

console.log(and(true, false));

// reusability
console.log(and(true, true));
console.log(and(false, true));
console.log(and(false, false));

// 9)Area of a Triangle
function area(b, h) {
  return (b * h) / 2;
}

console.log(area(3, 2));

// reusability
console.log(area(7, 4));
console.log(area(10, 10));

// 10) Return Something to Me!
function giveMeSomething(str) {
  // return 'something' + ' ' + str;
  return `something ${str}`;
}

console.log(giveMeSomething("is better than nothing"));

// reusability
console.log(giveMeSomething("Bob Jane"));
console.log(giveMeSomething("something"));

// 11) Football Points
function footballPoints(a, b, c) {
  return a * 3 + b * 1 + c * 0;
}

console.log(footballPoints(3, 4, 2));

// reusability
console.log(footballPoints(5, 0, 2));
console.log(footballPoints(0, 0, 1));

// 12)The Farm Problem
function animals(a, b, c) {
  return a * 2 + b * 4 + c * 4;
}

console.log(animals(2, 3, 5));

// reusability
console.log(animals(1, 2, 3));
console.log(animals(5, 2, 8));

// 13)Equality Check
function checkEquality(a, b) {
  return a === b;
}

console.log(checkEquality(1, true));

// reusability
console.log(checkEquality(0, "0"));
console.log(checkEquality(1, 1));

// 14) Correct the Mistakes
function squared(b) {
  return b * b;
}

console.log(squared(5));

// reusability
console.log(squared(9));
console.log(squared(100));
