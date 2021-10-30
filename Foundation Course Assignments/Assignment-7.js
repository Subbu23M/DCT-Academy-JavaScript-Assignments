// String from object

// We use for in loop to iterate on every property in the object.

// Object.entries() - returns array of properties

// join() - To convert 'Array' into 'String'.

function stringFromObject(obj) {

    // Declared & Assigned
    const str = [];

    for (const key in obj) {

        console.log(key); //returns all keys || properties || labels from the object

        console.log(obj[key]); //returns all values from the object

        // Declared & Assigned
        const strObj = `${key} = ${obj[key]}`;

        str.push(strObj);

    }

    return str.join(', ');
}

console.log(stringFromObject({
    'a': 1,
    'b': 2
}));

console.log(stringFromObject({
    name: 'Elie',
    job: 'Instructor',
    isCatOwner: false
}));

/*
    Object.entries(obj) 
    
    returns
    
    [ [ 'a', 1 ], [ 'b', 2 ] ]

    [
        [ 'name', 'Elie' ],
        [ 'job', 'Instructor' ],
        [ 'isCatOwner', false ]
    ]
    
*/

/*  
    Output

    Object.entries(obj).join(" ").replace(/,/g, "=");

    returns,

    a=1 b=2
    name=Elie job=Instructor isCatOwner=false
*/