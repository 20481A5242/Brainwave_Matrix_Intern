function displayOrderItems() {
  const orderItemsContainer = document.getElementById("order-items");
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  orderItemsContainer.innerHTML = "";

  if (cart.length === 0) {
    orderItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
    return;
  }

  cart.forEach((item, index) => {
    const itemDiv = document.createElement("div");
    itemDiv.className = "order-item";
    itemDiv.innerHTML = `
      <img src="${item.image}" alt="${item.name}" width="80" />
      <div>
        <h4>${item.name}</h4>
        <p>Price: ₹${item.price}</p>
        <button onclick="removeItem(${index})">Remove</button>
      </div>
    `;
    orderItemsContainer.appendChild(itemDiv);
  });
}

function removeItem(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1); 
  localStorage.setItem("cart", JSON.stringify(cart));
  displayOrderItems(); 
}

function placeOrder() {
  alert("Your order has been placed successfully!");
  localStorage.removeItem("cart");
  window.location.href = "thankyou.html";
}

displayOrderItems();
