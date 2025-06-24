const email = 'capber.antoine@gmail.com'; // remplace par ton adresse mail

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
    <div id="form${index}" style="display:none;"></div>
  `;
  container.appendChild(div);
});

function afficherForm(id) {
  const produit = produits[id];
  const formDiv = document.getElementById(`form${id}`);
  formDiv.innerHTML = `
    <form action="https://formsubmit.co/${email}" method="POST">
      <input type="hidden" name="produit" value="${produit.nom}">
      <input type="text" name="nom" placeholder="Votre nom" required><br>
      <input type="text" name="prenom" placeholder="Votre prénom" required><br>
      <input type="email" name="email" placeholder="Votre email" required><br>
      <button type="submit">Envoyer</button>
    </form>
  `;
  formDiv.style.display = 'block';
    }
