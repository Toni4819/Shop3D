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
  },
  {
    name: "Baguette Pointeur",
    image: "https://makerworld.bblmw.com/makerworld/model/USccf2d735a62a04/design/7869d0bf-0ffc-4c64-b688-0bdd49f2559c.webp?x-oss-process=image/resize,w_1000/format,webp",
    description: "1,5€"
  },
  {
    name: "Fidget Morph",
    image: "https://makerworld.bblmw.com/makerworld/model/USb1a131172987e6/design/2024-11-14_afcd1659f051b.jpeg?x-oss-process=image/resize,w_1000/format,webp",
    description: "5€"
  },
  {
    name: "Sifflet Turbo",
    image: "https://makerworld.bblmw.com/makerworld/model/USd260f43d512957/design/2024-12-16_0a80858defdba.jpg?x-oss-process=image/resize,w_1000/format,webp",
    description: "1,5€"
  },
  {
    name: "Mini Catapulte",
    image: "https://makerworld.bblmw.com/makerworld/model/UScd5f4891b992a7/design/2024-12-27_3bdbf7341ca72.jpg?x-oss-process=image/resize,w_1000/format,webp",
    description: "2€"
  },
  {
    name: "Serpent Articulé",
    image: "https://makerworld.bblmw.com/makerworld/model/USa31350bf613edc/design/2025-05-06_50b67a19065518.jpg?x-oss-process=image/resize,w_1000/format,webp",
    description: "1€"
  },
  {
    name: "Fidget Interrupteur",
    image: "https://makerworld.bblmw.com/makerworld/model/US8d430ecc2a1a02/design/2024-10-19_883e0da16dd1c.jpeg?x-oss-process=image/resize,w_1000/format,webp",
    description: "1€"
  },
  {
    name: "Collier Chaîne",
    image: "https://makerworld.bblmw.com/makerworld/model/US45ec16c99aadcc/design/2023-10-12_69dcaa6d50c7f.jpg?x-oss-process=image/resize,w_1000/format,webp",
    description: "2,5€"
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
    <button onclick="openPopup('${product.name}', \`${product.image}\`)">Commander</button>
  `;
  productsContainer.appendChild(div);
});
