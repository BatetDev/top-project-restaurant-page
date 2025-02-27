export default function loadMenu() {
  const content = document.querySelector("#content");

  // Clear existing content
  content.innerHTML = "";

  // Create main menu container
  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menu-container");

  // Add menu title
  const menuTitle = document.createElement("h1");
  menuTitle.textContent = "Menu";
  menuTitle.classList.add("headline");
  menuContainer.appendChild(menuTitle);

  // Menu sections data
  const menuSections = [
    {
      title: "Starters: Booty Bites",
      items: [
        {
          name: "Plank-Walk Popcorn Shrimp",
          description:
            "Crispy fried shrimp served with a tangy cocktail sauce.",
          price: "$8",
        },
        {
          name: "Kraken Calamari",
          description:
            "Golden-fried calamari rings with a spicy arrr-omatic dipping sauce.",
          price: "$10",
        },
      ],
    },
  ];

  // Create sections
  menuSections.forEach((section) => {
    const sectionElement = createMenuSection(section);
    menuContainer.appendChild(sectionElement);
  });

  content.appendChild(menuContainer);
}

function createMenuSection(section) {
  const sectionElement = document.createElement("div");
  sectionElement.classList.add("menu-section");

  const sectionTitle = document.createElement("h2");
  sectionTitle.textContent = section.title;
  sectionTitle.classList.add("menu-section-title");
  sectionElement.appendChild(sectionTitle);

  section.items.forEach((item) => {
    const itemElement = createMenuItem(item);
    sectionElement.appendChild(itemElement);
  });

  return sectionElement;
}

function createMenuItem(item) {
  const itemElement = document.createElement("div");
  itemElement.classList.add("menu-item");

  const itemHeader = document.createElement("div");
  itemHeader.classList.add("menu-item-header");

  const name = document.createElement("h3");
  name.textContent = item.name;
  name.classList.add("menu-item-name");

  const price = document.createElement("span");
  price.textContent = item.price;
  price.classList.add("menu-item-price");

  itemHeader.appendChild(name);
  itemHeader.appendChild(price);

  const description = document.createElement("p");
  description.textContent = item.description;
  description.classList.add("menu-item-description");

  itemElement.appendChild(itemHeader);
  itemElement.appendChild(description);

  return itemElement;
}
