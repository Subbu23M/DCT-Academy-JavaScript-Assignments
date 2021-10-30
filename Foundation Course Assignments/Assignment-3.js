// Capitalize Words

// Declare & assign
const firstName = 'subramanyam';

console.log(firstName.charAt(0).toUpperCase() + firstName.slice(1)); //'Subramanyam'

// We can use for loop to perform operations on every string in the array.

// We use split(' ') method to convert 'String' into 'array of strings';

// Declare & assign
const studentNames = 'ramu suresh mahesh paramesh';

const arrayNames = studentNames.split(' ');

console.log(arrayNames.length); //returns 4

console.log(arrayNames); //[ 'ramu', 'suresh', 'mahesh', 'paramesh' ]

arrayNames[0] = arrayNames[0].charAt(0).toUpperCase() + arrayNames[0].slice(1);
console.log(arrayNames[0]); //'Ramu'

arrayNames[1] = arrayNames[1].charAt(0).toUpperCase() + arrayNames[1].slice(1);
console.log(arrayNames[1]); //'Suresh'

arrayNames[2] = arrayNames[2].charAt(0).toUpperCase() + arrayNames[2].slice(1);
console.log(arrayNames[2]); //'Mahesh'

arrayNames[3] = arrayNames[3].charAt(0).toUpperCase() + arrayNames[3].slice(1);
console.log(arrayNames[3]); //'Paramesh'

console.log(arrayNames.join(' '));



// Solution to the Exercise

function capitalizeWords(str) {

    // Declared & assigned
    const words = str.split(' '); //split(' ') - converts 'string' into 'array of strings'.

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1)
    }

    return words.join(' '); //join(' ') - converts array of strings to string.

}

console.log(capitalizeWords('js string exercises'));

// reusability
console.log(capitalizeWords('dct academy bangalore'));

// Output

/*
Js String Exercises
Dct Academy Bangalore 
*/




// Declared & assigned
const fatherName = 'sreeramulu';
console.log(fatherName);

// String Representation

/*
    s   r   e   e   r   a   m   u   l   u
    0   1   2   3   4   5   6   7   8   9
*/

console.log(fatherName.charAt(0).toUpperCase() + fatherName.slice(1));

console.log(fatherName.slice(0, 3)); //'sre'
console.log(fatherName.slice(3)); //'eramulu'

console.log(fatherName.substr(0, 2)); //'sr'
console.log(fatherName.substr(2)); //'eeramulu'