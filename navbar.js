const togglebtn = document.querySelector(".navbar_btn");
const menu = document.querySelector(".navbar_menu");
togglebtn.addEventListener("click", () => {
  menu.classList.toggle("active");
});
