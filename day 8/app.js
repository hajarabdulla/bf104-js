// const me = {
//   name: "Hajar",
//   surname: "Abdullayeva",
//   age: 22,
//   gender: false,
// };

// const properties = ["name", "surname", "age", "gender"];

// properties.forEach((item) => console.log(me[item]));

// const obj = Object.create({});
// obj.isGraduate = true;

// obj.name = "some name";
// obj.age = 221;
// console.log(obj);
// const object1 = {};

// Object.defineProperties(me, {
//   isMarried: {
//     value: false,
//     writable: true,
//   },
// });

// console.log(me);

// Object.defineProperty(me, "fatherName", {
//   value: "Vidadi",
// });

// console.log(me);

// console.log(Object.keys(me));

// Object.keys(me).forEach((item) => me[item]);

// console.log(Object.values(me));

// Object.freeze(me);
// me.name = "Nigar";
// console.log(me);

// const desc1 = Object.getOwnPropertyDescriptors(me);

// console.log(desc1.isMarried);

// const me = {
//   name: "Hajar",
//   surname: "Abdullayeva",
//   age: 22,
//   gender: false,
// };

// const a = Symbol("a");

// me[a] = "some key with Symbol";
// console.log(me);

//! Spread, deep clone
// const arr1 = [43, 56, 87, 25];
// const arr2 = [...arr1];
// const arr2 = _.clone(arr1);

// arr1[5] = 19;
// arr2[3] = 114;

// console.log(arr1);
// console.log(arr2);

// const arr1 = [43, 56, 87, 25];
// const arr2 = [1, 6, 89, 74];

// const arr3 = [...arr1, ...arr2, 77];
// console.log(arr3);

// const arr1 = [43, 56, 87, 25];
// const [a, b, ...rest] = arr1

// console.log(a);
// console.log(b);

// console.log(rest);

const me = {
  name: "Hajar",
  surname: "Abdullayeva",
  age: 22,
  gender: false,
  mySis: {
    name: "nigar",
    age: 21,
  },
};

const me2 = {
  name: "Minaya",
  surname: "Binnatova",
  age: 22,
  gender: false,
};

const { name, surname, age, gender, mySis } = me;
const { name: mySisName, age: mySisAge } = mySis;
// const { name: minayaName, surname: minayaSurbname, age, gender } = me2;
console.log(mySisName);

const me3 = { ...me, additionalParam: "This is additional" };
console.log(me3);