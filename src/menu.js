export default function loadMenu() {
  const content = document.querySelector("#content");

  // Clear existing content
  content.innerHTML = "";

  // Create elements
  const headline = document.createElement("h1");
  const description = document.createElement("p");

  // Set content
  headline.textContent = "Menu";
  description.textContent = "Here should go the menu cards or similar";

  // Append elements to the content div
  content.appendChild(headline);
  content.appendChild(description);
}
