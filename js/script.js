// toggle class active
const navbarNav = document.querySelector(".navbar-nav");

// ketika menu diklik
document.querySelector("#menu-kuliner").onclick = () => {
  navbarNav.classList.toggle("active");
};

//toggle kelas aktif search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// toggel class aktif shoping bag
const shoppingBag = document.querySelector(".shoping-cart");
const shoppingButton = document.querySelector("#shopping-bag-button");

shoppingButton.addEventListener("click", function (e) {
  shoppingBag.classList.toggle("active");
  e.preventDefault();
});
//klik di luar elemen
const kuliner = document.querySelector("#menu-kuliner");
const sb = document.querySelector("#search");
const sc = document.querySelector("#shopping-bag-button");
document.addEventListener("click", function (e) {
  if (!kuliner.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
  if (!sc.contains(e.target) && !shoppingBag.contains(e.target)) {
    shoppingBag.classList.remove("active");
  }
});

//view
const iDButtons = document.querySelectorAll(".item-detail-button");

iDButtons.forEach((btn) => {
  btn.onclick = (e) => {
    e.preventDefault();
    const target = document.querySelector(btn.dataset.target);
    if (target) target.style.display = "flex";
  };
});

// tutup modal saat klik ikon X
const closeButtons = document.querySelectorAll(".modal .close-icon");

closeButtons.forEach((btn) => {
  btn.onclick = (e) => {
    e.preventDefault();
    btn.closest(".modal").style.display = "none";
  };
});

// tutup modal saat klik di luar modal-container
window.onclick = function (e) {
  const modals = document.querySelectorAll(".modal");
  modals.forEach((modal) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
};

console.log("Script.js berhasil dijalankan!");
