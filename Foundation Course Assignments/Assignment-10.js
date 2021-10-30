// Swap Case

// We use 'for loop' to iterate on every 'character' of a 'string'.

function swapCase(str) {

    // Declared
    let sentence = '';

    for (let i = 0; i < str.length; i++) {

        if (str[i] === str[i].toUpperCase()) {


            // reassigned

            // sentence += str[i].toLowerCase();
            sentence = sentence + str[i].toLowerCase();

        } else {
            // reassigned

            // sentence += str[i].toUpperCase();
            sentence = sentence + str[i].toUpperCase();
        }

    }

    return sentence;
}

console.log(swapCase('The Quick Brown Fox'));
console.log(swapCase('DcT AcaDemY'));