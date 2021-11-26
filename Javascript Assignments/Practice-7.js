// Practice Set-7 16/09/2021

// 1)Balanced Array
function balancedArray(a) {
    let firstHalfSum = 0;
    let secondtHalfSum = 0;

    const arrLength = a.length;
    // console.log(arrLength);

    const breakIndex = Math.floor(arrLength / 2);
    // console.log(breakIndex);

    // We use for...loop to iterate on every element in the array
    for (let i = 0; i < breakIndex; i++) {
        firstHalfSum = firstHalfSum + a[i];
        // console.log(firstHalfSum);
    }

    for (let i = breakIndex; i < arrLength; i++) {
        secondtHalfSum = secondtHalfSum + a[i];
        // console.log(secondtHalfSum);
    }

    const result = Math.abs(firstHalfSum - secondtHalfSum);
    return result;
}

console.log(balancedArray([1, 2, 1, 2, 1, 3]));

// reusability
console.log(balancedArray([20, 10]));

// 2)Count the Number of Occurrences
function numberOfOccurance(a, b) {
    // Declared & Assigned
    let count = 0;

    for (let i = 0; i < a.length; i++) {
        if (a[i] === b) {
            count = count + 1;
        }
    }
    return count;
}
console.log(numberOfOccurance('dct academy', 'c'));

// 3)highest occurred character in a String
function highestOccurance(a) {
    let count = 0;
    let maxCharacterOccurence = '';


    a.split('').forEach(function (char) {
        console.log(char);
        if (a.split(char).length > count) {
            count = a.split(char).length
            // console.log(count);

            maxCharacterOccurence = char;
        }
    })
    return maxCharacterOccurence;
}

console.log(highestOccurance('aaaaaaaaaaaaaaaaabbbbcddddeeeeee'));

//4) Super Hero Powers
function superPower(arr, name) {
    // Declared & Assigned
    let result = '';

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].name === name) {
            // reassign
            result = arr[i].powers.join(', ');
            break;
        } else {
            result = 'invalid result'
        }
    }
    return result;
}

const superHeroes = [{
        "name": "Molecule Man",
        "age": 29,
        "secretIdentity": "Dan Jukes",
        "powers": [
            "Radiation resistance",
            "Turning tiny",
            "Radiation blast"
        ]
    },
    {
        "name": "Madame Uppercut",
        "age": 39,
        "secretIdentity": "Jane Wilson",
        "powers": [
            "Million tonne punch",
            "Damage resistance",
            "Superhuman reflexes"
        ]
    }
]

// Declared & Assigned
const superPower1 = superPower(superHeroes, 'Molecule Man');
console.log(superPower1);

// reusability
const superPower2 = superPower(superHeroes, 'Madame Uppercut');
console.log(superPower2);

const superPower3 = superPower(superHeroes, 'Uppercut');
console.log(superPower3);

// 5)Sort an array of JavaScript objects
let library = [{
        title: 'The Road Ahead',
        author: 'Bill Gates',
        libraryID: 1254
    },

    {
        title: 'Walter Isaacson',
        author: 'Steve Jobs',
        libraryID: 4264
    },

    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        libraryID: 3245
    }
];

function sortArrayOfObjects(arr) {
    if (arr.length === 0) {
        return [];
    }

    const result = library.sort(function (a, b) {
        return b.libraryID - a.libraryID;;
    })
    return result;
}

console.log(sortArrayOfObjects(library));

// 6)Sort an array of JavaScript objects
let library = [{
        author: 'Bill Gates',
        title: 'The Road Ahead',
        libraryID: 1254,
    },

    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        libraryID: 4264,
    },

    {
        author: 'Suzanne Collins',
        title: 'Mockingjay: The Final Book of The Hunger Games',
        libraryID: 3245,
    },
];

function sortArrayOfObjects(arr) {
    if (arr.length === 0) {
        return [];
    }

    const resullt = library.sort(function (p, q) {
        let fa = p.title.toLowerCase(),
            fb = q.title.toLowerCase();

        if (fa < fb) {
            return -1;
        }
        if (fa > fb) {
            return 1;
        }
        return 0;
    })
    return resullt;

}

console.log(sortArrayOfObjects(library));

// 7)Traverse Object - Quiz
var questions = {
    quiz: {
        sport: {
            q1: {
                question: 'Which one is correct team name in NBA?',
                options: [
                    'New York Bulls',
                    'Los Angeles Kings',
                    'Golden State Warriros',
                    'Huston Rocket',
                ],
                answer: 'Huston Rocket',
            },
        },
        maths: {
            q1: {
                question: '5 + 7 = ?',
                options: ['10', '11', '12', '13'],
                answer: '12',
            },
            q2: {
                question: '12 - 8 = ?',
                options: ['1', '2', '3', '4'],
                answer: '4',
            },
        },
    },
};

function answerIndex(a, b, c) {
    // Declared & Assigned
    let result = 'invalid question';

    for (let ele in a) {
        for (let ele1 in a[ele]) {
            for (let ele2 in a[ele][ele1]) {
                if (a[ele][ele1][ele2].question === b) {
                    // reassigned
                    result = a[ele][ele1][ele2].options.indexOf(c);
                }
            }
        }
    }
    return result;
}

// 8)Write a program to find intersection of two sorted arrays 
const arr1 = [21, 34, 41, 22, 35];
const arr2 = [61, 34, 45, 21, 11];

function intersection(a, b) {
    const result = a.filter((num) => b.includes(num))
    return result;
}
console.log(intersection(arr1, arr2));

// 9)Closest Enemy
const closestEnemy = (arr) => {
    const player = [];

    const enemy = [];

    let distance = 0;

    const rowLengthh = arr[0].length;

    const board = arr.length;

    for (let i = 0; i < board; i++) {
        let row = arr[i].split('');
        let rowLength = row.length;

        for (let j = 0; j < rowLength; j++) {
            if (row[j] == 1) {
                player.push(j, i);
            } else if (row[j] == 2) {
                enemy.push(j, i);
            }
        }
    }

    const enemyLength = enemy.length;

    for (let i = 0; i < enemyLength; i += 2) {
        let newDistance = 0;

        if (Math.abs(player[0] - enemy[i]) < rowLengthh / 2) {
            newDistance = Math.abs(player[0] - enemy[i]);
        } else {
            newDistance = rowLengthh - Math.abs(player[0] - enemy[i]);
        }

        if (Math.abs(player[1] - enemy[i + 1]) < board / 2) {
            newDistance += Math.abs(player[1] - enemy[i + 1]);
        } else {
            newDistance += board - Math.abs(player[0] - enemy[i]);
        }

        if (distance == 0 || newDistance < distance) {
            distance = newDistance;
        }
    }
    return distance;
};

console.log(closestEnemy(['0000', '2010', '0000', '2002']));
console.log(closestEnemy(['0000', '1000', '0002', '0002']));
console.log(closestEnemy(['0000', '2010', '0000', '2002']));

// 10)Is it a Palindrome?
function palindrome(str) {
    // Declared & Assigned
    let revStr = '';

    if (str.length === 0) {
        return 'invalid input';
    }

    // We use for...loop to iterate on every character in the string
    for (let i = str.length - 1; i >= 0; i--) {
        // reassigned
        revStr = revStr + str[i];
    }
    // Ternary Operator
    const result = (revStr === str) ? 'true' : 'false'
    return result;
}

console.log(palindrome('madam'));

// reusability
console.log(palindrome('palindrome'));
console.log(palindrome('racecar'));
console.log(palindrome('animal'));
console.log(palindrome(''));
