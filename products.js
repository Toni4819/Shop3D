const products = [
  {
    name: "Cube Émeraude",
    image: "https://via.placeholder.com/260x180/2ecc71/ffffff?text=Cube+Émeraude",
    description: "Un cube précieux vert éclatant."
  },
  {
    name: "Bloc Obsidienne",
    image: "https://via.placeholder.com/260x180/34495e/ffffff?text=Bloc+Obsidienne",
    description: "Solide et sombre."
  },
  {
    name: "Bloc Redstone",
    image: "https://via.placeholder.com/260x180/e74c3c/ffffff?text=Bloc+Redstone",
    description: "Rouge et énergétique."
  },
  {
    name: "Cube Diamant",
    image: "https://via.placeholder.com/260x180/3498db/ffffff?text=Cube+Diamant",
    description: "Légendaire et étincelant."
  }
];

const productsContainer = document.getElementById("products");

products.forEach(product => {
  const div = document.createElement("div");
  div.className = "product";
  div.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p>${product.description}</p>
    <button onclick="openPopup('${product.name}')">Commander</button>
  `;
  productsContainer.appendChild(div);
});
