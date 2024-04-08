let students = [
  {
    id: 1,
    name: "Nurane",
    surname: "Ismayilzade",
    age: 21,
    hobbies: ["music", "walking", "watchingfilm"],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
      { id: 3, name: "cavid" },
      { id: 4, name: "alisa" },
    ],
    loginDetail: { username: "nurana21", password: "nunu123" },
    gender: "girl",
    boyfriendGirlfriend: false,
    fail: false,
    avgPoint: 88,
    salaryAZN: 144,
    university: "BDU",
  },
  {
    id: 2,
    name: "Gizilgul",
    surname: "Allahverdiyeva",
    age: 20,
    hobbies: ["book", "writing code"],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
      { id: 3, name: "babaxan" },
      { id: 4, name: "gulshen" },
    ],
    loginDetail: { username: "allahverdieva1", password: "salam123" },
    gender: "girl",
    boyfriendGirlfriend: true,
    fail: false,
    avgPoint: 70,
    salaryAZN: 100,
    university: "BDU",
  },
  {
    id: 3,
    name: "Xanim",
    surname: "Nuriyeva",
    age: 21,
    hobbies: ["book", "music"],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
      { id: 3, name: "hikmet" },
      { id: 4, name: "gulsen" },
    ],
    loginDetail: { username: "xanim123", password: "salamBaku" },
    gender: "girl",
    boyfriendGirlfriend: false,
    fail: false,
    avgPoint: 80,
    salaryAZN: 145,
    university: "BDU",
  },
  {
    id: 4,
    name: "Minaya",
    surname: "Binnetova",
    age: 21,
    hobbies: ["book", "gaming", "movie", "music"],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
      { id: 3, name: "anar" },
    ],
    loginDetail: { username: "binnetova", password: "hello123" },
    gender: "girl",
    boyfriendGirlfriend: false,
    fail: false,
    avgPoint: 90,
    salaryAZN: 142,
    university: "BDU",
  },
  {
    id: 5,
    name: "Sabina",
    surname: "Hatamli",
    age: 21,
    hobbies: ["shopping", "listen to music"],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
      { id: 3, name: "Mirvari" },
    ],
    loginDetail: { username: "sebine123", password: "salam123" },
    gender: "girl",
    boyfriendGirlfriend: true,
    fail: false,
    avgPoint: 81,
    salaryAZN: 146,
    university: "BDU",
  },

  {
    id: 6,
    name: "Ləman",
    surname: "Şamilova",
    age: 20,
    hobbies: [
      "watching movies",
      "reading books",
      "painting",
      " walking",
      " listen to music",
    ],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
    ],
    loginDetail: { username: "lemanshamilova", password: "salamBaku" },
    gender: "girl",
    boyfriendGirlfriend: false,
    fail: false,
    avgPoint: 85.8,
    salaryAZN: 145,
    university: "BDU",
  },
  {
    id: 7,
    name: "Narmin",
    surname: "Musayeva",
    age: 21,
    hobbies: ["book", "gaming", "painting", "walking"],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
      { id: 3, name: "fidan" },
      { id: 4, name: "Irada" },
    ],
    loginDetail: {
      username: "narmin0",
      password: "narmin01",
    },
    gender: "girl",
    boyfriendGirlfriend: false,
    fail: false,
    avgPoint: 80,
    salaryAZN: 196,
    university: "BDU",
  },

  {
    id: 8,
    name: "Fatima",
    surname: "Akhundzada",
    age: 20,
    hobbies: ["drawing", "sleeping"],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
      { id: 3, name: "Valida" },
    ],
    loginDetail: { username: "aynur123", password: "salamBaku" },
    gender: "girl",
    boyfriendGirlfriend: true,
    fail: false,
    avgPoint: 76,
    salaryAZN: 100,
    university: "BDU",
  },
  {
    id: 9,
    name: "Elmir",
    surname: "Huseynov",
    age: 21,
    hobbies: ["book", "ice skating", "Tennis", "Karting"],
    student: true,
    teacher: [
      { id: 1, name: "Gurban" },
      { id: 2, name: "Hajar" },
      { id: 3, name: "Morad" },
      { id: 4, name: "Fikrat" },
    ],
    loginDetail: { username: "huseynovelmirr", password: "maxverstappen" },
    gender: "man",
    boyfriendGirlfriend: false,
    fail: true,
    avgPoint: 76,
    salaryAZN: 120,
    university: "BDU",
  },
  {
    id: 10,
    name: "Fidan",
    surname: "Rehimli",
    age: 21,
    hobbies: ["book", "gaming"],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
      { id: 3, name: "Turan" },
    ],
    loginDetail: { username: "fidan123", password: "fidanrahimli" },
    gender: "girl",
    boyfriendGirlfriend: true,
    fail: true,
    avgPoint: 75,
    salaryAZN: 98,
    university: "BDU",
  },
  {
    id: 11,
    name: "Aynur",
    surname: "Aynurova",
    age: 20,
    hobbies: ["book", "gaming"],
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
    ],
    loginDetail: { username: "aynur123", password: "salamBaku" },
    gender: "girl",
    boyfriendGirlfriend: true,
    fail: true,
    avgPoint: 81,
    salaryAZN: 120,
    university: "BDU",
  },

  {
    id: 12,
    name: "Elman",
    surname: "Muradov",
    age: 20,
    hobbies: [
      "book",
      "gaming",
      "sking",
      "wrestling",
      "swiming",
      "arguing about philosophy",
      "solving sudoku",
      "hiking",
      "walking",
    ],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
      { id: 3, name: "jale" },
      { id: 4, name: "akhmed" },
    ],
    loginDetail: { username: "elman17", password: "elman12345" },
    gender: "girl",
    boyfriendGirlfriend: false,
    fail: true,
    avgPoint: 76,
    salaryAZN: 100,
    university: "BDU",
  },
];

// const filteredArr = [];
// for (let i = 0; i < students.length; i++) {
//   console.log(students[i].hobbies);

//   for (let j = 0; j < students[i].hobbies.length; j++) {
//     if (students[i].hobbies[j] === "gaming") {
//       filteredArr.push(students[i]);
//     }
//   }
// }

// console.log(filteredArr);
//! Funtions
//! Function Declaration

// function logger() {
//   console.log("hello world");
// }

// logger();

// const filteredArr = [];
// for (let i = 0; i < students.length; i++) {
//   for (let j = 0; j < students[i].hobbies.length; j++) {
//     if (students[i].hobbies[j] === "gaming") {
//       filteredArr.push(students[i]);
//     }
//   }
// }

// console.log(filteredArr);
// logger();

// let a = 7;
// let b = 9;

// let c = 15;
// let d = 11;

// function sumOfNumbers(firstNumber, secondNumber) {
//   console.log(firstNumber + secondNumber);
// }

// sumOfNumbers(a, b);
// sumOfNumbers(70, 52);

// const totalQuestions = 60;
// const correctAnswers = 7;

// function findPercentage(total = 50, correct = 8) {
//   console.log(Math.round((correct / total) * 100));
// }

// findPercentage(90);

//! Maht.ceil
//! Maht.floor
//! Maht.round

// function calculation(firstNumber, secondNumber, operator = "subtraction") {
//   if (operator == "multiplication") {
//     console.log(firstNumber * secondNumber);
//   } else if (operator == "division") {
//     console.log(firstNumber / secondNumber);
//   } else if (operator == "addition") {
//     console.log(firstNumber + secondNumber);
//   } else if (operator === "subtraction") {
//     console.log(firstNumber - secondNumber);
//   } else {
//     console.log("Please enter correct operator");
//   }
// }

// calculation(50, 25, "addition");
// calculation(50, 25, "division");
// calculation(50, 25);

// const sumFn = sumOfNumbers(88, 12);
// console.log(sumFn * 6);

// function sumOfNumbers(firstNumber = 7, secondNumber = 7) {
//   return firstNumber + secondNumber;
// }

// console.log(typeof sumOfNumbers);

// console.log(sumOfNumbers(70, 20));

//! Function declaration hoisting-i support edir

//! Function expression
// const sumOfNumbers = function () {
//   console.log("Smth");
// };

// sumOfNumbers();

//! Arrow function
// const sumOfNumbers = (num1, num2) => {
//   return num1 * num2;
// };

// console.log(sumOfNumbers(7, 8));
// var sumOfNumbers = (num1) => num1 * 8;

// const someFn = (num1) => {
//   return num1 * 5;
// };

// const makeUpperCase = (arr) => {
//   const filtered = [];

//   for (let i = 0; i < arr.length; i++) {
//     filtered.push(arr[i].name.toUpperCase());
//   }

//   return filtered;
// };

// console.log();
// document.writeln(makeUpperCase(students));
// console.log(makeUpperCase(obj1));
// console.log(makeUpperCase(obj2));

//! This

// function test() {
//   var c = "smth";
// }

// console.log(c);

// console.log(this);

// function test() {
//   console.log(this);
// }

// const test2 = () => {
//   console.log(this);
// };

// test();
// test2();

// const obj = {
//   name: "Hajar",
//   age: 21,
//   sayHi: function () {
//     console.log("hello", this.name);
//   },

//   sayHello: () => {
//     console.log("hello", this.name);
//   },
// };

// obj.sayHi();
// obj.sayHello();

// const Car = {
//   brand: "BMW",
//   wheels: 4,
//   colors: ["black", "red", "blue", "white"],

//   getColors: function () {
//     const test = () =>   {
//       for (let i = 0; i < this.colors.length; i++) {
//         console.log(this.colors[i]);
//       }
//     };

//     test();
//   },
// };

// Car.getColors();

