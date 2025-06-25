const products = [
  {
    name: "Casque VR 3D",
    description: "Casque VR confortable pour une immersion totale.",
    image: "https://via.placeholder.com/300x200?text=Casque+VR",
  },
  {
    name: "Imprimante 3D",
    description: "Imprimante 3D de haute précision pour vos projets.",
    image: "https://via.placeholder.com/300x200?text=Imprimante+3D",
  },
  {
    name: "Stylo 3D",
    description: "Stylo pour dessiner en 3D avec facilité.",
    image: "https://via.placeholder.com/300x200?text=Stylo+3D",
  },
  {
    name: "Scanner 3D",
    description: "Scanner portable pour créer des modèles 3D.",
    image: "https://via.placeholder.com/300x200?text=Scanner+3D",
  },
];

function displayProducts() {
  const container = document.getElementById("products");
  container.innerHTML = "";
  products.forEach((p) => {
    const productDiv = document.createElement("div");
    productDiv.className = "product";

    productDiv.innerHTML = `
      <img src="${p.image}" alt="${p.name}" />
      <h3>${p.name}</h3>
      <p>${p.description}</p>
      <button class="order-btn" data-product="${p.name}">Commander</button>
    `;

    container.appendChild(productDiv);
  });
}

window.onload = displayProducts;
