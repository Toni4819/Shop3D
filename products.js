const email = 'capber.antoine@gmail.com'; // remplace ton email ici

const produits = [
  { nom: 'Produit 1', img: 'https://via.placeholder.com/200x150', desc: 'Description rapide 1' },
  { nom: 'Produit 2', img: 'https://via.placeholder.com/200x150', desc: 'Description rapide 2' },
  { nom: 'Produit 3', img: 'https://via.placeholder.com/200x150', desc: 'Description rapide 3' },
  { nom: 'Produit 4', img: 'https://via.placeholder.com/200x150', desc: 'Description rapide 4' },
];

const container = document.getElementById('produits');

produits.forEach((p, index) => {
  const div = document.createElement('div');
  div.className = 'produit';
  div.innerHTML = `
    <img src="${p.img}" alt="${p.nom}">
    <h3>${p.nom}</h3>
    <p>${p.desc}</p>
    <button onclick="afficherForm(${index})">Commander</button>
  `;
  container.appendChild(div);
});

function afficherForm(id) {
  const produit = produits[id];
  const popup = document.getElementById('popup-form');
  const formContainer = document.getElementById('form-container');

  formContainer.innerHTML = `
    <h2>${produit.nom}</h2>
    <form action="https://formsubmit.co/${email}" method="POST">
      <input type="hidden" name="produit" value="${produit.nom}">
      <input type="text" name="nom" placeholder="Votre nom" required><br>
      <input type="text" name="prenom" placeholder="Votre prénom" required><br>
      <input type="email" name="email" placeholder="Votre email" required><br>
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
