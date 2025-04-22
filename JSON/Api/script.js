// let allProducts = [];
let id = -1;

// post method call
const createProduct = async (product) => {
  await fetch("http://localhost:3000/products", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  });
};

// data get karva mate
const getData = async () => {
  try {
    let req = await fetch("http://localhost:3000/products");
    let res = await req.json();
    allProducts = res;
    uimaker(allProducts);
  } catch (error) {
    console.log(error.message);
  }
};

getData();

// delete method

const deleteData = async (id) => {
  await fetch(`http://localhost:3000/products/${id}`, {
    method: "DELETE",
  });
};

//set value function

const setValue = (id, value) => {
  document.getElementById(id).value = value;
};

const update = async (data) => {
  await fetch(`http://localhost:3000/products/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
};

const addToform = (data) => {
  setValue("title", data.title);
  setValue("price", data.price);
  setValue("img", data.img);
  id = data.id;
  setValue("type", "update");
};

// form ma value leva mate
const handleSubmit = (e) => {
  e.preventDefault();
  let products = {
    title: document.getElementById("title").value,
    price: document.getElementById("price").value,
    img: document.getElementById("img").value,
  };

  // createProduct(products);
  if (id == -1) {
    createProduct(products);
  } else {
    update(products);
  }
};

// make uiMaker
const uimaker = (products) => {
  document.getElementById("productList").innerHTML = "";
  products.map((product) => {
    let title = document.createElement("h3");
    title.innerText = product.title;

    let price = document.createElement("h5");
    price.innerText = product.price;

    let img = document.createElement("img");
    img.src = product.img;
    img.style.width = "150px";
    img.style.height = "150px";

    let dltBtn = document.createElement("button");
    dltBtn.innerHTML = "Delete";
    dltBtn.addEventListener("click", () => deleteData(product.id));

    let updateBtn = document.createElement("button");
    updateBtn.innerHTML = "Update";
    updateBtn.addEventListener("click", () => addToform(product));

    let div = document.createElement("div");
    div.append(img, title, price, dltBtn, updateBtn);

    document.getElementById("productList").append(div);
  });
};

// accsing form
document.getElementById("productdata").addEventListener("submit", handleSubmit);

// for serching
const Serching = (value) => {
  let temp = allProducts.filter((ele) =>
    ele.title.toLowerCase().includes(value.toLowerCase())
  );
  uimaker(temp);
};
document.getElementById("search").addEventListener("input", (e) => {
  let value = e.target.value;
  Serching(value);
});

// for sorting
const handleSort = (orderby) => {
  if (orderby == "lth") {
    let temp = allProducts.sort((a, b) => a.price - b.price);
    uimaker(temp);
  } else {
    let temp = allProducts.sort((a, b) => b.price - a.price);
    uimaker(temp);
  }
};

document
  .getElementById("htl")
  .addEventListener("click", () => handleSort("htl"));
document
  .getElementById("lth")
  .addEventListener("click", () => handleSort("lth"));
