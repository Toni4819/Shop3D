const produits = [
  { nom: "Produit 1", description: "Description produit 1", image: "https://via.placeholder.com/400x300" },
  { nom: "Produit 2", description: "Description produit 2", image: "https://via.placeholder.com/400x300" },
  { nom: "Produit 3", description: "Description produit 3", image: "https://via.placeholder.com/400x300" },
  { nom: "Produit 4", description: "Description produit 4", image: "https://via.placeholder.com/400x300" }
];

const liste = document.getElementById("liste-produits");

produits.forEach(p => {
  const div = document.createElement("div");
  div.className = "produit";
  div.innerHTML = `
    <img src="${p.image}" alt="${p.nom}">
    <h3>${p.nom}</h3>
    <p>${p.description}</p>
    <button onclick="ouvrirForm('${p.nom}')">Commander</button>
  `;
  liste.appendChild(div);
});

function ouvrirForm(produit) {
  document.getElementById("produit-nom").textContent = produit;
  document.getElementById("produit-input").value = produit;
  document.getElementById("blur-background").style.display = "block";
  document.getElementById("popup-form").style.display = "block";
}

function fermerForm() {
  document.getElementById("blur-background").style.display = "none";
  document.getElementById("popup-form").style.display = "none";
}
