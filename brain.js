menuBtn = document.querySelector(".dropdown-button");
menu = document.querySelector(".dropdown-menu-div");

menuBtn.addEventListener("click", toggleMenuVisibility);

function hello() {
  console.log("works");
}

function toggleMenuVisibility() {
  menu.classList.toggle("dropdown-menu-visible");
  menu.classList.toggle("dropdown-menu");
}
