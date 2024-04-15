
const images = document.querySelectorAll(".slide");
const poster = document.querySelector(".poster");

Array.from(images).map((item) => {
  item.addEventListener("click", function () {
    // const imgSrc = item.getAttribute("src");
    // poster.setAttribute("src", imgSrc);

    poster.src = item.src;
  });
});

