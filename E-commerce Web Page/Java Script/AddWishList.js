
let cart = JSON.parse(localStorage.getItem("cart")) || [];


const displayCart = () => {
  let temp = "";
  let total = 0; // Initialize total to zero


  if (cart.length > 0) {
    cart.map((product) => {
      const productTotal = product.price * product.quantity; // Calculate total for each product
      total += productTotal;

      temp += ` 
      <div class="cart-item col-lg-4 g-5">
        <div class="cart-item-details">
          <img src="${product.img}" alt="" class="cart-item-img">
          <div class="cart-item-info">
            <h3 class="cartTitle">${product.title}</h3>
            <p class="cartrPrice">$ ${product.price}</p>
            <div class="quantity">
              <button class="decrease-quantity" data-id="${
                product.id
              }">-</button>

              <span>${product.quantity}</span>
              <button class="increase-quantity" data-id="${
                product.id
              }">+</button>
            </div>

            <div class="product-total">
              <p class="subTotal">Subtotal: $ ${productTotal.toFixed(2)}</p>
            </div>

            <button class="remove-item" data-id="${product.id}">Delete</button>
          </div>
        </div>
      </div>`;
    });

    // Display total price for the entire cart
    temp += `
    <div class="cart-total">
      <h3>Total: $ ${total.toFixed(2)}</h3>
    </div>`;
  } else {
    temp = "<p>Your cart is empty.</p>";
  }

  
  document.getElementById("cart-container").innerHTML = temp;

  // Add event listeners for quantity increase/decrease buttons
  const decreaseButtons = document.querySelectorAll(".decrease-quantity");
  for (let i = 0; i < decreaseButtons.length; i++) {
    decreaseButtons[i].addEventListener("click", (e) => {
      const productId = e.target.getAttribute("data-id");
      updateCartQuantity(productId, "decrease");
      displayCart();
    });
  }

  const increaseButtons = document.querySelectorAll(".increase-quantity");
  for (let i = 0; i < increaseButtons.length; i++) {
    increaseButtons[i].addEventListener("click", (e) => {
      const productId = e.target.getAttribute("data-id");
      updateCartQuantity(productId, "increase");
      displayCart();
    });
  }

  // Add event listener for the remove/delete buttons
  const removeButtons = document.querySelectorAll(".remove-item");
  for (let i = 0; i < removeButtons.length; i++) {
    removeButtons[i].addEventListener("click", (e) => {
      const productId = e.target.getAttribute("data-id");
      removeProductFromCart(productId); // Remove product from cart
      displayCart(); // Update the cart display
    });
  }
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
  localStorage.setItem("cart", JSON.stringify(cart));
};

// Remove a product from the cart
const removeProductFromCart = (id) => {
  cart = cart.filter((product) => product.id != id);
  localStorage.setItem("cart", JSON.stringify(cart));
};

// Initial cart display
displayCart();
