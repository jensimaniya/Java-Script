
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



// make uiMaker
const uimaker = (products) => {
  document.getElementById("productList").innerHTML = "";
  products.map((product) => {
    let title = document.createElement("h3");
    title.innerText = product.title;

    let price = document.createElement("h5");
    price.innerText = product.price;

    // Ensure category is defined, otherwise show "Not Available"
    let category = document.createElement("h5");
    category.innerHTML = product.category ? product.category : "Not Available";

    let img = document.createElement("img");
    img.src = product.img;
    img.style.width = "150px";
    img.style.height = "150px";

    let dltBtn = document.createElement("button");
    dltBtn.innerHTML = "Delete";
    dltBtn.addEventListener("click", () => deleteData(product.id));

    let div = document.createElement("div");
    div.append(img, title, category, price, dltBtn);

    document.getElementById("productList").append(div);
  });
};




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
  


    // category filter

const FilterByCategory = (category) => {

  if (category === "all") {
    uimaker(allProducts);
    return;
  }


  let temp = allProducts.filter((ele) => ele.category && ele.category.toLowerCase() === category.toLowerCase());
  uimaker(temp);
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

