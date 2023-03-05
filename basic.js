// This is an in-line comment.
/* This is a multi-line comment */

// declares a variable and assigns it the number value 5.
var myNum = 5;
var newNum = 99;

// assigns value of newNum to myNum so it's 99 instead of 5.
var myNum = newNum;

// assigns a string which can be 0 characters or more
var myBlank = "";
var firstName = "Brooks";
var lastName = "Tiffany";

// let was introduced in ES6 as a way to debug, it throws an error if you try to declare it again. You can still change it's value though.
let myFirstName = "Brooks";
let myLastName = "Tiffany";
console.log(myFirstName);

// const is immutable and will not let you change it's value at all, it will throw an error
const MY_FIRST_NAME = "Brooks";
MY_FIRST_NAME = "Tiffany";