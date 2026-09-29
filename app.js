
// ================================
// WesTechstore - app.js
// ================================

const products = [
  {
    name: "AI Smart Glasses",
    description: "Connected glasses for calls, media and AI assistance.",
    price: 129,
    icon: "👓"
  },
  {
    name: "Smart Translation Watch",
    description: "Wearable access to translation and everyday smart tools.",
    price: 79,
    icon: "⌚"
  },
  {
    name: "WES Translator App",
    description: "Multilingual AI voice translation for everyday communication.",
    price: 19,
    icon: "🌐"
  },
  {
    name: "AI Starter Course",
    description: "Practical lessons for learning useful AI tools.",
    price: 25,
    icon: "🎓"
  }
];

let cartCount = 0;

document.addEventListener("DOMContentLoaded", () => {

  // PRODUCT CATALOG
  const productGrid = document.querySelector("#productGrid");
  const cartCountElement = document.querySelector("#cartCount");

  if (productGrid) {
    products.forEach((product) => {
      const card = document.createElement("article");
      card.className = "product-card";

      card.innerHTML = `
        <div class="product-icon" aria-hidden="true">${product.icon}</div>
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <p class="price">£${product.price.toFixed(2)}</p>
        <button class="add-button" type="button">
          Add to cart
        </button>
      `;

      const button = card.querySelector(".add-button");

      button.addEventListener("click", () => {
        cartCount += 1;

        if (cartCountElement) {
          cartCountElement.textContent = cartCount;
        }

        button.textContent = "Added ✓";

        setTimeout(() => {
          button.textContent = "Add to cart";
        }, 900);
      });

      productGrid.appendChild(card);
    });
  }

  // CURRENT YEAR
  const yearElement = document.querySelector("#year");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // CART
  const cartButton = document.querySelector("#cartButton");

  if (cartButton) {
    cartButton.addEventListener("click", () => {
      if (cartCount > 0) {
        alert(`Your cart contains ${cartCount} item(s).`);
      } else {
        alert("Your cart is empty.");
      }
    });
  }

  // LANGUAGE TOGGLE
  const languageToggle = document.querySelector("#languageToggle");

  if (languageToggle) {
    languageToggle.addEventListener("click", () => {
      const currentLanguage =
        document.documentElement.getAttribute("lang") || "en";

      if (currentLanguage === "en") {
        document.documentElement.setAttribute("lang", "pl");
        languageToggle.textContent = "EN";
      } else {
        document.documentElement.setAttribute("lang", "en");
        languageToggle.textContent = "PL";
      }
    });
  }

});

// ================================
// AI COURSE LESSON
// ================================

function openLesson() {
  alert(
    "WesTechstore AI Learning — lessons and courses are being prepared."
  );
}

// ================================
// WHATSAPP AI SETUP BOOKING
// ================================

function bookAISetup() {
  const phoneNumber = "";

  const message = encodeURIComponent(
    "Hello WesTechstore. I would like to book AI setup assistance for £19."
  );

  if (!phoneNumber) {
    alert(
      "WhatsApp booking is ready. Add the WesTechstore WhatsApp Business number to app.js before launch."
    );
    return;
  }

  window.open(
    `https://wa.me/${phoneNumber}?text=${message}`,
    "_blank",
    "noopener,noreferrer"
  );
}

