let products = JSON.parse(localStorage.getItem("products")) || [];

const uiMaker = (products) => {
  document.getElementById("productlist").innerHTML = "";
  products.map((Item, i) => {
    let image = document.createElement("img");
    image.src = Item.image;

    let title = document.createElement("h1");
    title.innerHTML = Item.title;

    let price = document.createElement("p");
    price.innerHTML = Item.price;

    let category = document.createElement("p");
    category.innerHTML = Item.category;

    let btndlt = document.createElement("button");
    btndlt.innerHTML = "Delete";
    let p = document.createElement("p");
    p.append(btndlt);

    btndlt.addEventListener("click", () => {
      products.splice(i, 1);
      uiMaker();
      let product = JSON.parse(localStorage.getItem("products")) || [];
    });

    let div = document.createElement("div");
    div.append(image, title, price, category, p);

    document.getElementById("productlist").append(div);
  });
};

const getValue = (id) => {
  return document.getElementById(id).value;
};

uiMaker(products);

const handleSubmit = (e) => {
  e.preventDefault();

  let product = {
    title: getValue("title"),
    price: getValue("price"),
    image: getValue("image"),
    category: getValue("category"),
  };

  products.push(product);

  localStorage.setItem("products", JSON.stringify(products));

  uiMaker(products);
};

document.getElementById("product").addEventListener("submit", handleSubmit);

// for sorting
const handleSort = (orderby) => {
  if (orderby == "lth") {
    let temp = products.sort((a, b) => a.price - b.price);
    uiMaker(temp);
  } else {
    let temp = products.sort((a, b) => b.price - a.price);
    uiMaker(temp);
  }
};
document
  .getElementById("htl")
  .addEventListener("click", () => handleSort("htl"));
document
  .getElementById("lth")
  .addEventListener("click", () => handleSort("lth"));
