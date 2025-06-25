renderProducts();

const blurBg = document.getElementById('blurBg');
const commandeForm = document.getElementById('commandeForm');
const productsContainer = document.getElementById('productsContainer');

let selectedProductIndex = null;

productsContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('btn-commander')) {
    const productDiv = e.target.closest('.product');
    selectedProductIndex = productDiv.getAttribute('data-index');
    openPopup();
  }
});

function openPopup() {
  blurBg.style.display = 'flex';
}

function closePopup() {
  blurBg.style.display = 'none';
  commandeForm.reset();
  selectedProductIndex = null;
}

blurBg.addEventListener('click', (e) => {
  if (e.target === blurBg) {
    closePopup();
  }
});

commandeForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = new FormData(commandeForm);
  if (selectedProductIndex !== null) {
    formData.append('Produit commandé', products[selectedProductIndex].name);
  }

  const response = await fetch(commandeForm.action, {
    method: 'POST',
    headers: { 'Accept': 'application/json' },
    body: formData,
  });

  if (response.ok) {
    closePopup();
    window.location.href = 'merci.html';
  } else {
    alert('Erreur lors de l\'envoi. Réessaye plus tard.');
  }
});
