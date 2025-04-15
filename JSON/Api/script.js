// post method call
const createProduct = async (product) => {
  let req = await fetch("http://localhost:3000/products", {
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
    uimaker(res);
  } catch (error) {
    console.log(error.message);
  }
};

getData();

// form ma value leva mate
const handleSubmit = (e) => {
  e.preventDefault();
  let products = {
    title: document.getElementById("title").value,
    price: document.getElementById("price").value,
    img: document.getElementById("img").value,
  };

  createProduct(products);
};

// make uiMaker
const uimaker = (products) => {
  products.map((product) => {
    let title = document.createElement("h3");
    title.innerText = product.title;

    let price = document.createElement("h5");
    price.innerText = product.price;

    let img = document.createElement("img");
    img.src = product.img;
    img.style.width = "150px";
    img.style.height = "150px";

    let div = document.createElement("div");
    div.append(img, title, price);

    document.getElementById("productList").append(div);
  });
};

// accsing form
document.getElementById("productdata").addEventListener("submit", handleSubmit);
