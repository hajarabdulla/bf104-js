// const getProducts = () => {
//   const promise = fetch("https://fakestoreapi.com/products/");

//   promise.then((val) => val.json()).then((data) => console.log(data));
// };

// getProducts();

const cards = document.querySelector(".cards");

const fetchProducts = async () => {
  const promise = await fetch("https://fakestoreapi.com/products/");
  const data = await promise.json();

  console.log(data);
  return data;
};

fetchProducts().then((data) => {
  data.map((item) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.style.width = "18rem";
    card.id = item.id;

    const imageSec = document.createElement("img");
    imageSec.classList.add("card-img-top");
    imageSec.setAttribute("src", item.image);

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    const titleSec = document.createElement("h5");
    titleSec.classList.add("card-title");
    titleSec.innerText = item.title;

    const descSec = document.createElement("p");
    descSec.classList.add("card-text");
    descSec.innerText = item.price;

    const addToBasket = document.createElement("button");
    addToBasket.classList.add("btn");
    addToBasket.classList.add("btn-success");
    addToBasket.classList.add("m-3");
    addToBasket.innerText = "Add to Basket";

    cardBody.append(titleSec, descSec);
    card.append(imageSec, cardBody, addToBasket);

    cards.appendChild(card);
  });
});

// fetchProducts();

// console.log(data);

const form = document.querySelector("form");
const titleInput = document.querySelector("#title");
const priceInput = document.querySelector("#price");
const deleteBtn = document.querySelector("#deleteBtn");

form.addEventListener("click", async (e) => {
  e.preventDefault();
  const obj = {
    title: titleInput.value,
    price: +priceInput.value,
    description: "Desc",
    category: "category",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  };

  const newData = await fetch("https://fakestoreapi.com/products/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(obj),
  });

  return newData;
});

deleteBtn.addEventListener("click", async () => {
  const deletedData = await fetch("https://fakestoreapi.com/products/1", {
    method: "DELETE",
  });

  return deletedData;
});
