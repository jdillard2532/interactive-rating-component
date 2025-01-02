const circle = document.querySelectorAll(".circle");
const btnSubmit = document.querySelector(".btnSubmit");
const select = document.querySelector(".selected");
const resultCard = document.querySelector(".result-card");
const mainCard = document.querySelector(".main-card");

circle.forEach((e) => {
  e.addEventListener("click", () => {
    for (let i = 0; i < circle.length; i++) {
      circle[i].classList.remove("active");
    }
    e.classList.add("active");
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
  for (let i = 0; i < circle.length; i++) {
    if (circle[i].classList.contains("active")) {
      select.textContent = circle[i].textContent;
    }
  }
  resultCard.style.display = "flex";
  mainCard.style.display = "none";
});
