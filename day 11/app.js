const movies = [
  {
    id: 1,
    imgSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx_tizKnbS9Gg-FO1NGLU1R43Z9Qwjm-0Sx5IH3we9hw&s",
    title: "LOTR",
    desc: "The Lord od the Rings",
  },
  {
    id: 2,
    imgSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOZiGf80_RTs3BJwbCJkUYw1hwlsLbTYfJFBQ8KMTJ-g&s",
    title: "HP",
    desc: "Harry Potter",
  },
];

const form = document.querySelector("form");
const imgInput = document.querySelector("#image");
const titleInput = document.querySelector("#title");
const descInput = document.querySelector("#desc");
const cards = document.querySelector("#cards");

let counter = 3;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const newMovie = {
    id: counter,
    imgSrc: imgInput.value,
    title: titleInput.value,
    desc: descInput.value,
  };

  //   movies = [...movies, newMovie]
  movies.push(newMovie);

  counter++;

  cards.innerHTML = "";
  movies.map((elem) => {
    createCard(elem);
  });
});

movies.map((elem) => {
  createCard(elem);
});

function createCard(item) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.style.width = "18rem";

  const imageSec = document.createElement("img");
  imageSec.classList.add("card-img-top");
  imageSec.setAttribute("src", item.imgSrc);

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  const titleSec = document.createElement("h5");
  titleSec.classList.add("card-title");
  titleSec.innerText = item.title;

  const descSec = document.createElement("p");
  descSec.classList.add("card-text");
  descSec.innerText = item.desc;

  cardBody.append(titleSec, descSec);
  card.append(imageSec, cardBody);

  cards.appendChild(card);
}
