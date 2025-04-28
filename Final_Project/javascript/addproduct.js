import { productMethods } from "../api/product.js";
import navbar from "../components/navbar.js";
import { getValue, isLoggedIn } from "../utils/helper.js";
document.getElementById("navbar").innerHTML = navbar();

isLoggedIn();

const handleSubmit = (e) => {
  e.preventDefault();
  const product = {
    title: getValue("productName"),
    price: getValue("productPrice"),
    desc: getValue("productDescription"),
    category: getValue("productCategory"),
    img: getValue("productImage"),
  };
  productMethods.post(product);

  console.log(product);
};

document
  .getElementById("addProductForm")
  .addEventListener("submit", handleSubmit);
