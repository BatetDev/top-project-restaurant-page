export default function loadHome() {
  const content = document.querySelector("#content");

  // Clear existing content;
  content.innerHTML = "";

  // Create elements
  const image = document.createElement("img");
  const headline = document.createElement("h1");
  const description = document.createElement("p");

  // Set attributes and content
  image.src = "https://picsum.photos/200";
  image.alt = "Restaurant Image";
  headline.textContent = "Welcome to Hook & Cook!";
  description.textContent =
    "Arrr, we be servin' the tastiest grub this side o' the seven seas! Drop anchor and feast like a true buccaneer—yer belly’ll thank ye!";

  // Append elements to the content div
  content.appendChild(image);
  content.appendChild(headline);
  content.appendChild(description);
}
