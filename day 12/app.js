// localStorage.setItem("username", "Hajar");
// localStorage.setItem("age", "22");
// document.write(localStorage.getItem("username"));

// localStorage.removeItem("username");
// localStorage.clear()

// {
//     username: "Hajar"
// }

const obj = {
  name: "Hajar",
  age: 22,
  nickname: "Heci",
};

localStorage.setItem("user", JSON.stringify(obj));

const arr = [4, 6, 8];

localStorage.setItem("Numarray", JSON.stringify(arr));
console.log(JSON.parse(localStorage.getItem("Numarray")));

console.log(JSON.parse(localStorage.getItem("user")));
