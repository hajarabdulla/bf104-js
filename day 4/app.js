// let i = 0;

// do {
//   console.log(i);
// } while (i > 0);

//! Non-primitive
//! Object (Array, Object, Date, Regex, Function)

// const name = "Hajar";
// const age = 22;
// const arr = [
//   "Aynur",
//   "Fatima",
//   "Almaz",
//   "Elmir",
//   "Narmin",
//   "Minaya",
//   "Khanim",
//   "Gizilgul",
// ];

// console.log(arr[arr.length - 1]);

// console.log(typeof arr);

// console.log(arr);

// let a = ["Hajar"];
// let b = ["Hajar"];

// if (a == b) {
//   console.log("Hello world");
// }

// console.log(arr[0]);
// console.log(arr[2]);

// const arr2 = new Array(0);
// console.log(arr2);

// arr[5] = "Sabina";
// console.log(arr);

// const arr = [true, 56, "Hajar", null, undefined];

// console.log(arr.indexOf("Elmir"));

// arr.push("Fidan");
// arr.pop();
// arr.shift();
// arr.unshift("Laman");
// console.log(arr);

// const arr = [
//   "Aynur",
//   "Fatima",
//   "Almaz",
//   "Elmir",
//   "Narmin",
//   "Minaya",
//   "Khanim",
//   "Gizilgul",
// ];

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//   console.log(`${arr[i]} BDU`);
//   console.log(arr[i], "BDU");
//   console.log(arr[i].concat(" BDU"));
// }

//! Task 1
// const numArr = [3, 57, 78, 3, 56, 778];

// for (let i = 0; i < numArr.length; i++) {
//   console.log(i, arr[i]);
//   if (numArr[i] % 2 == 0) {
//     console.log(numArr[i]);
//   }
// }

//! Task 2
// const numArr = [3, 57, 78, 3, 56, 778];
// for (let i = 0; i < numArr.length; i++) {
//   if (i % 2 == 0) {
//     console.log(numArr[i]);
//   }
// }

//! Task 3
//? Herflerinin sayi 3 bolunen
// const fruits = [
//   "banana",
//   "fig",
//   "pomogranate",
//   "guava",
//   "apple",
//   "passionfruit",
//   "strawberry",
//   "kiwi",
// ];

// for (let i = 0; i < fruits.length; i++) {
//   if (fruits[i].length % 3 === 0) {
//     console.log(fruits[i]);
//   }
// }

//! Task 4
// const numArr = [3, 57, 78, 992, 3, 56, 778];
// let max = numArr[0];

// for (let i = 0; i < numArr.length; i++) {
//   if (numArr[i] > max) {
//     max = numArr[i];
//   }
// }
// console.log(max);

//! Object
// const user = {
//   name: "Sabina",
//   surname: "Hatamli",
//   isMarried: false,
//   age: 21,
//   universityName: "BSU",
//   friends: ["Nurana", "Hajar", "Gurban"],
// };

// user.isMarried = true;
// console.log(user.surname);
// console.log(user.isMarried);

// console.log(user["universityName"]);

// console.log(user["friends"]);

// console.log(user.age);
// console.log(user["age"]);

// const arr = [
//   {
//     name: "Nurana",
//     surname: "Ismayilzada",
//     friends: ["Gurban", "Sabina", "Elmir"],
//   },
//   {
//     name: "Sabina",
//     surname: "Hatamli",
//     friends: ["Nurana", "Hajar", "Gurban"],
//   },
//   {
//     name: "Khanim",
//     surname: "Nuriyeva",
//     friends: ["Gizilgul"],
//   },
//   {
//     name: "Elmir",
//     surname: "Huseynov",
//     friends: ["Almaz", "Gurban", "Minaya", "Narmin", "HAJAR"],
//   },
// ];

// console.log(arr[0]);

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i].name);
// }

const friends = ["Nurana", "Hajar", "Gurban"];
const bf104Class = ["Aynur", "Fatima", "Almaz", "Elmir"];
// console.log(typeof friends.toString());

// delete friends[0];
// console.log(friends[0]);

// const arr = friends.concat(bf104Class);
// const arr = friends.concat("Another data");
// const arr = friends.concat(["Another data", "Some data"]);

// console.log(arr);
// console.log(friends);

//! slice
// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// console.log(fruits.slice(2, 4));
// console.log(fruits.slice(3));
//! Start - end; array-i deyishmir; ancaq kesir

//! Splcie
const fruits = ["Banana", "Orange", "Apple", "Mango", "Fig", "Passionfruit"];
//! start - length; array-i deyishir; hem kesir, hem elave edir, hem kesir hem elave edir
// console.log(fruits.splice(2, 4)); //"Lemon", "Apple", "Mango", "Fig"
// console.log(fruits.slice(2, 4)); //"Lemon", "Apple",
// console.log(fruits); //['Banana', 'Orange', 'Passionfruit']

// fruits.splice(2, 0, "Lemon", "Kiwi");
// fruits.splice(2, 2, "Lemon", "Kiwi");
// console.log(fruits);
