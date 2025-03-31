// Initialize cart from localStorage or set an empty array
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Function to display cart items
const displayCart = () => {
  let temp = "";
  let total = 0;

  // If cart has items
  if (cart.length > 0) {
    cart.forEach((product) => {
      total += product.price * product.quantity;
      temp += `
      <div class="cart-item">
        <div class="cart-item-details">
          <img src="${product.img}" alt="" class="cart-item-img">
          <div class="cart-item-info">
            <h3>${product.title}</h3>
            <p>$ ${product.price}</p>
            <div class="quantity">
              <button class="decrease-quantity" data-id="${product.id}">-</button>
              <span>${product.quantity}</span>
              <button class="increase-quantity" data-id="${product.id}">+</button>
            </div>
            <button class="remove-item" data-id="${product.id}">Remove</button>
          </div>
        </div>
      </div>`;
    });

    // Display total price
    temp += `
    <div class="cart-total">
      <h3>Total: $ ${total.toFixed(2)}</h3>
      <button class="checkout-btn">Checkout</button>
    </div>`;
  } else {
    // If cart is empty
    temp = "<p>Your cart is empty.</p>";
  }

  document.getElementById("cart-container").innerHTML = temp;

  // Add event listeners for quantity increase/decrease and remove buttons
  document.querySelectorAll(".decrease-quantity").forEach((button) => {
    button.addEventListener("click", (e) => {
      const productId = e.target.getAttribute("data-id");
      updateCartQuantity(productId, "decrease");
      displayCart();  // Update the cart display
    });
  });

  document.querySelectorAll(".increase-quantity").forEach((button) => {
    button.addEventListener("click", (e) => {
      const productId = e.target.getAttribute("data-id");
      updateCartQuantity(productId, "increase");
      displayCart();  // Update the cart display
    });
  });

  // Remove product from cart
  document.querySelectorAll(".remove-item").forEach((button) => {
    button.addEventListener("click", (e) => {
      const productId = e.target.getAttribute("data-id");
      removeProductFromCart(productId);
      displayCart();  // Update the cart display
    });
  });
};

// Update the quantity of a product in the cart
const updateCartQuantity = (id, action = "increase") => {
  cart = cart.map((product) => {
    if (product.id == id) {
      if (action === "increase") {
        product.quantity += 1;
      } else if (action === "decrease" && product.quantity > 1) {
        product.quantity -= 1;
      }
    }
    return product;
  });
  localStorage.setItem("cart", JSON.stringify(cart));  // Save the updated cart to localStorage
};

// Remove a product from the cart
const removeProductFromCart = (id) => {
  cart = cart.filter((product) => product.id != id);  // Filter out the product with the given id
  localStorage.setItem("cart", JSON.stringify(cart));  // Save the updated cart to localStorage
};

// Initial cart display
displayCart();
