let products = [];

const uiMaker = () => {
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
      btndlt.innerHTML = Item.btndlt;
      
      btndlt.addEventListener("click", () => {
          products.splice(i, 1);
          uiMaker();
      })

    let div = document.createElement("div");
    div.append(image, title, price, category, btndlt);

    document.getElementById("productlist").append(div);
  });
};

const getValue = (id) => {
  return document.getElementById(id).value;
};

let product = JSON.parse(localStorage.getItem("products")) || [];

const handleSubmit = (e) => {
  e.preventDefault();

  let product = {
    title: getValue("title"),
    price: getValue("price"),
    image: getValue("image"),
    category: getValue("category"),
  };

  products.push(product);
    // console.log(products);
    localStorage.setItem("products", JSON.stringify(product));

  uiMaker();
};

document.getElementById("product").addEventListener("submit", handleSubmit);
