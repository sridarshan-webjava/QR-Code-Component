const viewButton = document.querySelector("#view-btn");
const closeButton = document.querySelector("#close-btn");
const card = document.querySelector("#card");

viewButton.addEventListener("click", () => {
  card.style.transform = `translateX(0)`;
  viewButton.classList.add("-translate-x-[100vw]");
});

closeButton.addEventListener("click", () => {
  card.style.transform = `translateX(100%)`;
  viewButton.classList.remove("-translate-x-[100vw]");
});
