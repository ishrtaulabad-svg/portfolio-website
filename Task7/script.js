
const cartButton = document.getElementById("cart-button");
const cartDiv = document.getElementById("cart");
const cartList = document.getElementById("cart-list");


let cart = [];


// Add-to-Cart buttons
document.querySelectorAll(".product").forEach(product => {
  const btn = product.querySelector(".add-to-Cart");
  btn.addEventListener("click", () => {
    const name = product.querySelector("h2").textContent;
    const priceText = product.querySelector("p").textContent;
    const price = parseFloat(priceText);

    // add product to cart
    cart.push({ name, price });
    displayCart();
  });
});

// Toggle cart visibility
cartButton.addEventListener("click", () => {
  if (cartDiv.style.display === "none") {
    cartDiv.style.display = "block";
    cartButton.textContent = "Hide Cart";
  } else {
    cartDiv.style.display = "none";
    cartButton.textContent = "Cart";
  }
});

// Show items in cart with checkboxes

function displayCart() {
  cartList.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;

    const li = document.createElement("li");
    li.innerHTML = `
      <label>
        <input type="checkbox" class="item-check" checked>
        ${item.Laptop} - $${item.price}
      </label>
      
      <button class="remove-btn">remove</button>
    `;

    // remove product
    li.querySelector(".remove-btn").addEventListener("click", () => {
      cart.splice(index, 1);
      displayCart();
    });

    cartList.appendChild(li);
  });

  totalSpan.textContent = total;
}


