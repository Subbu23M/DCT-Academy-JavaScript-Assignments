// Find keys of an object.

// We use for....in loop to iterate on every element of the object.

function keys(obj) {

    // Declared & assigned
    let arr = [];

    for (const key in obj) {
        // reassigned
        arr.push(key);
    }

    return arr;

}


console.log(keys({
    a: 1,
    b: 2,
    c: 3
}));
console.log(keys({
    first: 'Matt',
    last: 'Lane'
}));
console.log(keys({}));