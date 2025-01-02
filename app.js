const circle = document.querySelectorAll(".circle");
const btnSubmit = document.querySelector(".btnSubmit");
const select = document.querySelector(".selected");
const resultCard = document.querySelector(".result-card");
const mainCard = document.querySelector(".main-card");

circle.forEach((e) => {
  e.addEventListener("click", () => {
    e.classList.toggle("active");
  });
});

circle.forEach((e) => {
  e.addEventListener("mouseenter", () => {
    if (e.classList.contains("active")) {
      e.classList.remove("hover");
    } else {
      e.classList.toggle("hover");
    }
  });
});

circle.forEach((e) => {
  e.addEventListener("mouseleave", () => {
    if (e.classList.contains("active")) {
      e.classList.remove("hover");
    } else {
      e.classList.toggle("hover");
    }
  });
});

btnSubmit.addEventListener("click", () => {
  let counter = 0;
  for (let i = 0; i < circle.length; i++) {
    if (circle[i].classList.contains("active")) {
      counter++;
    }
  }
  select.textContent = counter;
  resultCard.style.display = "flex";
  mainCard.style.display = "none";
});
