// let cart = JSON.parse(localStorage.getItem("cart")) || [];

// // Function to display cart items
// const displayCart = () => {
//   let temp = "";
//   let total = 0;

//   // If cart has items
//   if (cart.length > 0) {
//     cart.forEach((product) => {
//       total += product.price * product.quantity;
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
           
//     <div class="cart-total">
//       <h3>Total: $ ${total.toFixed(2)}</h3>
     
//       </div>
   
//             <button class="remove-item" data-id="${product.id}">Remove</button>
//           </div>
          
//         </div>
//       </div>`;
//     });

//     // Display total price
//     temp += `
//     <div class="cart-total">
//       <h3>Total: $ ${total.toFixed(2)}</h3>
//       <button class="checkout-btn">Checkout</button>
//     </div>`;
//   } else {
//     // If cart is empty
//     temp = "<p>Your cart is empty.</p>";
//   }

//   document.getElementById("cart-container").innerHTML = temp;

//   // Add event listeners for quantity increase/decrease and remove buttons
//   document.querySelectorAll(".decrease-quantity").forEach((button) => {
//     button.addEventListener("click", (e) => {
//       const productId = e.target.getAttribute("data-id");
//       updateCartQuantity(productId, "decrease");
//       displayCart();
//     });
//   });

//   document.querySelectorAll(".increase-quantity").forEach((button) => {
//     button.addEventListener("click", (e) => {
//       const productId = e.target.getAttribute("data-id");
//       updateCartQuantity(productId, "increase");
//       displayCart();
//     });
//   });

//   // Remove product from cart
//   document.querySelectorAll(".remove-item").forEach((button) => {
//     button.addEventListener("click", (e) => {
//       const productId = e.target.getAttribute("data-id");
//       removeProductFromCart(productId);
//       displayCart();
//     });
//   });
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


let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Function to display cart items
const displayCart = () => {
  let temp = "";
  let total = 0; // Initialize total to zero

  // If cart has items
  if (cart.length > 0) {
    cart.forEach((product) => {
      const productTotal = product.price * product.quantity; // Calculate total for each product
      total += productTotal; // Update the overall total

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
            
            <!-- Displaying product total based on quantity -->
            <div class="product-total">
              <p class="subTotal">Subtotal: $ ${productTotal.toFixed(2)}</p>
            </div>

            <button class="remove-item" data-id="${product.id}">Remove</button>
          </div>
        </div>
      </div>`;
    });

    // Display total price for the entire cart
    temp += `
    <div class="cart-total">
      <h3>Total: $ ${total.toFixed(2)}</h3>
      <button class="checkout-btn">Checkout</button>
    </div>`;
  } else {
    // If cart is empty
    temp = "<p>Your cart is empty.</p>";
  }

  // Inject the cart HTML into the page
  document.getElementById("cart-container").innerHTML = temp;

  // Add event listeners for quantity increase/decrease and remove buttons
  document.querySelectorAll(".decrease-quantity").forEach((button) => {
    button.addEventListener("click", (e) => {
      const productId = e.target.getAttribute("data-id");
      updateCartQuantity(productId, "decrease");
      displayCart();
    });
  });

  document.querySelectorAll(".increase-quantity").forEach((button) => {
    button.addEventListener("click", (e) => {
      const productId = e.target.getAttribute("data-id");
      updateCartQuantity(productId, "increase");
      displayCart();
    });
  });

  // Remove product from cart
  document.querySelectorAll(".remove-item").forEach((button) => {
    button.addEventListener("click", (e) => {
      const productId = e.target.getAttribute("data-id");
      removeProductFromCart(productId);
      displayCart();
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
  localStorage.setItem("cart", JSON.stringify(cart));
};

// Remove a product from the cart
const removeProductFromCart = (id) => {
  cart = cart.filter((product) => product.id != id);
  localStorage.setItem("cart", JSON.stringify(cart));
};

// Initial cart display
displayCart();
