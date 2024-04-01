// console.log("Hello world");

// let, var, const

// let name = "Hajar";
// console.log(name);

// let age = 22;
// console.log(age);

//! primitive --> number, string, boolean, undefined, null, symbol, bigInt
//! non-primitive
// console.log(typeof age);
// console.log("Type of name is: ", typeof name);

// let isMarried = false;
// console.log(typeof isMarried);

// let username;
// console.log(typeof username);

// let username = null;
// console.log(typeof username);

// let a = Symbol("a");

// console.log(a);

// const name = "Hajar";
// console.log(name);

// name = "Nigar";
// console.log(name);

// number --> 5, 70; 40,7 96,3
// integer; float; double

//! camelCase; snake_case; kabab-case; PascalCase

let universityName = "BSU";
let university_name = "BSU";
// let university-name = "BSU";
// let UniversityName = "BSU";

// console.log("Hello world");

// let a = 90;
// console.log("The value of a is", a);

// let name = "Hajar";
// let age = 22;

// console.log("My name is ", name, ". I am ", age, " years old.");

// console.log(`My name is ${name}. I am ${age} years old.`);

// let price = 10;
// let VAT = 0.25;
// let total = `Total: ${price * (1 + VAT).toFixed(3)}`;
// console.log(total);

// let z = x ** y;
// console.log(z);
// console.log(x + y);

// console.log(x++);
// console.log(x);

// let x = 10;
// let y = 4;
// x = x + y;
// x /= y;
// console.log(x);

// let x = 44;
// let y = "44";
// console.log(x != y);
//! only checks for value (not the type)

// let x = 44;
// let y = "44";
// console.log(x !== y);
//! checks both value and type

// console.log(3 > 2 >= 1);
// true = 1
// false = 0

// let a = "5";
// console.log(a - 9);

// console.log(typeof ("salam" + "5"));

// let number = 185;
// // 15

// let lastNumber = number % 10;
// let firstNumber = parseInt(number / 100);

// console.log(firstNumber * 10 + lastNumber);

let a = "5";
let num = +a;
// let num = Number(a);
console.log(typeof num);

let c = 5;
console.log(c.toFixed(3));
console.log(typeof String(c));
