
// let allProducts = [];
// let id = -1;

// // Create product
// const createProduct = async (product) => {
//   await fetch("https://fakestoreapi.com/products", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(product),
//   });

//   // Simulate adding to UI
//   product.id = Math.floor(Math.random() * 10000); // fake id
//   allProducts.push(product);
//   uimaker(allProducts);
// };

// // Get all products
// const getData = async () => {
//   try {
//     let req = await fetch("https://fakestoreapi.com/products");
//     let res = await req.json();
//     allProducts = res;
//     uimaker(allProducts);
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// // Delete product (simulate)
// const deleteData = async (idToDelete) => {
//   await fetch(`https://fakestoreapi.com/products/${idToDelete}`, {
//     method: "DELETE",
//   });

//   // Remove from local array
//   allProducts = allProducts.filter((product) => product.id !== idToDelete);
//   uimaker(allProducts);
// };

// // Set form values
// const setValue = (inputId, value) => {
//   document.getElementById(inputId).value = value;
// };

// // Update product (simulate)
// const update = async (data) => {
//   await fetch(`https://fakestoreapi.com/products/${id}`, {
//     method: "PUT",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(data),
//   });

//   // Update local data
//   allProducts = allProducts.map((product) =>
//     product.id === id ? { ...product, ...data } : product
//   );

//   id = -1;
//   setValue("type", "submit");
//   uimaker(allProducts);
// };

// // Fill form for update
// const addToform = (product) => {
//   setValue("title", product.title);
//   setValue("price", product.price);
//   setValue("img", product.image); // correct key
//   id = product.id;
//   setValue("type", "Update");
// };

// // Handle form submission
// const handleSubmit = (e) => {
//   e.preventDefault();

//   let product = {
//     title: document.getElementById("title").value,
//     price: parseFloat(document.getElementById("price").value),
//     image: document.getElementById("img").value,
//   };

//   if (id === -1) {
//     createProduct(product);
//   } else {
//     update(product);
//   }

//   document.getElementById("productdata").reset();
// };

// // Render UI
// const uimaker = (products) => {
//   document.getElementById("productList").innerHTML = "";
//   products.forEach((product) => {
//     let title = document.createElement("h3");
//     title.innerText = product.title;

//     let price = document.createElement("h5");
//     price.innerText = `₹ ${product.price}`;

//     let img = document.createElement("img");
//     img.src = product.image;
//     img.style.width = "150px";
//     img.style.height = "150px";

//     let dltBtn = document.createElement("button");
//     dltBtn.innerText = "Delete";
//     dltBtn.addEventListener("click", () => deleteData(product.id));

//     let updateBtn = document.createElement("button");
//     updateBtn.innerText = "Update";
//     updateBtn.addEventListener("click", () => addToform(product));

//     let div = document.createElement("div");
//     div.append(img, title, price, dltBtn, updateBtn);
//     div.style.border = "1px solid black";
//     div.style.padding = "10px";
//     div.style.margin = "10px";
//     div.style.width = "200px";

//     document.getElementById("productList").appendChild(div);
//   });
// };

// // Search functionality
// const search = (value) => {
//   let filtered = allProducts.filter((p) =>
//     p.title.toLowerCase().includes(value.toLowerCase())
//   );
//   uimaker(filtered);
// };

// document.getElementById("search").addEventListener("input", (e) => {
//   search(e.target.value);
// });

// // Sorting functionality
// const handleSort = (order) => {
//   let sorted = [...allProducts];
//   if (order === "lth") {
//     sorted.sort((a, b) => a.price - b.price);
//   } else {
//     sorted.sort((a, b) => b.price - a.price);
//   }
//   uimaker(sorted);
// };

// document
//   .getElementById("lth")
//   .addEventListener("click", () => handleSort("lth"));
// document
//   .getElementById("htl")
//   .addEventListener("click", () => handleSort("htl"));

// // Form event
// document.getElementById("productdata").addEventListener("submit", handleSubmit);

// // Initial load
// getData();



let allProducts = [];
let id = -1;

// Create product
const createProduct = async (product) => {
  await fetch("https://fakestoreapi.com/products", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  });

  // Simulate adding to UI
  product.id = Math.floor(Math.random() * 10000); // fake id
  allProducts.push(product);
  uimaker(allProducts);
};

// Get all products
const getData = async () => {
  try {
    let req = await fetch("https://fakestoreapi.com/products");
    let res = await req.json();
    allProducts = res;
    uimaker(allProducts);
  } catch (error) {
    console.log(error.message);
  }
};

// Delete product (simulate)
const deleteData = async (idToDelete) => {
  await fetch(`https://fakestoreapi.com/products/${idToDelete}`, {
    method: "DELETE",
  });

  // Remove from local array
  allProducts = allProducts.filter((product) => product.id !== idToDelete);
  uimaker(allProducts);
};

// Set form values
const setValue = (inputId, value) => {
  document.getElementById(inputId).value = value;
};

// Update product (simulate)
const update = async (data) => {
  await fetch(`https://fakestoreapi.com/products/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  // Update local data
  allProducts = allProducts.map((product) =>
    product.id === id ? { ...product, ...data } : product
  );

  id = -1;
  setValue("type", "submit");
  uimaker(allProducts);
};

// Fill form for update
const addToform = (product) => {
  setValue("title", product.title);
  setValue("price", product.price);
  setValue("img", product.image);
  setValue("category", product.category || "");
  id = product.id;
  setValue("type", "Update");
};

// Handle form submission
// const handleSubmit = (e) => {
//   e.preventDefault();

//   let product = {
//     title: document.getElementById("title").value,
//     price: parseFloat(document.getElementById("price").value),
//     image: document.getElementById("img").value,
//     category: document.getElementById("category").value,
//   };

//   if (id === -1) {
//     createProduct(product);
//   } else {
//     update(product);
//   }

//   document.getElementById("productdata").reset();
// };



// Handle form submission
const handleSubmit = (e) => {
  e.preventDefault();

  let product = {
    title: document.getElementById("title").value,
    price: parseFloat(document.getElementById("price").value),
    image: document.getElementById("img").value,
    category: document.getElementById("category").value,  // Get category from select
  };

  if (id === -1) {
    createProduct(product);
  } else {
    update(product);
  }

  document.getElementById("productdata").reset();
};


// Render UI
const uimaker = (products) => {
  document.getElementById("productList").innerHTML = "";
  products.forEach((product) => {
    let title = document.createElement("h3");
    title.innerText = product.title;

    let price = document.createElement("h5");
    price.innerText = `₹ ${product.price}`;

    let category = document.createElement("p");
    category.innerText = `Category: ${product.category || "N/A"}`;
    category.style.fontSize = "14px";
    category.style.color = "#666";

    let img = document.createElement("img");
    img.src = product.image;
    img.style.width = "150px";
    img.style.height = "150px";

    let dltBtn = document.createElement("button");
    dltBtn.innerText = "Delete";
    dltBtn.addEventListener("click", () => deleteData(product.id));

    let updateBtn = document.createElement("button");
    updateBtn.innerText = "Update";
    updateBtn.addEventListener("click", () => addToform(product));

    let div = document.createElement("div");
    div.append(img, title, price, category, dltBtn, updateBtn);
    div.style.border = "1px solid black";
    div.style.padding = "10px";
    div.style.margin = "10px";
    div.style.width = "200px";

    document.getElementById("productList").appendChild(div);
  });
};

// Search functionality
const search = (value) => {
  let filtered = allProducts.filter(
    (p) =>
      p.title.toLowerCase().includes(value.toLowerCase()) ||
      p.category?.toLowerCase().includes(value.toLowerCase())
  );
  uimaker(filtered);
};

document.getElementById("search").addEventListener("input", (e) => {
  search(e.target.value);
});

// Sorting functionality
const handleSort = (order) => {
  let sorted = [...allProducts];
  if (order === "lth") {
    sorted.sort((a, b) => a.price - b.price);
  } else {
    sorted.sort((a, b) => b.price - a.price);
  }
  uimaker(sorted);
};

document
  .getElementById("lth")
  .addEventListener("click", () => handleSort("lth"));
document
  .getElementById("htl")
  .addEventListener("click", () => handleSort("htl"));

// Form event
document.getElementById("productdata").addEventListener("submit", handleSubmit);

// Initial load
getData();
