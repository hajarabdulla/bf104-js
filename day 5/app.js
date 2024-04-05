// const word = "hello";
// console.log(word.toLowerCase());

// console.log(word.concat(" World"));

// let text1 = "     Hello World!     ";
// let text2 = text1.trim();
// console.log(text2);

// let text = "Microsoft, Please visit Microsoft!";
// let newText = text.replaceAll("Microsoft", "W3Schools");
// console.log(newText);

// let words = "Banana Apple Fig";
// console.log(words.split(" "));

// for (let i = 0; i <= 10000000000000; i++) {
//   if (i === 10000000000000) {
//     console.log("hello");
//   }
// }

// let n = 34;
// let m = 200;

// for (let i = n; i <= m; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// const arr = [
//   [3, 4],
//   [7, 9],
// ];

// for (let i = 0; i < arr.length; i++) {
// arr[i] // [3,4]

//   for (let j = 0; j < arr[i].length; j++) {
//     arr[i][j];
//   }
// }

// console.log(a);

//! -------------------------------------let , var -------------------------
// var b;
// console.log(b); //undefined
// console.log(a); //error

// let a = 5;
// var b = 6;

// console.log(b); //6

//! let, const - hoistingi support etmir
//! var hoisting-i support edir

// let a = 6;
// var b = 7;

// console.log(window);
// console.log(window.a);
// console.log(window.b);

//! let, const - local scope or block scope
//! var - function scope

//! Task 1

// if (5 === 5) {
//   let b = 12;
//   var a = 5;
// }

// console.log(a); //5
// console.log(b); //error

//! Task 2
// var x = 1;
// {
//   var x = 2;
//   console.log(x); //2
// }
// console.log(x); //2

//! Task 3
// let x = 1;
// {
//   let x = 2;
//   console.log(x); //2
// }
// console.log(x); //1

// document.write("hello world");

//! Task 4
// var y = 1;
// {
//   var y = 2;
//   console.log(y);
// }
// console.log(y);

//! Task 5

// var a = 1;
// var b = 2;

// {
//   var a = 11;
//   let b = 22;

//   console.log(a); //11
//   console.log(b); //22
// }
// console.log(a); //11
// console.log(b); //2

//! Task 6
for (var i = 0; i <= 4; i++) {
  console.log(i); //0; //1; //2 //3 //4
}

console.log(i);

//! Almaz --> 4 / 4
//! Gizilgul --> 4 / undefied
//! Nurane; Elmir --> 0,1,2,3,4 / 5s
//! Aynur --> 0,1,2,3,4 / 4
//! Aynur --> 0,1,2,3,4 / 0,1,2,3,4
