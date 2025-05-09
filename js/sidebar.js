// add hovered class to selected list item
let list = document.querySelectorAll(".navigation li");

function activeLink() {
  list.forEach((item) => {
    item.classList.remove("hovered");
  });
  this.classList.add("hovered");
}

list.forEach((item) => item.addEventListener("mouseover", activeLink));

// Menu Toggle
let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");

toggle.onclick = function () {
  navigation.classList.toggle("active");
  main.classList.toggle("active");
};

const currentPage = window.location.pathname.split("/").pop();
  const navItems = document.querySelectorAll(".navigation ul li");

  navItems.forEach(li => {
    const link = li.querySelector("a");
    if (link && link.getAttribute("href") === currentPage) {
      li.classList.add("hovered");
    }
  });


