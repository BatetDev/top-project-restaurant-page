export default function loadHome() {
  const content = document.querySelector("#content");

  // Clear existing content;
  content.innerHTML = "";

  // Create elements
  const logo = document.createElement("img");
  const headline = document.createElement("h1");
  const description = document.createElement("p");

  // Set attributes and content
  logo.src = require("./assets/logo.jpg");
  logo.alt = "Restaurant Logo";
  logo.classList.add("home-logo");
  headline.textContent = "Welcome Aboard!";
  headline.classList.add("headline");
  description.textContent =
    "Arrr, we be servin' the tastiest grub this side o' the seven seas! Drop anchor and feast like a true buccaneer—yer belly’ll thank ye!";
  description.classList.add("description");

  // Append elements to the content div
  content.appendChild(logo);
  content.appendChild(headline);
  content.appendChild(description);
}
