
// let cart = JSON.parse(localStorage.getItem("cart")) || [];


// const displayCart = () => {
//   let temp = "";
//   let total = 0; // Initialize total to zero


//   if (cart.length > 0) {
//     cart.map((product) => {
//       const productTotal = product.price * product.quantity; // Calculate total for each product
//       total += productTotal;

//       temp += `
//       <div class="cart-item col-lg-4 g-5">
//         <div class="cart-item-details">
//           <img src="${product.img}" alt="" class="cart-item-img">
//           <div class="cart-item-info">
//             <h3 class="cartTitle">${product.title}</h3>
//             <p class="cartrPrice">$ ${product.price}</p>
//             <div class="quantity">
//               <button class="decrease-quantity" data-id="${
//                 product.id
//               }">-</button>

//               <span>${product.quantity}</span>
//               <button class="increase-quantity" data-id="${
//                 product.id
//               }">+</button>
//             </div>

//             <div class="product-total">
//               <p class="subTotal">Subtotal: $ ${productTotal.toFixed(2)}</p>
//             </div>

//             <button class="remove-item" data-id="${product.id}">Delete</button>
//           </div>
//         </div>
//       </div>`;
//     });

//     // Display total price for the entire cart
//     temp += `
//     <div class="cart-total">
//       <h3>Total: $ ${total.toFixed(2)}</h3>
//     </div>`;
//   } else {
//     temp = "<p>Your cart is empty.</p>";
//   }

  
//   document.getElementById("cart-container").innerHTML = temp;

//   // Add event listeners for quantity increase/decrease buttons
//   const decreaseButtons = document.querySelectorAll(".decrease-quantity");
//   for (let i = 0; i < decreaseButtons.length; i++) {
//     decreaseButtons[i].addEventListener("click", (e) => {
//       const productId = e.target.getAttribute("data-id");
//       updateCartQuantity(productId, "decrease");
//       displayCart();
//     });
//   }

//   const increaseButtons = document.querySelectorAll(".increase-quantity");
//   for (let i = 0; i < increaseButtons.length; i++) {
//     increaseButtons[i].addEventListener("click", (e) => {
//       const productId = e.target.getAttribute("data-id");
//       updateCartQuantity(productId, "increase");
//       displayCart();
//     });
//   }

//   // Add event listener for the remove/delete buttons
//   const removeButtons = document.querySelectorAll(".remove-item");
//   for (let i = 0; i < removeButtons.length; i++) {
//     removeButtons[i].addEventListener("click", (e) => {
//       const productId = e.target.getAttribute("data-id");
//       removeProductFromCart(productId); // Remove product from cart
//       displayCart(); // Update the cart display
//     });
//   }
// };

// // Update the quantity of a product in the cart
// const updateCartQuantity = (id, action = "increase") => {
//   cart = cart.map((product) => {
//     if (product.id == id) {
//       if (action === "increase") {
//         product.quantity += 1;
//       } else if (action === "decrease" && product.quantity > 1) {
//         product.quantity -= 1;
//       }
//     }
//     return product;
//   });
//   localStorage.setItem("cart", JSON.stringify(cart));
// };

// // Remove a product from the cart
// const removeProductFromCart = (id) => {
//   cart = cart.filter((product) => product.id != id);
//   localStorage.setItem("cart", JSON.stringify(cart));
// };

// // Initial cart display
// displayCart();



// let cart = JSON.parse(localStorage.getItem("cart")) || [];

// const displayCart = () => {
//   let temp = "";
//   let total = 0; // Initialize total to zero

//   if (cart.length > 0) {
//     cart.map((product) => {
//       const productTotal = product.price * product.quantity; // Calculate total for each product
//       total += productTotal;

//       temp += `
//       <div class="cart-item col-lg-4 g-5">
//         <div class="cart-item-details">
//           <img src="${product.img}" alt="" class="cart-item-img">
//           <div class="cart-item-info">
//             <h3 class="cartTitle">${product.title}</h3>
//             <p class="cartrPrice">$ ${product.price}</p>
//             <div class="quantity">
//               <button class="decrease-quantity" data-id="${
//                 product.id
//               }">-</button>
//               <span>${product.quantity}</span>
//               <button class="increase-quantity" data-id="${
//                 product.id
//               }">+</button>
//             </div>
//             <div class="product-total">
//               <p class="subTotal">Subtotal: $ ${productTotal.toFixed(2)}</p>
//             </div>
//             <button class="remove-item" data-id="${product.id}">Delete</button>
//           </div>
//         </div>
//       </div>`;
//     });

//     // Display total price for the entire cart
//     temp += `
//     <div class="cart-total">
//       <h3>Total: $ ${total.toFixed(2)}</h3>
//       <button id="checkoutButton" ${
//         cart.length === 0 ? "disabled" : ""
//       }>Proceed to Checkout</button>
//     </div>`;
//   } else {
//     temp = "<p>Your cart is empty.</p>";
//   }

//   document.getElementById("cart-container").innerHTML = temp;

//   // Add event listeners for quantity increase/decrease buttons
//   const decreaseButtons = document.querySelectorAll(".decrease-quantity");
//   for (let i = 0; i < decreaseButtons.length; i++) {
//     decreaseButtons[i].addEventListener("click", (e) => {
//       const productId = e.target.getAttribute("data-id");
//       updateCartQuantity(productId, "decrease");
//       displayCart();
//     });
//   }

//   const increaseButtons = document.querySelectorAll(".increase-quantity");
//   for (let i = 0; i < increaseButtons.length; i++) {
//     increaseButtons[i].addEventListener("click", (e) => {
//       const productId = e.target.getAttribute("data-id");
//       updateCartQuantity(productId, "increase");
//       displayCart();
//     });
//   }

//   // Add event listener for the remove/delete buttons
//   const removeButtons = document.querySelectorAll(".remove-item");
//   for (let i = 0; i < removeButtons.length; i++) {
//     removeButtons[i].addEventListener("click", (e) => {
//       const productId = e.target.getAttribute("data-id");
//       removeProductFromCart(productId); // Remove product from cart
//       displayCart(); // Update the cart display
//     });
//   }

//   // Add event listener for checkout button
//   const checkoutButton = document.getElementById("checkoutButton");
//   if (checkoutButton) {
//     checkoutButton.addEventListener("click", () => {
//       checkout();
//     });
//   }
// };

// // Update the quantity of a product in the cart
// const updateCartQuantity = (id, action = "increase") => {
//   cart = cart.map((product) => {
//     if (product.id == id) {
//       if (action === "increase") {
//         product.quantity += 1;
//       } else if (action === "decrease" && product.quantity > 1) {
//         product.quantity -= 1;
//       }
//     }
//     return product;
//   });
//   localStorage.setItem("cart", JSON.stringify(cart));
// };

// // Remove a product from the cart
// const removeProductFromCart = (id) => {
//   cart = cart.filter((product) => product.id != id);
//   localStorage.setItem("cart", JSON.stringify(cart));
// };

// // Handle checkout
// const checkout = () => {
//   if (cart.length === 0) {
//     alert("Your cart is empty. Cannot proceed to checkout.");
//     return;
//   }

//   // Proceed to checkout: clear cart and show confirmation message
//   cart = [];
//   localStorage.setItem("cart", JSON.stringify(cart));

//   alert("Thank you for your purchase! Your order has been placed.");
//   displayCart(); // Refresh cart display (now empty)
// };

// // Initial cart display
// displayCart();




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
      <button id="checkoutButton" ${
        cart.length === 0 ? "disabled" : ""
      }>Proceed to Checkout</button>
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

  // Add event listener for checkout button
  const checkoutButton = document.getElementById("checkoutButton");
  if (checkoutButton) {
    checkoutButton.addEventListener("click", () => {
      displayCheckoutForm();
    });
  }
};

// Show the checkout form when user clicks on checkout
const displayCheckoutForm = () => {
  const checkoutFormHTML = `
    <div id="checkout-form-container">
      <h3>Checkout</h3>
      <form id="checkout-form">
        <label for="name">Full Name:</label>
        <input type="text" id="name" name="name" required />

        <label for="phone">Phone Number:</label>
        <input type="text" id="phone" name="phone" required />

        <label for="address">Shipping Address:</label>
        <textarea id="address" name="address" required></textarea>

        <label for="payment">Payment Type:</label>
        <select id="payment" name="payment" required>
          <option value="">Select Payment Method</option>
          <option value="credit-card">Credit Card</option>
          <option value="paypal">PayPal</option>
          <option value="bank-transfer">Bank Transfer</option>
        </select>

        <button type="submit">Confirm Order</button>
      </form>
    </div>
  `;

  document.getElementById("cart-container").innerHTML = checkoutFormHTML;

  // Add form submission handler
  const checkoutForm = document.getElementById("checkout-form");
  checkoutForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;
    const payment = document.getElementById("payment").value;

    if (!name || !phone || !address || !payment) {
      alert("Please fill out all fields.");
      return;
    }

    // Handle checkout logic (for now, we will simulate it)
    handleCheckout(name, phone, address, payment);
  });
};

// Handle the checkout process
const handleCheckout = (name, phone, address, payment) => {
  // Here, you can send the details to a server or payment gateway (not implemented in this code)
  alert(
    `Order placed successfully!\n\nName: ${name}\nPhone: ${phone}\nAddress: ${address}\nPayment: ${payment}`
  );

  // Clear the cart and update local storage
  cart = [];
  localStorage.setItem("cart", JSON.stringify(cart));

  // Update the cart display (now empty)
  displayCart();
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
