function afficherProduits() {
  const container = document.getElementById("liste-produits");
  produits.forEach((p, i) => {
    container.innerHTML += `
      <div class="produit">
        <img src="${p.image}" alt="${p.nom}">
        <h3>${p.nom}</h3>
        <p>${p.description}</p>
        <button onclick="afficherForm(${i})">Commander</button>
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
    <form action="https://formsubmit.io/send/TON_EMAIL" method="POST">
      <input type="hidden" name="_redirect" value="https://ton-site.github.io/merci.html">
      <input type="text" name="nom" placeholder="Votre nom" required><br>
      <input type="text" name="prenom" placeholder="Votre prénom" required><br>
      <input type="email" name="email" placeholder="Votre email" required><br>
      <input type="hidden" name="produit" value="${produit.nom}">
      <button type="submit">Envoyer</button>
      <button type="button" onclick="fermerForm()">Annuler</button>
    </form>
  `;

  popup.style.display = 'block';
  document.getElementById('blur-background').style.display = 'block';
}

function fermerForm() {
  document.getElementById('popup-form').style.display = 'none';
  document.getElementById('blur-background').style.display = 'none';
}

afficherProduits();
