// ---------------------------
// ** Strings in JavaScript **
// ---------------------------

const firstname = "vineet";
const lastname = "arora";
// const fullname = firstname + " " + lastname; // String Concatenation
const fullname = `${firstname} ${lastname}`; // Using Template Literal (Better and Modern Way)
console.log(fullname); // "vineet arora"

// Another way of declaring and initializing a string.
const gameName = new String('Grand Theft Auto VI');
console.log(gameName);
console.log(typeof gameName); // "object": String is of object type.

console.log(gameName[0]); // "G"
console.log(gameName[10]); // "t"
console.log(gameName.__proto__);
console.log(gameName.length); // 19
console.log(gameName.toUpperCase()); // "GRAND THEFT AUTO VI"
console.log(gameName.charAt(17)); // "V"
console.log(gameName.indexOf("T")); // 6

const newString = gameName.substring(0, 11);
console.log(newString); // "Grand Theft"

const slicedString = gameName.slice(-7, -1);
console.log(slicedString); // "Auto V"

const tempStringNew = "    Mercedes GWagon G63 AMG    ";
console.log(tempStringNew.trim()); // "Mercedes GWagon G63 AMG"
console.log(tempStringNew.trimStart());
console.log(tempStringNew.trimEnd());

const url = "https://tech.com/vineet%20arora";
console.log(url.replace("%20", "-")); // "https://tech.com/vineet-arora"
console.log(url.includes("tech")); // true
console.log(url.includes("space")); // false

console.log(gameName.split(" ")); // ["Grand", "Theft", "Auto", "VI"]

// -----------------------
// ** Numbers and Maths **
// -----------------------

const score = 100;
console.log(score);

const balance = new Number(25000);
console.log(balance);

console.log(balance.toString(), typeof balance.toString(), balance.toString().length); // "25000" "string" 5
console.log(balance.toFixed(2)); // 25000.00

const otherNumber = 123.8966;
console.log(otherNumber.toPrecision(3)); // 124
console.log((123.556).toPrecision(4)); // 123.6

const hundreds = 1000000;
console.log(hundreds.toLocaleString("en-In")); // 10,00,000

// Maths
console.log(Math.abs(-5)); // 5: abs() -> gives absolute value that means negative value is converted to positive value.
console.log(Math.abs(10)); // 10

console.log(Math.round(5.4)); // 5
console.log(Math.round(5.7)); // 6

console.log(Math.ceil(9.1)); // 10
console.log(Math.floor(9.9)); // 9

console.log(Math.sqrt(25)); // 5
console.log(Math.pow(5, 3)); // 125

console.log(Math.min(5, 3, 7, 8, 13, 1, 4)); // 1
console.log(Math.max(5, 3, 7, 8, 13, 1, 4)); // 13

console.log(Math.random()); // random() -> random values will come in between 0 and 1
// Now generate random values between 1 and 10.
console.log(Math.floor(Math.random() * 10) + 1); // added 1 because we have to get minimum value 1 as it can return 0.4, 0.7 etc.

const minVal = 10;
const maxVal = 50;
console.log(Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal);

// -------------------
// ** Date and Time **
// -------------------

let myDate = new Date();
console.log(myDate.toString()); // "Tue Jul 22 2025 08:57:27 GMT+0530 (India Standard Time)"
console.log(myDate.toDateString()); // "Tue Jul 22 2025"
console.log(myDate.toISOString()); // "2025-07-22T03:27:27.918Z"
console.log(myDate.toLocaleString()); // "22/7/2025, 8:57:27 am"
console.log(typeof myDate); // object

// let myCreatedDate = new Date(2025, 11, 25);
// console.log(myCreatedDate.toDateString()); // "Thu Dec 25 2025"

// let myCreatedDate = new Date(2025, 11, 25, 5, 3);
// console.log(myCreatedDate.toLocaleString()); // "25/12/2025, 5:03:00 am"

let myCreatedDate = new Date("12-25-2025");
console.log(myCreatedDate.toLocaleString()); // "25/12/2025, 12:00:00 am"
console.log(myCreatedDate.getTime()); // 1766601000000

let myTimestamp = Date.now();
console.log(myTimestamp); // 1753155441420 (this is in the format of milliseconds)

console.log(Math.floor(Date.now() / 1000)); // 1753155697 (Date in seconds)

let newDate = new Date();
console.log(newDate.getMonth() + 1); // 7 (means July)
console.log(newDate.getDay()); // 2 (means Tuesday)
console.log(newDate.toLocaleString("default", {weekday: "long"})); // "Tuesday"