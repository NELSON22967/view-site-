const container = document.getElementById("products-container");

// Fetch all products
fetch("http://localhost:5000/api/public/products")
  .then(res => res.json())
  .then(products => {
    container.innerHTML = products
      .map(product => `
        <div class="product-card">
          <h3>${product.name}</h3>
          <p>${product.description || ''}</p>
          <p>Price: $${product.price}</p>
          ${product.images[0] ? `<img src="${product.images[0].url}" alt="${product.name}">` : ''}
          <p>Shop: ${product.shop ? product.shop.name : 'No Shop'}</p>
          <a href="product.html?id=${product._id}">View Details</a>
        </div>
      `).join('');
  })
  .catch(err => {
    container.innerHTML = `<p>Error loading products: ${err}</p>`;
  });
