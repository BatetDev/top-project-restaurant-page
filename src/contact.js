export default function loadContact() {
  const content = document.querySelector("#content");

  // Clear existing content
  content.innerHTML = "";

  const contactContainer = document.createElement("div");
  contactContainer.classList.add("contact-container");

  const title = document.createElement("h1");
  title.textContent = "Contact Ye Olde Hook & Cook";
  title.classList.add("headline");

  const contactInfo = [
    {
      icon: "⚓",
      title: "Address",
      content:
        "The Rusty Anchor Wharf, 123 Treasure Isle Lane, Port Plunder, Caribbean Seas",
    },
    {
      icon: "📞",
      title: "Phone",
      content:
        "Call us at (555) SEA-FOODS (that's 555-732-3663 for landlubbers!)",
    },
    {
      icon: "📧",
      title: "Email",
      content: "Send yer messages to captain@hookandcook.com",
    },
    {
      icon: "🕘",
      title: "Hours of Operation",
      content: "Mon - Fri: 11 AM – 10 PM || Sat - Sun: Noon – Midnight",
    },
  ];

  const contactList = document.createElement("div");
  contactList.classList.add("contact-list");

  contactInfo.forEach((info) => {
    const item = createContactItem(info);
    contactList.appendChild(item);
  });

  contactContainer.appendChild(title);
  contactContainer.appendChild(contactList);
  content.appendChild(contactContainer);
}

function createContactItem({ icon, title, content }) {
  const item = document.createElement("div");
  item.classList.add("contact-item");

  const iconSpan = document.createElement("span");
  iconSpan.textContent = icon;
  iconSpan.classList.add("contact-icon");

  const textContainer = document.createElement("div");
  textContainer.classList.add("contact-text");

  const titleElement = document.createElement("h2");
  titleElement.textContent = title;
  titleElement.classList.add("contact-title");

  const contentElement = document.createElement("p");
  contentElement.textContent = content;
  contentElement.classList.add("contact-content");

  textContainer.appendChild(titleElement);
  textContainer.appendChild(contentElement);

  item.appendChild(iconSpan);
  item.appendChild(textContainer);

  return item;
}
