const email = 'TON_EMAIL'; // remplace par ton adresse

const produits = [
  { nom: 'Produit 1', img: 'https://via.placeholder.com/200x150', desc: 'Description rapide 1' },
  { nom: 'Produit 2', img: 'https://via.placeholder.com/200x150', desc: 'Description rapide 2' },
  { nom: 'Produit 3', img: 'https://via.placeholder.com/200x150', desc: 'Description rapide 3' },
  { nom: 'Produit 4', img: 'https://via.placeholder.com/200x150', desc: 'Description rapide 4' },
];

const container = document.getElementById('produits');

produits.forEach(p => {
  const div = document.createElement('div');
  div.className = 'produit';
  div.innerHTML = `
    <img src="${p.img}" alt="${p.nom}">
    <h3>${p.nom}</h3>
    <p>${p.desc}</p>
    <form action="https://formsubmit.co/${email}" method="POST">
      <input type="hidden" name="produit" value="${p.nom}">
      <input type="text" name="nom" placeholder="Votre nom" required>
      <input type="email" name="email" placeholder="Votre email" required>
      <button type="submit">Commander</button>
    </form>
  `;
  container.appendChild(div);
});
