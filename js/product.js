const container = document.getElementById("product-container");

// Get product ID from URL
const params = new URLSearchParams(window.location.search);
const productId = params.get("id");

if (!productId) container.innerHTML = "<p>No product selected</p>";

fetch(`http://localhost:5000/api/public/products/${productId}`)
  .then(res => res.json())
  .then(product => {
    container.innerHTML = `
      <h1>${product.name}</h1>
      <p>${product.description || ''}</p>
      <p>Price: $${product.price}</p>
      ${product.images.map(img => `<img src="${img.url}" alt="${product.name}">`).join('')}
      <p>Shop: ${product.shop ? product.shop.name : 'No Shop'}</p>
    `;
  })
  .catch(err => {
    container.innerHTML = `<p>Error loading product: ${err}</p>`;
  });
