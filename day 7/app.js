//! CallBack

//! Function -un parametr olaraq func qebul etmeyi

// const logger = (val) => {
//   console.log(val);
// };

// const doubleSize = (size) => {
//   return size * 2;
// };

// logger(doubleSize(8));

// const findSum = (num1, num2) => {
//   return num1 + num2;
// };

// const displayVal = (val) => {
//   document.write(val);
// };

// displayVal(findSum(5, 6));

const cars = ["Saab", "Volvo", "BMW"];

// const f = cars.entries();

// for (let x of f) {
//   console.log(x);
// }

cars.fill("Kiwi");

// console.log(cars);

// const myArr = [1, 2, 3, 4, 5, 6, 7, 8];
// const obj = {
//   name: "Hajar",
// };

// console.log(Array.isArray(myArr));

// console.log(Array.from(obj.name));

// const newArr = Array.of("shdj", 323, true);
// console.log(newArr);

// const name = 'Hajar'
// const name2 = 'Laman'

// const ar = [name, name2]

//! map, forEach, some, every, filter, reduce
const arr = ["Banana", "Orange", "Apple", "Mango", "Fig", "Passionfruit"];
// arr.forEach(function (i) {
//   console.log(i);
// });

// const logger = (val) => {
//   console.log(val);
// };

// arr.forEach(logger);

// const newArray = arr.forEach((item) => console.log(item.concat(" fruit")));
// const newArrayWithMap = arr.map((item) => item.concat(" fruit"));

// console.log(newArray);
// console.log(newArrayWithMap);

// const numArr = [4, 7, 3, 78, 34];
// const doubledArr = numArr.map((item) => {
//   return item * 2;
// });

// const isBigger = numArr.some((item) => item > 18);
// console.log(isBigger);

// const isBiggerwitMap = numArr.map((item) => {
//   if (item > 18) {
//     console.log(item);
//   }
// });

// const isBigger = numArr.every((item) => item > 18);
// console.log(isBigger);

// const numArr = [4, 7, 3, 78, 34];
// const newArr = numArr.filter((item) => item > 18);
// console.log(newArr);

// const students = [
//   {
//     name: "Hajar",
//     point: 800,
//   },
//   {
//     name: "Almaz",
//     point: 2000,
//   },
//   {
//     name: "Elmir",
//     point: 1810,
//   },
//   {
//     name: "Fatima",
//     point: 4541,
//   },
//   {
//     name: "Aynur",
//     point: 1230,
//   },
// ];

// const newArr = students.filter((elem) => elem.point < 1900);
// console.log(newArr);

const numArr = [4, 7, 3, 78, 34];
const sumOfDigits = numArr.reduce((sum, item) => sum + item);
console.log(sumOfDigits);

let sum = 0;
numArr.map((item) => (sum += item));
console.log(sum);
