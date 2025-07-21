console.log("Vineet Arora");

// --------------------------------
// ** let, const, & var keywords **
// --------------------------------

// A variable is like a container that stores a value in the memory. When a variable is declared, a space is reseved in the memory to store the value.

// Declaring a constant.
const accountId = 144553; // const cannot be changed.

// Declaring and initializing a variable.
let accountEmail = "vineet@gmail.com"; // variable values can be changed.
var accountPassword = "12345";
accountCity = "London";

let accountState;

// accountId = 242311; // assignment to constant variable is not possible.
accountEmail = "vineet@hotmail.com";
accountPassword = "Test@123";
accountCity = "Edinburgh";

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

// Note: Prefer not to use var keyword, because of issue in block scope and functional scope.

// --------------------------------
// ** Datatypes & ECMA Standards **
// --------------------------------

"use strict"; // treat all javascript code as newer version.

// Datatypes: number (2**53), bigint, string (""), boolean (true/false), null (standalone value), undefined (value is not assigned), symbol (unique: if we want to make any value unique, we use symbol)

let name = "vineet"; // string datatype
let age = 30; // number datatype
let isLoggedIn = true; // boolean datatype
let city = null; // null datatype
let state; // undefined datatype

console.log(typeof "Mercedes Benz"); // string
console.log(typeof age); // number
console.log(typeof null); // object -> It is a bug in javascript.
console.log(typeof undefined); // undefined

const id = Symbol('123'); 
console.log(id, typeof id); // Symbol(123) symbol
const anotherId = Symbol('123');
console.log(id === anotherId); // false

const bigNumber = 3323423423423422n;
console.log(typeof bigNumber); // bigint

// -------------------------
// ** Datatype Conversion **
// -------------------------

let score = "33";
console.log(score, typeof score); // 33 string

let valueInNumber = Number(score);
console.log(valueInNumber, typeof(valueInNumber)); // 33 number

let anotherScore = "45abc";
console.log(anotherScore, typeof anotherScore); // 45abc string

let anotherValueInNumber = Number(anotherScore);
console.log(anotherValueInNumber, typeof(anotherValueInNumber)); // NaN number

let initialScore = null;
console.log(initialScore, typeof initialScore); // null object

let initialValueInNumber = Number(initialScore);
console.log(initialValueInNumber, typeof initialValueInNumber); // 0 number

let booleanScore = true;
console.log(booleanScore, typeof booleanScore); // true boolean

let booleanValueInNumber = Number(booleanScore);
console.log(booleanValueInNumber, typeof booleanValueInNumber); // 1 number

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

let isSignIn = 1;
let booleanIsSignIn = Boolean(isSignIn);
console.log(booleanIsSignIn); // true

// 1 => true; 0 => false; "" => false; "paris" => true

let currentYear = 2025;
let currentYearInString = String(currentYear);
console.log(currentYearInString, typeof currentYearInString); // "2025" string

// ---------------
// ** Operators **
// ---------------

let value = 7;
let negValue = -value;
// console.log(negValue); // -7

// Arithmetic Operators
// console.log(10 + 5); // 15
// console.log(10 - 5); // 5
// console.log(10 * 5); // 50
// console.log(10 / 5); // 2
// console.log(10 % 5); // 0
// console.log(10**5); // 100000

let str1 = "hello";
let str2 = "world";
let str3 = str1 + " " + str2;
// console.log(str3); // "hello world"

// console.log("1" + 2); // "12"
// console.log(1 + "2"); // "12"
// console.log("1" + 2 + 2); // "122"
// console.log(1 + 2 + "2"); // "32"

// console.log(+true); // 1
// console.log(+false); // 0
// console.log(-true); // -1
// console.log(-false); // -0
// console.log(+""); // 0
// console.log(+"zurich"); // NaN

let gameCounter = 100;
gameCounter++;
console.log(gameCounter); // 101
++gameCounter;
console.log(gameCounter); // 102

// Post-Increment
let x = 3;
let y = x++;
console.log(`x: ${x} and y: ${y}`);

// Pre-Increment
let a = 5;
let b = ++a;
console.log(`a: ${a} and b: ${b}`);

// Comparison Operators
// console.log(10 > 5); // true
// console.log(10 < 5); // false
// console.log(10 >= 5); // true
// console.log(10 <= 5); // false
// console.log(10 == 5); // false
// console.log(10 != 5); // true
// console.log(10 !== 5); // true
// console.log(10 === 5); // false

console.log("5" > 10); // false
console.log("5" > 2); // true

console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true
// The reason is that an equality check (==) and comparison operators (>, <, >=, <=) work differently. Comparisons convert null to a number, treating it as 0. That's why null >= 0 is true and null > 0 is false.

// strict check (===): checks value as well as its datatype.
console.log("2" == 2); // true
console.log("2" === 2); // false

// -----------------------
// ** Datatypes Summary **
// -----------------------

// On the basis of how data is stored in the memory and how we can access the data from the memory, datatypes are classified into 2 types: Primitive and Non-Primitive.

// Primitive types are call by values, means that we get the copy of the data, so whatever operations we perform, we perform on the copy of the data, due to which original data is not modified.
// Primitive Types (7 types): String, Number, Boolean, null, undefined, BigInt, Symbol

// Non-Primtive or Reference types are call by reference, means the we get the reference of the memory block where data is saved, so whatever operations we perform on the data, changes the original data.
// Reference Types: Arrays, Objects, Functions

// JavaScript is dynamically typed language, that means we do not have to explicitly define the datatype when we declare and initialize a variable, it automatically detects the datatype based on the value assigned to a variable.

const cities = ["london", "zurich", "amsterdam", "dubai", "paris"]; // array

const person = {
    name: "Vineet Arora",
    designation: "Software Developer",
    department: "MS.NET",
    city: "Noida"
}; // object

const greet = function() {
    console.log("Good Morning!");
}; // function
greet();

console.log(typeof cities, typeof person, typeof greet); // object object function(function object)

// ---------------------------
// ** Stack and Heap Memory **
// ---------------------------

// There are two types of memories: Stack Memory (Primitive) and Heap Memory (Non-Primitive).


// Primitive types are stored in Stack Memory.
// Call by Value
let destination = "Sweden";
let anotherDestination = destination;
console.log(anotherDestination); // "Sweden"
anotherDestination = "Iceland";
console.log(anotherDestination, destination); // "Iceland" "Sweden"

// Reference types are stored in Heap Memory.
// Call by Reference
let flightDetails = {
    operator: "Emirates",
    plane: "Airbus A380",
    departure: "New-Delhi",
    destination: "San-Francisco"
};
let anotherFlightDetails = flightDetails;
console.log(anotherFlightDetails);
anotherFlightDetails.destination = "Milan";
console.log(anotherFlightDetails);
console.log(flightDetails);