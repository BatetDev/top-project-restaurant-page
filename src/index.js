import "../src/styles.css";
import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadContact from "./contact.js";

function initializeNavigation() {
  const homeBtn = document.querySelector("#home");
  const menuBtn = document.querySelector("#menu");
  const contactBtn = document.querySelector("#contact");

  // Set home as active by default and load home page
  homeBtn.classList.add("active");
  loadHome();

  // Add click handlers
  homeBtn.addEventListener("click", () => {
    clearActiveClasses();
    homeBtn.classList.add("active");
    loadHome();
  });

  menuBtn.addEventListener("click", () => {
    clearActiveClasses();
    menuBtn.classList.add("active");
    loadMenu();
  });

  contactBtn.addEventListener("click", () => {
    clearActiveClasses();
    contactBtn.classList.add("active");
    loadContact();
  });
}

function clearActiveClasses() {
  const buttons = document.querySelectorAll("nav button");
  buttons.forEach((btn) => btn.classList.remove("active"));
}

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", initializeNavigation);
