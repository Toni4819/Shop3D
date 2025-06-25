const products = [
  {
    name: "Produit 1",
    description: "Description du produit 1.",
    img: "https://via.placeholder.com/300x200",
  },
  {
    name: "Produit 2",
    description: "Description du produit 2.",
    img: "https://via.placeholder.com/300x200",
  },
  {
    name: "Produit 3",
    description: "Description du produit 3.",
    img: "https://via.placeholder.com/300x200",
  },
  {
    name: "Produit 4",
    description: "Description du produit 4.",
    img: "https://via.placeholder.com/300x200",
  },
];

function renderProducts() {
  const container = document.getElementById("productsContainer");
  container.innerHTML = products
    .map(
      (p, i) => `
    <div class="product" data-index="${i}">
      <img src="${p.img}" alt="${p.name}" />
      <h2>${p.name}</h2>
      <p>${p.description}</p>
      <button class="btn-commander">Commander</button>
    </div>
  `
    )
    .join("");
}
