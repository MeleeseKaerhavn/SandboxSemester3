const names = ["Meleese", "Theresa", "Kærhavn"]; 

const firstName = names.slice(0,1);
const middleName = names.slice(1,2);
const lastName = names.slice(2, 3);

console.log("first name: " + firstName);
console.log("middle name: " + middleName);
console.log("last name: " + lastName);


// Alternative solution

const names2 = "Meleese Theresa Kærhavn";

console.log("Alt first name: " + names2.substring(0, 7));
console.log("Alt middle name: " + names2.substring(8, 15));
console.log("Alt last name: " + names2.substring(16, 23));


