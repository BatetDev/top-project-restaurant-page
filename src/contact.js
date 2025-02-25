export default function loadContact() {
  const content = document.querySelector("#content");

  // Clear existing content
  content.innerHTML = "";

  // Create elements
  const headline = document.createElement("h1");
  const description = document.createElement("p");

  // Set content
  headline.textContent = "Contact";
  description.textContent = "Here should go the Contact content";

  // Append elements to the content div
  content.appendChild(headline);
  content.appendChild(description);
}
