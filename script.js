function toggleMenu(id) {

  const menus = document.querySelectorAll(".mega-menu");

  menus.forEach(menu => {
    if (menu.id === id) {
      menu.classList.toggle("active");
    } else {
      menu.classList.remove("active");
    }
  });

}

function openMobile() {
  document.getElementById("mobileMenu").classList.add("active");
}

function closeMobile() {
  document.getElementById("mobileMenu").classList.remove("active");
  document.getElementById("mobileContent").innerHTML = "";
}

function toggleMobileMega(id) {
  const content = document.getElementById("mobileContent");
  const menu = document.getElementById(id);
  content.innerHTML = menu.innerHTML;
}
