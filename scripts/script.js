// JavaScript Document
console.log("hi");

/*Navigatie Hamburger Menu*/

var navMenu = document.querySelector("nav div:nth-of-type(2) > img");

navMenu.addEventListener("click", openNavMenu);

function openNavMenu() {
    let moveMenu = document.querySelector("body > ol");
    moveMenu.classList.toggle("menuOpen");
    console.log("click")
}