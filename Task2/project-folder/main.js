let cart = [];

if (localStorage.getItem("cart")) {
  cart = JSON.parse(localStorage.getItem("cart"));
}

function updateCartCount() {
  document.getElementById("cart-count").innerText = cart.length;
}

function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const existingItem = cart.find(item => item.id === product.id);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    product.quantity = 1;
    cart.push(product);
  }
  localStorage.setItem("cart", JSON.stringify(cart));
}

function viewDetails(name, price, rating, image) {
  const url = `product-details.html?name=${encodeURIComponent(name)}&price=${encodeURIComponent(price)}&rating=${encodeURIComponent(rating)}&image=${encodeURIComponent(image)}`;
  window.location.href = url;
}

function searchProducts() {
  const input = document.getElementById('searchInput').value.toLowerCase();
  const cards = document.querySelectorAll('.product-card');

  cards.forEach(card => {
      const name = card.querySelector('h3').innerText.toLowerCase();
      card.style.display = name.includes(input) ? 'block' : 'none';
  });
}



function filterProducts(category) {
  const cards = document.querySelectorAll('.product-card');
  cards.forEach(card => {
      const cardCategory = card.getAttribute('data-category');
      if (category === 'all' || cardCategory === category) {
          card.style.display = 'block';
      } else {
          card.style.display = 'none';
      }
  });
}


function goToOrderPage() {
  window.location.href = "order.html";
}


document.getElementById("cart-icon").addEventListener("click", () => {
  window.location.href = "order.html";
});

updateCartCount(); 
