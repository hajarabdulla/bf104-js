// const body = document.querySelector("body");
// const input = document.querySelector("input");
// const btn = document.createElement("button");
// btn.innerText = "Click me";
// const title = document.createElement("h3");
// title.innerText = "New Title";

// // body.appendChild(btn);
// body.append(btn, title);

// btn.addEventListener("click", (event) => {
//   console.log(event.target.innerText);
// });

// title.addEventListener("click", (e) => {
//   console.log(e);
// });

// input.addEventListener("input", (e) => {
//   console.log(e.target.value);
// });

// body.addEventListener("afterprint", () => {
//   alert("");
// });

// function clickBtn() {
//   console.log("Salam");
// }

// const btn = document.querySelector("button");
const form = document.querySelector("form");
const input = document.querySelector("input");

// btn.addEventListener("click", () => {
//   console.log(input.value);
// });

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(input.value);
});

let colorStep = 0;

window.addEventListener("keydown", (e) => {
  const body = document.querySelector("body");
  body.style.background = "red";

  console.log(e.which);

  if (e.which == 38) {
    colorStep += 0.1;
  } else if (e.which == 40) {
    colorStep -= 0.1;
  }
  body.style.background = `rgba(238, 120, 210, ${colorStep})`;
});

// window.addEventListener("keyup", () => {
//   const body = document.querySelector("body");
//   body.style.background = "green";
// });

const sofa = document.querySelector(".sofa");
const colorInput = document.querySelector(".colorInput");

console.log(colorInput);

colorInput.addEventListener("input", () => {
  sofa.style.fill = colorInput.value;
});
