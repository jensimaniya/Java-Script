let Wishlist = JSON.parse(localStorage.getItem("Wishlist")) || [];

const displayCart = () => {
  let cartContainer = document.getElementById("cart-items");
  let temp = "";

  // Check if the Wishlist is empty
  if (Wishlist.length === 0) {
    cartContainer.innerHTML = "<p>Your cart is empty.</p>";
    return;
  }

  // Display Wishlist items
  cartContainer.innerHTML = Wishlist.map(
    (item, index) => `
    <div class="cart-item">
      <div class="col-lg-4 col-md-6 py-3">
        <div class="box">
          <div class="flex"><img src="${item.img}" alt="" class="img-fluid im"></div>
          <div class="flex"><h3 class="ti">${item.title}</h3></div>
          <div class="flex"><p class="des">${item.description}</p></div>
          <div class="flex"><p class="ti1">$${item.price}</p></div>
          <div class="flex"><p class="ti1">${item.category}</p></div>
          <button class="btn btn-danger" onclick="removeFromCart(${index})">DELETE</button>
        </div>
      </div>
    </div>
  `
  ).join("");
};

// Function to remove an item from the Wishlist
const removeFromCart = (index) => {
  Wishlist.splice(index, 1); // Remove the item at the given index
  localStorage.setItem("Wishlist", JSON.stringify(Wishlist)); // Save the updated Wishlist back to localStorage
  displayCart(); // Re-render the cart to reflect the changes
};

// Display cart items when the page loads
displayCart();
