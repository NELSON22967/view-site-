const container = document.getElementById("shops-container");

// Fetch all shops
fetch("http://localhost:5000/api/public/shops")
  .then(res => res.json())
  .then(shops => {
    container.innerHTML = shops
      .map(shop => `
        <div class="shop-card">
          <h3>${shop.name}</h3>
          <p>${shop.description || ''}</p>
          ${shop.logo ? `<img src="${shop.logo.url}" alt="${shop.name}">` : ''}
          <a href="shop.html?id=${shop._id}">View Products</a>
        </div>
      `).join('');
  })
  .catch(err => {
    container.innerHTML = `<p>Error loading shops: ${err}</p>`;
  });
