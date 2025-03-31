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
    <div class="cart-item  col-lg-3 col-md-6 py-3 ms-5">
      

      <div class="box">
        <div class="ImgDiv"><img src=${item.img} alt="" class="img"> </div>
        <div class="TitleDiv"><h3 class="title">${item.title}</h3></div>
        <div class="description"><p class="description overflow-auto">${item.description}</p></div>
        <div class="PriceDiv"> <p class="price"> $ ${item.price} </p></div>
        <p class="rate">${item.category}</p>
       <div class="BTNDiv"> <button class="btn btn-danger" onclick="removeFromCart(${index})">DELETE</button>

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
