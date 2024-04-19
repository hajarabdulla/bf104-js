// !Error handling (try, catch)

// const testFn = () => {
//   console.log("Hello world");

//   throw new Error("Error occured");
// };

// try {
//   testFn();
// } catch (err) {
//   console.log(err);
// }

// console.log("Another console");

// const testFn = () => {
//   console.log("Hello world");

//   //   throw new SyntaxError();
// };

// try {
//   loading();
//   testFn();
// } catch (err) {
//   if (err instanceof SyntaxError) {
//     console.log("Syntax Error occured");
//   } else {
//     console.log("Another error occured");
//   }
// } finally {
//   console.log("I always work");
//   //   loading()
// }

//! Event Loop
// console.log("first");

// setTimeout(() => {
//   console.log("Set time out fn 3000");
// }, 3000);

// setTimeout(() => {
//   console.log("Set time out fn 0");
// }, 0);

// const promise = new Promise((res, rej) => {
//   res("Resolved");
// });

// promise.then((val) => console.log(val));

// console.log("middle");
// console.log("End");

//! Promise
// const f = () => {
//   return setTimeout(() => {
//     return "Salam Dunya";
//   }, 3000);
// };

// const g = () => {
//   console.log(f());
// };

// g();

// const promise = new Promise((resolved, rejected) => {
//   setTimeout(() => {
//     // resolved("Eveything is ok");
//     rejected("Nothing is ok");
//   }, 3000);
// });

// promise
//   .then((val) => console.log(val))
//   .catch((err) => {
//     console.log(err);
//   });

// const server = true;
// const newPromise = new Promise((res, rej) => {
//   if (server) {
//     setTimeout(() => {
//       res("server is up");
//     }, 2000);
//   } else {
//     setTimeout(() => {
//       rej("server is down");
//     }, 2500);
//   }
// });
// newPromise.then((val) => console.log(val)).catch((err) => console.log(err));

// const f = () => {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res("Salam Dunya");
//     }, 2000);
//   });
// };

// const g = () => {
//   //   f().then((val) => console.log(val));

//   const f = () => {
//     return new Promise((res, rej) => {
//       setTimeout(() => {
//         res("Salam Dunya");
//       }, 2000);
//     });
//   };
// };

// g();

//! Promise Chain
// const promise = new Promise((resolved, rejected) => {
//   setTimeout(() => {
//     resolved("Eveything is ok");
//   }, 3000);
// });

// promise
//   .then((val) => (val += " addition val"))
//   .then((anotherVal) => (anotherVal += 42))
//   .then((finalVal) => console.log(finalVal))
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("THis is finally block");
//   });

//! Aync Await
// const f = () => {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res("Salam Dunya");
//     }, 2000);
//   });
// };

// const g = async () => {
//   try {
//     const val = await f();
//     console.log(val);
//   } catch (error) {
//     console.log(error);
//   }
// };

// g();
