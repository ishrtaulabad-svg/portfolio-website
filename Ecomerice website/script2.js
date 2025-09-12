const Buttons = document.querySelectorAll('.fa-shopping-cart');
const cart = document.querySelector('.cart');

Buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    cart.style.display = cart.style.display === "block" ? "none" : "block";
  });
});

let cart2 = [];

document.querySelectorAll(".add-to-cart").forEach(button => {
  button.onclick = function () {
    const product = this.closest(".product");
    const name = product.querySelector("h2").textContent;
    const priceText = product.querySelector("p").textContent.replace("$", "");
    const price = parseFloat(priceText);
    const image = product.querySelector("img").src;

    // check if product already exists in cart
    const existing = cart2.find(item => item.name === name);
    if (existing) {
      existing.quantity++;
    } else {
      cart2.push({ name, price, image, quantity: 1 });
    }

    displayCart();
  };
});

function displayCart() {
  const cartList = document.getElementById("cart-list");
  const totalSpan = document.getElementById("cart-total");
  cartList.innerHTML = "";
  let total = 0;

  cart2.forEach((item, index) => {
    total += item.price * item.quantity;

    const li = document.createElement("li");
    li.innerHTML = `
      <img src="${item.image}" style="width:50px; height:50px; object-fit:cover;">
      ${item.name} - $${item.price.toFixed(2)} × ${item.quantity}
      <button class="remove-btn">❌</button>
    `;

    // remove product
    li.querySelector(".remove-btn").addEventListener("click", () => {
      cart2.splice(index, 1); 
      displayCart();
    });

    cartList.appendChild(li);
  });

  totalSpan.textContent = `Total: $${total.toFixed(2)}`;
}

// search
const search = document.getElementById("search-box");
const searchBtn = document.getElementById("searchBtn");
const products = document.querySelectorAll(".product");

function goToSection() {
  const Text = search.value.toLowerCase();
  if (!Text) {
    alert("Please enter a product name");
    return;
  }

  let pName = false; 

  for (let product of products) {
    const name = product.querySelector("h2").textContent.toLowerCase();

    if (name.includes(Text)) {
      pName = true; 

      const section = product.closest("section");
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }

      product.style.border = "2px solid red";
      setTimeout(() => (product.style.border = ""), 2000);

      break; 
    }
  }

  if (!pName) {
    alert("Product not match ❌");
  }
}

// Click button
searchBtn.addEventListener("click", goToSection);

// Press Enter
search.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    goToSection();
  }
});



