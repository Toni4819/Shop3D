const produits = [
  {
    nom: "Produit 1",
    image: "lien_vers_image1.jpg",
    description: "Description du produit 1"
  },
  {
    nom: "Produit 2",
    image: "lien_vers_image2.jpg",
    description: "Description du produit 2"
  },
  {
    nom: "Produit 3",
    image: "lien_vers_image3.jpg",
    description: "Description du produit 3"
  },
  {
    nom: "Produit 4",
    image: "lien_vers_image4.jpg",
    description: "Description du produit 4"
  }
];

function afficherProduits() {
  const liste = document.getElementById("liste-produits");
  produits.forEach((produit, index) => {
    liste.innerHTML += `
      <div class="produit">
        <img src="${produit.image}" alt="${produit.nom}">
        <h3>${produit.nom}</h3>
        <p>${produit.description}</p>
        <button onclick="afficherForm(${index})">Commander</button>
      </div>
    `;
  });
}

function afficherForm(id) {
  const produit = produits[id];
  const popup = document.getElementById('popup-form');
  const formContainer = document.getElementById('form-container');

  formContainer.innerHTML = `
    <h2>Commander : ${produit.nom}</h2>
    <form action="https://formsubmit.io/send/capber.antoine@gmail.com" method="POST">
      <input type="hidden" name="_redirect" value="https://ton-site.github.io/merci.html">
      <input type="text" name="nom" placeholder="Votre nom" required><br>
      <input type="text" name="prenom" placeholder="Votre prénom" required><br>
      <input type="email" name="email" placeholder="Votre email" required><br>
      <input type="hidden" name="produit" value="${produit.nom}">
      <button type="submit">Envoyer</button>
      <button type="button" onclick="fermerForm()" style="background:#e74c3c; margin-left:5px;">Annuler</button>
    </form>
  `;

  popup.classList.remove('hidden');
  document.getElementById('blur-background').style.backdropFilter = 'blur(5px)';
}

function fermerForm() {
  document.getElementById('popup-form').classList.add('hidden');
  document.getElementById('blur-background').style.backdropFilter = 'blur(0px)';
}

window.onload = afficherProduits;
