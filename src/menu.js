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
    // STARTERS
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
        {
          name: "Chest of Clams Chowder",
          description: "Creamy clam chowder served in a sourdough bread bowl.",
          price: "$9",
        },
        {
          name: "Pirate’s Pickle Platter",
          description:
            "A hearty mix of pickled vegetables, olives, and smoked fish.",
          price: "$12",
        },
      ],
    },
    // MAIN COURSE
    {
      title: "Main Course: Swashbucklin’ Feasts",
      items: [
        {
          name: "Captain’s Catch of the Day",
          description:
            "Freshly grilled or blackened fish with lemon butter and seasonal sides.",
          price: "$18",
        },
        {
          name: "Buccaneer’s BBQ Ribs",
          description:
            "Slow-cooked, fall-off-the-bone ribs slathered in smoky pirate spice glaze.",
          price: "$22",
        },
        {
          name: "Treasure Chest Tacos",
          description:
            "Soft tortillas filled with spiced chicken, shrimp, or pulled pork, topped with mango salsa.",
          price: "$16",
        },
        {
          name: "Sea Witch Surf ‘n’ Turf",
          description:
            "Grilled steak and lobster tail served with garlic mashed potatoes and roasted veggies.",
          price: "$32",
        },
        {
          name: "Siren’s Veggie Delight",
          description:
            "A hearty veggie burger with avocado, caramelized onions, and sweet potato fries.",
          price: "$14",
        },
      ],
    },
    // SIDES
    {
      title: "Sides: Cannonball Companions",
      items: [
        {
          name: "Shipwreck Fries",
          description: "Thick-cut fries tossed in sea salt and herbs.",
          price: "$5",
        },
        {
          name: "Davy Jones’ Corn on the Cob",
          description: "Grilled corn brushed with chili-lime butter.",
          price: "$6",
        },
        {
          name: "Booty Beans",
          description: "Spicy baked beans with a hint of molasses and bacon.",
          price: "$7",
        },
        {
          name: "Golden Grits",
          description: "Creamy cheddar grits with a crispy breadcrumb topping.",
          price: "$6",
        },
      ],
    },
    // DESSERTS
    {
      title: "Desserts: Sweet Spoils",
      items: [
        {
          name: "Gold Doubloon Cheesecake",
          description:
            "Rich cheesecake drizzled with caramel and chocolate coins.",
          price: "$9",
        },
        {
          name: "Treasure Island Brownie",
          description:
            "Warm brownie topped with vanilla ice cream and chocolate ganache.",
          price: "$8",
        },
        {
          name: "Parrot’s Paradise Pie",
          description: "Key lime pie with a buttery graham cracker crust.",
          price: "$10",
        },
        {
          name: "Mermaid’s Kiss Cupcakes",
          description: "Vanilla cupcakes with blue frosting and edible pearls.",
          price: "$7",
        },
      ],
    },
    // DRINKS
    {
      title: "Drinks: Tankards & Tonics",
      items: [
        {
          name: "Blackbeard’s Rum Punch",
          description: "A tropical blend of rum, fruit juices, and grenadine.",
          price: "$12",
        },
        {
          name: "Sailor’s Sangria",
          description:
            "Red wine mixed with fresh fruits and a splash of brandy.",
          price: "$14",
        },
        {
          name: "Dead Man’s Grog",
          description: "Dark rum with cola, lime, and a hint of cinnamon.",
          price: "$10",
        },
        {
          name: "Fresh Sailor Lemonade",
          description: "Refreshing lemonade with a splash of mint and berries.",
          price: "$6",
        },
        {
          name: "Kraken’s Coffee",
          description:
            "Spiked coffee with Irish cream and a shot of rum (optional).",
          price: "$8",
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
