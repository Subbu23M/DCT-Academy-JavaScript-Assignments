// Say Again

// We use for loop to repeat string number of times. 

function sayAgain(str, num) {

    // Declared
    let repeatedSentence = ' ';

    for (let i = 0; i < num; i++) {

        // reassigned

        // repeatedSentence += str;
        repeatedSentence = repeatedSentence + str;

    }

    return repeatedSentence;

}

console.log(sayAgain('hi', 4));
console.log(sayAgain('hi', 0));
console.log(sayAgain('ok', 6));