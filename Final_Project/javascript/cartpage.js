// /javascript/cartpage.js
import { cartMethods } from "../api/cart.js";
import navbar from "../components/navbar.js";
import { isLoggedIn } from "../utils/helper.js";


document.getElementById("navbar").innerHTML = navbar();
isLoggedIn();



// Elements
const cartList = document.getElementById("cartList");
const totalPriceElement = document.getElementById("totalPrice");

// Load cart items
(async () => {
  const cartItems = await cartMethods.getAll();
  renderCart(cartItems);
})();

function renderCart(items) {
  cartList.innerHTML = "";

  if (!items.length) {
    cartList.innerHTML = `<p class="text-center text-muted">Your cart is empty.</p>`;
    totalPriceElement.textContent = "$0.00";
    return;
  }

  // Use reduce to calculate total
  const total = items.reduce((acc, item) => acc + item.qty * item.price, 0);

  // Use map to create elements and append them directly
  const itemElements = items.map((item) => {
    const col = document.createElement("div");
    col.className = "col-md-6 mb-3";

    const card = document.createElement("div");
    card.className = "card shadow-sm";

    const cardBody = document.createElement("div");
    cardBody.className = "card-body d-flex align-items-center";

    const img = document.createElement("img");
    img.src = item.img;
    img.alt = item.title;
    img.className = "rounded me-3";
    img.style.width = "80px";
    img.style.height = "80px";
    img.style.objectFit = "cover";

    const content = document.createElement("div");

    const title = document.createElement("h5");
    title.textContent = item.title;

    const qty = document.createElement("p");
    qty.textContent = `Qty: ${item.qty}`;

    const price = document.createElement("p");
    price.className = "fw-bold text-success";
    price.textContent = `$${(item.price * item.qty).toFixed(2)}`;

    content.appendChild(title);
    content.appendChild(qty);
    content.appendChild(price);

    cardBody.appendChild(img);
    cardBody.appendChild(content);
    card.appendChild(cardBody);
    col.appendChild(card);

    return col;
  });

  // Append all items to cartList in one go
  cartList.append(...itemElements);

  // Update total price
  totalPriceElement.textContent = `$${total.toFixed(2)}`;
}

