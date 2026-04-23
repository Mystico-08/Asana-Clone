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
  const existing = document.querySelector(".mobile-submenu");
  if (existing) existing.remove();
}

function toggleMobileMega(btn, id) {
  
  const existing = document.querySelector(".mobile-submenu");
  if (existing) {
    const wasOpen = existing.dataset.for === id;
    existing.remove();
    if (wasOpen) return; 
  }

  const menu = document.getElementById(id);
  const submenu = document.createElement("div");
  submenu.className = "mobile-submenu";
  submenu.dataset.for = id;
  submenu.innerHTML = menu.innerHTML;

  btn.insertAdjacentElement("afterend", submenu);
}

const carousel = document.getElementById("carousel");
const nextBtn = document.getElementById("right");
const prevBtn = document.getElementById("left");

nextBtn.addEventListener("click", () => {
  carousel.scrollLeft += carousel.clientWidth;
});

prevBtn.addEventListener("click", () => {
  carousel.scrollLeft -= carousel.clientWidth;
});