const form = document.querySelector("form");
const input = document.querySelector("input");
const list = document.querySelector("ul");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!input.value) return;

  const listItem = document.createElement("li");
  listItem.classList.add("list-group-item");
  listItem.classList.add("d-flex");
  listItem.classList.add("justify-content-between");
  listItem.classList.add("align-items-center");

  const p = document.createElement("p");
  p.innerText = input.value;
  p.classList.add("m-0");

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("btn");
  deleteBtn.classList.add("btn-danger");
  deleteBtn.innerText = "Delete";

  const checkBtn = document.createElement("button");
  checkBtn.classList.add("btn");
  checkBtn.classList.add("btn-success");
  checkBtn.innerText = "Checked";

  listItem.append(p, checkBtn, deleteBtn);

  list.appendChild(listItem);

  input.value = "";

  deleteBtn.addEventListener("click", function () {
    console.log(this.parentElement);
    this.parentElement.remove();
  });

  checkBtn.addEventListener("click", function () {
    console.log(this.parentElement.firstElementChild);

    this.parentElement.firstElementChild.classList.toggle(
      "text-decoration-line-through"
    );

    if (this.innerText == "Checked") {
      this.innerText = "Unchecked";
    } else {
      this.innerText = "Checked";
    }
  });
});
