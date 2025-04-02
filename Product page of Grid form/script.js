// create an Array for data storing
let products = JSON.parse(localStorage.getItem("products")) || [];

// create an array for Like button
let Like = JSON.parse(localStorage.getItem("Likes")) || [];

const uiMaker = (products) => {
  document.getElementById("productlist").innerHTML = "";
  products.map((Item, i) => {
    let image = document.createElement("img");
    image.src = Item.image;

    let title = document.createElement("h1");
    title.innerHTML = Item.title;

    let price = document.createElement("p");
    price.innerHTML = `Rs. ${Item.price}`;

    let category = document.createElement("p");
    category.innerHTML = Item.category;

    // create delete button
    let btndlt = document.createElement("button");
    btndlt.innerHTML = "Delete";
    btndlt.style.width = "50px";
    let p = document.createElement("p");
    p.append(btndlt);

    btndlt.addEventListener("click", () => {
      products.splice(i, 1);
      uiMaker(products);
      localStorage.setItem("products", JSON.stringify(products));
    });

    //create  LikeButtons
    let LikeButtons = document.createElement("button");
    LikeButtons.innerHTML = "Like";
    LikeButtons.style.width = "60px";

    // Find by Id
    const IsExists = (id) => {
      for (let i = 0; i < Like.length; i++) {
        if (Like[i].id == id) {
          return true;
        }
      }
      return false;
    };

    LikeButtons.addEventListener("click", () => {
      if (IsExists(Item.id)) {
        alert("alery Exists this Product");
      } else {
        Like.push(Item);
        localStorage.setItem("Likes", JSON.stringify(Like));
        alert("Your Product is Added");
      }
    });

    // create a div
    let div = document.createElement("div");
    div.append(image, title, price, category, p, LikeButtons);

    document.getElementById("productlist").append(div);
  });
};

uiMaker(products);

// Fome ma value input matenu function
const getValue = (id) => {
  return document.getElementById(id).value;
};

const handleSubmit = (e) => {
  e.preventDefault();

  let product = {
    title: getValue("title"),
    price: getValue("price"),
    image: getValue("image"),
    category: getValue("category"),
    id: Date.now(),
  };

  // object array ma push kravyo
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

// category filter
const FilterByCategory = (category) => {
  if (category == "all") {
    uiMaker(products);
    return;
  }

  let temp = products.filter((ele) => ele.category == category);
  uiMaker(temp);
};

document
  .getElementById("kids")
  .addEventListener("click", () => FilterByCategory("kids"));

document
  .getElementById("women")
  .addEventListener("click", () => FilterByCategory("women"));

document
  .getElementById("men")
  .addEventListener("click", () => FilterByCategory("men"));

document
  .getElementById("all")
  .addEventListener("click", () => FilterByCategory("all"));

// serching
const Serching = (value) => {
  let temp = products.filter((ele) =>
    ele.title.toLowerCase().includes(value.toLowerCase())
  );
  uiMaker(temp);
};

document.getElementById("search").addEventListener("input", () => {
  let value = getValue("search");
  Serching(value);
});
