let menu = document.getElementById("menu");
let nav = document.getElementById("nav");
let cross = document.getElementById("cross");

menu.addEventListener("click", () => {
  nav.classList.remove("nav-d-none");
});

cross.addEventListener("click", () => {
  nav.classList.add("nav-d-none");
});

let cardHiddenSec1 = document.getElementById("card-hidden1");
let cardHiddenSec2 = document.getElementById("card-hidden2");
let cardHiddenSec3 = document.getElementById("card-hidden3");
let cardHiddenSec4 = document.getElementById("card-hidden4");
let cardHiddenSec5 = document.getElementById("card-hidden5");
let cardHiddenSec6 = document.getElementById("card-hidden6");
let cardHiddenSec7 = document.getElementById("card-hidden7");

let cardDropDown1 = document.getElementById("card-bottom1");
let cardDropDown2 = document.getElementById("card-bottom2");
let cardDropDown3 = document.getElementById("card-bottom3");
let cardDropDown4 = document.getElementById("card-bottom4");
let cardDropDown5 = document.getElementById("card-bottom5");
let cardDropDown6 = document.getElementById("card-bottom6");
let cardDropDown7 = document.getElementById("card-bottom7");

cardDropDown1.addEventListener("click", () => {
  if (cardHiddenSec1.dataset.cardopen === "false") {
    cardHiddenSec1.classList.add("card-hidden-section-anim");
    cardHiddenSec1.dataset.cardopen = "true";
    cardDropDown1.classList.add("flip-vertical");
  } else {
    cardHiddenSec1.classList.remove("card-hidden-section-anim");
    cardHiddenSec1.dataset.cardopen = "false";
    cardDropDown1.classList.remove("flip-vertical");
  }
});

cardDropDown2.addEventListener("click", () => {
  if (cardHiddenSec2.dataset.cardopen === "false") {
    cardHiddenSec2.classList.add("card-hidden-section-anim");
    cardHiddenSec2.dataset.cardopen = "true";
    cardDropDown2.classList.add("flip-vertical");
  } else {
    cardHiddenSec2.classList.remove("card-hidden-section-anim");
    cardHiddenSec2.dataset.cardopen = "false";
    cardDropDown2.classList.remove("flip-vertical");
  }
});

cardDropDown3.addEventListener("click", () => {
  if (cardHiddenSec3.dataset.cardopen === "false") {
    cardHiddenSec3.classList.add("card-hidden-section-anim");
    cardHiddenSec3.dataset.cardopen = "true";
    cardDropDown3.classList.add("flip-vertical");
  } else {
    cardHiddenSec3.classList.remove("card-hidden-section-anim");
    cardHiddenSec3.dataset.cardopen = "false";
    cardDropDown3.classList.remove("flip-vertical");
  }
});

cardDropDown4.addEventListener("click", () => {
  if (cardHiddenSec4.dataset.cardopen === "false") {
    cardHiddenSec4.classList.add("card-hidden-section-anim");
    cardHiddenSec4.dataset.cardopen = "true";
    cardDropDown4.classList.add("flip-vertical");
  } else {
    cardHiddenSec4.classList.remove("card-hidden-section-anim");
    cardHiddenSec4.dataset.cardopen = "false";
    cardDropDown4.classList.remove("flip-vertical");
  }
});

cardDropDown5.addEventListener("click", () => {
  if (cardHiddenSec5.dataset.cardopen === "false") {
    cardHiddenSec5.classList.add("card-hidden-section-anim");
    cardHiddenSec5.dataset.cardopen = "true";
    cardDropDown5.classList.add("flip-vertical");
  } else {
    cardHiddenSec5.classList.remove("card-hidden-section-anim");
    cardHiddenSec5.dataset.cardopen = "false";
    cardDropDown5.classList.remove("flip-vertical");
  }
});

cardDropDown6.addEventListener("click", () => {
  if (cardHiddenSec6.dataset.cardopen === "false") {
    cardHiddenSec6.classList.add("card-hidden-section-anim");
    cardHiddenSec6.dataset.cardopen = "true";
    cardDropDown6.classList.add("flip-vertical");
  } else {
    cardHiddenSec6.classList.remove("card-hidden-section-anim");
    cardHiddenSec6.dataset.cardopen = "false";
    cardDropDown6.classList.remove("flip-vertical");
  }
});

cardDropDown7.addEventListener("click", () => {
  if (cardHiddenSec7.dataset.cardopen === "false") {
    cardHiddenSec7.classList.add("card-hidden-section-anim");
    cardHiddenSec7.dataset.cardopen = "true";
    cardDropDown7.classList.add("flip-vertical");
  } else {
    cardHiddenSec7.classList.remove("card-hidden-section-anim");
    cardHiddenSec7.dataset.cardopen = "false";
    cardDropDown7.classList.remove("flip-vertical");
  }
});
