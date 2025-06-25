const products = [
  {
    name: "Fidget Spirale petit",
    image: "https://cdn-acop.makeronline.com/asop/2024-10/10/webp/172850401991196900-6706e0d3dea6.webp",
    description: "1,5€"
  },
  {
    name: "Fidget Spirale moyen",
    image: "https://cdn-acop.makeronline.com/asop/2024-10/10/webp/172850401991196900-6706e0d3dea6.webp",
    description: "2€"
  },
  {
    name: "Fidget Spirale grand",
    image: "https://cdn-acop.makeronline.com/asop/2024-10/10/webp/172850401991196900-6706e0d3dea6.webp",
    description: "3€"
  },
  {
    name: "Fidget Spirale et boule",
    image: "https://makerworld.bblmw.com/makerworld/model/US14559cb8d4fac9/design/2024-11-03_ea85518054141.jpg?x-oss-process=image/resize,w_1000/format,webp",
    description: "4€"
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
