const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu-navegacion");

console.log(".hamburger");
console.log(".menu");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("spread");
});
