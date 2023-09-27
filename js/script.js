/////////////////////
// Header Navigation

const input = document.querySelector(".header__mblnav--input");
const headernav = document.querySelector(".header__nav");

// Mobile Navigation Button
input.addEventListener("change", function (e) {
  headernav.classList.toggle("active");
});

const nav = document.querySelector(".header__nav");
const pages = document.querySelectorAll("[data-page]");

nav.addEventListener("click", function (e) {
  const btn = e.target.closest(".header__nav--link")?.innerHTML.toLowerCase();
  if (!btn) return;

  for (let i = 0; i < pages.length; i++) {
    if (pages[i].dataset.page == btn) {
      pages[i].classList.add("active");
      headernav.classList.toggle("active");
      input.checked = false;
    } else {
      pages[i].classList.remove("active");
    }
  }
});

//////////////////////////////
// Portfolio Filter Navigation

const filterBtn = document.querySelectorAll("[data-filter-btn]");
const projects = document.querySelectorAll("[data-category]");

document.querySelector(".filter__list").addEventListener("click", function (e) {
  const filterBtn = e.target.closest("[data-filter-btn]")?.innerHTML.toLowerCase();
  if (!filterBtn) return;

  for (let i = 0; i < projects.length; i++) {
    if (projects[i].dataset.category.toLowerCase() === filterBtn) {
      projects[i].classList.add("active");
    } else if ("all" === filterBtn) {
      projects[i].classList.add("active");
    } else {
      projects[i].classList.remove("active");
    }
  }
});

///////////////////////
// Light - Dark Mode

// const clricon = document.querySelector(".header__clrbtn--icon");
// clricon.addEventListener("click", function (e) {
//   clricon.name = "moon-outline";
// });
