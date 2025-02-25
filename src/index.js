import "../src/styles.css";
import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadContact from "./contact.js";

// Load the homepage when the page is first loaded
loadHome();

// Nav buttons event listeners
document.querySelector("#home").addEventListener("click", loadHome);
document.querySelector("#menu").addEventListener("click", loadMenu);
document.querySelector("#contact").addEventListener("click", loadContact);
