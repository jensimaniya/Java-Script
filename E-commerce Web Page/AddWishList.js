// Get the wishlist from localStorage
let Wishlist = JSON.parse(localStorage.getItem("Wishlist")) || [];

// Function to display the wishlist products
const displayWishlist = (wishlist) => {
  let temp = " ";
  if (wishlist.length === 0) {
    temp = "<p>Your wishlist is empty!</p>";
  } else {
    for (let i = 0; i < wishlist.length; i++) {
      temp += ` 
            <div class="col-lg-3 col-md-6 py-3" id="product-${wishlist[i].id}">
                <div class="box">
                    <div class="ImgDiv"><img src="${wishlist[i].img}" alt="" class="img"> </div>
                    <div class="TitleDiv"><h3 class="title">${wishlist[i].title}</h3></div>
                    <div class="description"><p class="description overflow-auto">${wishlist[i].description}</p></div>
                    <div class="PriceDiv"> <p class="price"> $ ${wishlist[i].price} </p></div>
                    <p class="rate">${wishlist[i].category}</p>
                    <div class="BTNDiv"><button class="BTNbuy">Buy</button></div>
                    <div class="WishListDIV">
                        <button class="RemoveFromWishList" data-id="${wishlist[i].id}">Remove from Wishlist</button>
                    </div>
                </div>
            </div>`;
    }
  }

  document.getElementById("wishlist-container").innerHTML = temp;

  // Add event listeners to the "Remove from Wishlist" buttons
  const removeButtons = document.querySelectorAll(".RemoveFromWishList");
  removeButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const productId = e.target.getAttribute("data-id");

      // Remove the product from the wishlist array
      Wishlist = Wishlist.filter((product) => product.id != productId);

      // Update localStorage with the modified wishlist
      localStorage.setItem("Wishlist", JSON.stringify(Wishlist));

      // Remove the item from the DOM immediately without refreshing the page
      const productElement = document.getElementById(`product-${productId}`);
      if (productElement) {
        productElement.remove();
      }

      // If the wishlist is empty, display the empty message
      if (Wishlist.length === 0) {
        document.getElementById("wishlist-container").innerHTML =
          "<p>Your wishlist is empty!</p>";
      }
    });
  });
};

// Ensure the wishlist is displayed immediately on page load
window.onload = function () {
  // Fetch from localStorage and call displayWishlist only when the page loads
  Wishlist = JSON.parse(localStorage.getItem("Wishlist")) || [];
  displayWishlist(Wishlist); // Show the wishlist on page load
};
