const products = [
  { name: "AI Smart Glasses", description: "Connected glasses for calls, media and AI assistance.", price: 129, icon: "⌐◨" },
  { name: "Smart Translation Watch", description: "Wearable access to translation and everyday smart tools.", price: 79, icon: "◫" },
  { name: "WES Translator App", description: "A preview of the multilingual voice translation experience.", price: 19, icon: "◎" },
  { name: "AI Starter Course", description: "Practical lessons for beginning with useful AI tools.", price: 25, icon: "◇" }
];

let cartCount = 0;
const productGrid = document.querySelector("#productGrid");
const cartCountElement = document.querySelector("#cartCount");

products.forEach((product) => {
  const card = document.createElement("article");
  card.className = "product-card";
  card.innerHTML = `
    <div class="product-icon" aria-hidden="true">${product.icon}</div>
    <h3>${product.name}</h3>
    <p>${product.description}</p>
    <p class="price">£${product.price.toFixed(2)}</p>
    <button class="add-button" type="button">Add to cart</button>
  `;

  card.querySelector("button").addEventListener("click", (event) => {
    cartCount += 1;
    cartCountElement.textContent = cartCount;
    event.currentTarget.textContent = "Added ✓";
    setTimeout(() => { event.currentTarget.textContent = "Add to cart"; }, 900);
  });

  productGrid.appendChild(card);
});

document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#cartButton").addEventListener("click", () => {
  alert(cartCount ? `Your cart contains ${cartCount} item(s). Checkout will be added next.` : "Your cart is empty.");
});
