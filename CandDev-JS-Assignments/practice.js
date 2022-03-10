// 1)First Reverse
function FirstReverse(str) {
    // Declared & Assigned
    let result = '';

    for (let i = str.length - 1; i >= 0; i--) {
        // reassigned
        result = result + str[i];
    }
    return result;
}
// Invoke the function
console.log(FirstReverse('coderbyte'));

// reusability
console.log(FirstReverse('Hello World and Coders'));
console.log(FirstReverse('I Love Code'));

// 2)First Factorial
function FirstFactorial(num) {
    if (num === 0 || num === 1) {
        // reassigned
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
console.log(FirstFactorial(4));
console.log(FirstFactorial(8));

// 3)Longest Word
function LongestWord(sen) {
    const wordSplit = sen.split(' ');
    // console.log(wordSplit);

    let result = '';

    for (let word of wordSplit) {
        if (word.length > result.length) {
            result = word;
        }
    }
    return result;
}
console.log(LongestWord("fun &!! time"));
console.log(LongestWord("I love dogs"));

// 4)Find Intersection
function FindIntersection(a, b) {
    const result = a.filter((ele) => b.includes(ele));
    return result;
}
const inputOne = [1, 3, 4, 7, 13]
const inputTwo = [1, 2, 4, 13, 15];
const inputThree = [1, 3, 9, 10, 17];
const inputFour = [18, 1, 4, 9, 10];

console.log(FindIntersection(inputOne, inputTwo));
console.log(FindIntersection(inputThree, inputFour));