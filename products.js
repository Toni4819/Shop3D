const products = [
  { name: "Casque VR Pro", description: "Immersion totale.", image: "https://via.placeholder.com/300x180" },
  { name: "Imprimante 3D X1", description: "Imprimez vos idées.", image: "https://via.placeholder.com/300x180" },
  { name: "Manette Haptique", description: "Retour tactile.", image: "https://via.placeholder.com/300x180" },
  { name: "Lunettes AR", description: "Augmentez votre réalité.", image: "https://via.placeholder.com/300x180" }
];

const container = document.getElementById('products');
const popup = document.getElementById('popup');
const produitInput = document.getElementById('produitInput');
const closePopup = document.getElementById('closePopup');
const mainContent = document.getElementById('mainContent');

products.forEach(prod => {
  const card = document.createElement('div');
  card.className = 'product';
  card.innerHTML = `
    <img src="${prod.image}" alt="${prod.name}">
    <h3>${prod.name}</h3>
    <p>${prod.description}</p>
    <button class="order-btn">Commander</button>
  `;
  card.querySelector('.order-btn').addEventListener('click', () => {
    popup.classList.remove('hidden');
    mainContent.classList.add('blurred');
    produitInput.value = prod.name;
  });
  container.appendChild(card);
});

closePopup.addEventListener('click', () => {
  popup.classList.add('hidden');
  mainContent.classList.remove('blurred');
});
 
