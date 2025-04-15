document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("order-items");
  const totalAmountContainer = document.getElementById("total-amount");
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  if (cart.length === 0) {
    container.innerHTML = "<p>Your cart is empty.</p>";
    return;
  }

  let totalAmount = 0;

  cart.forEach(item => {
    const quantity = item.quantity || 1;
    const itemTotal = parseFloat(item.price) * quantity;
    totalAmount += itemTotal;

    const div = document.createElement("div");
    div.className = "item";
    div.innerHTML = `
      <img src="${item.image}" alt="${item.name}" />
      <div>
        <h4>${item.name}</h4>
        <p>Price: ₹${item.price}</p>
        <p>Quantity: ${quantity}</p>
        <p>Total: ₹${itemTotal.toFixed(2)}</p>
      </div>
    `;
    container.appendChild(div);
  });

  totalAmountContainer.textContent = totalAmount.toFixed(2);
});

function togglePaymentDetails() {
  const selected = document.getElementById("payment").value;
  document.querySelectorAll(".payment-section").forEach(div => {
    div.style.display = "none";
  });

  if (selected === "credit") {
    document.getElementById("credit-details").style.display = "block";
  } else if (selected === "gpay") {
    document.getElementById("gpay-details").style.display = "block";
  } else if (selected === "phonepe") {
    document.getElementById("phonepe-details").style.display = "block";
  }
}

function placeOrder() {
  const name = document.getElementById("name").value.trim();
  const address = document.getElementById("address").value.trim();
  const payment = document.getElementById("payment").value;
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  if (!name || !address || !payment) {
    alert("Please fill all required fields.");
    return;
  }

  if (payment === "credit") {
    const card = document.getElementById("card-number").value;
    const expiry = document.getElementById("expiry").value;
    const cvv = document.getElementById("cvv").value;

    if (!card || card.length !== 16 || !expiry || !cvv || cvv.length !== 3) {
      alert("Enter valid credit card details.");
      return;
    }
  }

  if (payment === "gpay") {
    const gpay = document.getElementById("gpay-number").value;
    if (!gpay || gpay.length !== 10) {
      alert("Enter valid Google Pay number.");
      return;
    }
  }

  if (payment === "phonepe") {
    const phonepe = document.getElementById("phonepe-number").value;
    if (!phonepe || phonepe.length !== 10) {
      alert("Enter valid PhonePe number.");
      return;
    }
  }

  const orderId = Math.floor(100000 + Math.random() * 900000);

  localStorage.setItem("lastOrderId", orderId);
  localStorage.setItem("lastOrderCart", JSON.stringify(cart));
  localStorage.setItem("lastCustomerDetails", JSON.stringify({ name, address, payment }));

  localStorage.removeItem("cart");

  window.location.href = "thankyou.html";
}
