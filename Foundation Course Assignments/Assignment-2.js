// Remove Array Element

// if arr[i] === num , we should remove that matched element and returns remaining array elements.

// ` ` - ES6 Template Literals Concept for String concatenation

function removeArrayElements(arr, num) {

    for (let i = 0; i < arr.length; i++) {
        // console.log(i,num);

        if (arr[i] === num) {
            arr.splice(i, 1); //splice(index position,delete count)
        } else {
            console.log(`${num} is not present in the array.`); // console.log(num + 'is not present in the array.');
        }
    }

    return arr;

}

console.log(removeArrayElements([2, 5, 9, 6], 5));

// reusability
console.log(removeArrayElements([2, 5, 9, 6], 15));