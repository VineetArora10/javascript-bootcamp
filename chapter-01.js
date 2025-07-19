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

// number (2**53), bigint, string (""), boolean (true/false), null (standalone value), undefined (value is not assigned), symbol (unique)

let name = "vineet"; // string datatype
let age = 30; // number datatype
let isLoggedIn = true; // boolean datatype
let city = null; // null datatype
let state; // undefined datatype

console.log(typeof "Mercedes Benz"); // string
console.log(typeof age); // number
console.log(typeof null); // object -> It is a bug in javascript.
console.log(typeof undefined); // undefined

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