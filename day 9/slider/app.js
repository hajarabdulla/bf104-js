// console.log(window.document);

// const a = 45;

// const title = document.getElementsByTagName("h1");
// console.log(title);

// console.log(Array.isArray(title));
// array like object

// console.log(elmir);

// const studens = document.getElementsByClassName("student");
// console.log(studens.length);

// const title = document.querySelectorAll("h1");
const students = document.querySelectorAll(".student");
// console.log(title);
// console.log(students);

// Array.from(students).forEach((item) => console.log(item));

// console.log(elmir.previousElementSibling);

// const body = document.querySelector("body");

// console.log(body.firstElementChild);

// const minaya = document.querySelector("#minaya");
// console.log(minaya.innerHTML);

// minaya.innerHTML = "<button>Xanim</button>";

const input = document.querySelector("input");
// console.log(input.value)
// console.log(input.getAttribute("name"));
// console.log(input.setAttribute("id", "firstname"));
// console.log(input.removeAttribute("type"));

// input.classList.remove("new")
// console.log(input.classList.replace("new", "hello"))
// input.style.backgroundColor="purple"

// const elmir = document.getElementById("elmir");
// elmir.style.textTransform = "uppercase";
// elmir.style.border = "1px solid red";

// const btn = document.querySelector(".btn");

// btn.addEventListener("click", () => {
//   input.classList.add("active");
// });

const images = document.querySelectorAll(".slide");
const poster = document.querySelector(".poster");

Array.from(images).map((item) => {
  item.addEventListener("click", function () {
    // const imgSrc = item.getAttribute("src");
    // poster.setAttribute("src", imgSrc);

    poster.src = item.src;
  });
});

