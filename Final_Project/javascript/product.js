import { cartMethods } from "../api/cart.js";
import { productMethods } from "../api/product.js";
import navbar from "../components/navbar.js";
import { isLoggedIn } from "../utils/helper.js";


document.getElementById("navbar").innerHTML = navbar();


isLoggedIn();

// IIFE
(async () => {
  let products = await productMethods.getAll();
  console.log("Fetched products: ", products);

  uiMaker(products);
  console.log(products);
  
})();

const handlecart = async (data) => {
  let res = await cartMethods.getById(data.id);

  if (!res) {
    cartMethods.post({ ...data, qty: 1 });
  }
  else {
    cartMethods.update(data.id, {qty: res.qty + 1})
  }
}

// Render product list
const uiMaker = (data) => {
  const container = document.getElementById("productList");
  container.innerHTML = "";

  data.forEach((product) => {
    const col = document.createElement("div");
    col.className = "col-lg-3 col-md-4 col-sm-6 mb-4";

    const card = document.createElement("div");
    card.className =
      "card border-0 shadow-lg rounded-lg overflow-hidden text-light";

    const imgContainer = document.createElement("div");
    imgContainer.className = "card-img-top position-relative overflow-hidden";
    const img = document.createElement("img");
    img.src = product.img;
    img.alt = product.title;
    img.className = "img-fluid w-100 rounded-3";
    img.style.height = "250px";
    img.style.objectFit = "cover";

    imgContainer.appendChild(img);

    const cardBody = document.createElement("div");
    cardBody.className = "card-body text-center p-4";

    const title = document.createElement("h5");
    title.className = "card-title text-truncate text-warning";
    title.textContent = product.title;

    const desc = document.createElement("p");
    desc.className = "card-text text-muted mb-3";
    desc.textContent = product.desc;

    const category = document.createElement("p");
    category.className = "mb-1 text-secondary";
    category.innerHTML = `<strong>Category:</strong> ${product.category}`;

    const price = document.createElement("p");
    price.className = "fw-bold text-info mb-3";
    price.textContent = `$${product.price}`;

    const footer = document.createElement("div");
    footer.className = "card-footer bg-transparent border-top-0 p-3";

    const button = document.createElement("button");
    button.className = "btn btn-danger w-100";
    button.textContent = "Add to Cart";

    
    button.addEventListener("click", () => handlecart(product));


    cardBody.appendChild(title);
    cardBody.appendChild(desc);
    cardBody.appendChild(category);
    cardBody.appendChild(price);
    footer.appendChild(button);

    card.appendChild(imgContainer);
    card.appendChild(cardBody);
    card.appendChild(footer);
    col.appendChild(card);
    container.appendChild(col);
  });
};
