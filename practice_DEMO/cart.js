let cart = JSON.parse(localStorage.getItem("cart")) || [];

const displayCart = () => {
  let cartItems = "";
  cart.map((item) => {
    cartItems += `
                    <div>
                        <img src="${item.img}" style="width: 50px;">
                        <p>${item.title}</p>
                        <p>Price: $${item.price}</p>
                        <p>Quantity: <span id="quantity-${item.id}">${item.quantity}</span></p>
                        <button onclick="updateQuantity(${item.id}, -1)">-</button>
                        <button onclick="updateQuantity(${item.id}, 1)">+</button>
                    </div>
                `;
  });
  document.getElementById("cartShow").innerHTML = cartItems;
};

const updateQuantity = (productId, change) => {
  let product = cart.find((item) => item.id === productId);
  if (product) {
    product.quantity += change;
    if (product.quantity <= 0) {
      cart = cart.filter((item) => item.id !== productId); // Remove product if quantity is 0
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
  }
};
displayCart();
