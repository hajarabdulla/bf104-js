// console.log("Hello world");

// const age = prompt("Enter your age, pls");
// console.log(age);

//! Loop condition

// for (let i = 1; i <= 100; i++) {
//   let a = 9;
//   console.log(i);
// }
// console.log(a);
// console.log(i);

// for (let i = 1; i < 9; i++) {
//   console.log(i, "Hello world");
// }

//! While loop
// let i = 1;
// while (i <= 100) {
//   console.log(i);
//   i++;
// }

//! Task 1 while
// let i = 5;
// while (i <= 27) {
//   //   console.log(i, "Hello world");
//   //   i++;

//   if (i % 2 == 0) {
//     console.log(i);
//   }
//   i++;
// }

// for (let i = 5; i <= 27; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

//! Task 2

// let sum = 0;
// for (let i = 1; i <= 10; i++) {
//   //   sum = sum + i;
//   sum += i;
// }
// console.log(sum);

//! Task 3
// let num = 54236868;

// let reversedNum = 0;

// while (num > 0) {
//   let char = num % 10; //6; 8

//   reversedNum = reversedNum * 10 + char; //80+6 = 86
//   num = parseInt(num / 10);
// }

// while (reversedNum > 0) {
//   let char = reversedNum % 10;

//   console.log(char);
//   reversedNum = parseInt(reversedNum / 10);
// }

//! Task 4
// let number = 54236868;
// let divisor = 1;

// while (number / divisor >= 10) {
//   divisor *= 10;
//   // 1000000
// }

// while (divisor >= 1) {
//   let digit = Math.floor(number / divisor);
//   console.log(digit); //5 //4

//   number %= divisor; //4236868 //236868
//   divisor /= 10; //100000
// }

//! Task 5
// let number = 54236868;
// let sum = 0;
// while (number > 0) {
//   let char = number % 10;
//   sum += char;
//   number = parseInt(number / 10);
//   console.log(char);
// }
// console.log(sum);

//! Task 6
// let number = 54236868;
// let lastNumber = number % 10;
// let secondNum = 0;

// while (number > 10) {
//   secondNum = number % 10; //4
//   number = parseInt(number / 10); //5
// }

// console.log(lastNumber + secondNum);

//! Task 7
let number = 54236868;

while (number > 0) {
  number = parseInt(number / 10);
  counter++;
}

console.log(counter);
