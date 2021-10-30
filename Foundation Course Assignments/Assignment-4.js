// Delete property

// Declared & assigned
const student = {
    'name': 'David',
    'sclass': 'VII',
    'rollno': 12
}

console.log(student); //{ name: 'David', sclass: 'VII', rollno: 12 }

/* 
    hasOwnProperty() - returns Boolean value whether particular key || prop || label present in the object or not.
*/

function deleteProperty(obj, prop) {

    // Declare & assigned
    const propiSPresent = obj.hasOwnProperty(prop);
    console.log(propiSPresent); //returns Boolean value

    if (propiSPresent === true) {

        delete obj[prop];
        return obj;
    } else {
        return `${prop} is not present in the object`
    }

}

console.log(deleteProperty(student, 'sclass'));
console.log(deleteProperty(student, 'age'));

/* Output
    true
    { name: 'David', rollno: 12 }
    false
    age is not present in the object
*/