// let Like = JSON.parse(localStorage.getItem("Like")) || [];

// // Function to handle UI rendering
// const uiMaker = (data) => {
//   let temp = "";
//   data.map((Item) => {
//     temp += `
//       <div class="col-lg-3 box">
//         <img src="${Item.image}" alt="" class="img"/>
//         <h3>${Item.id}</h3>
//         <h3>${Item.title}</h3>
//         <h3>${Item.category}</h3>
//         <p>${Item.price}</p>
//         <p class="${Item.rating.rate > 3 ? "green" : "red"}">${
//       Item.rating.rate
//     }</p>
//         <button class="likeBTN" data-id="${Item.id}">Like</button>



//       </div>
//     `;
//   });

//   document.getElementById("container").innerHTML = temp;

//   const addToCartButtons = document.querySelectorAll(".likeBTN");
//   addToCartButtons.forEach((button) => {
//     button.addEventListener("click", (e) => {
//       const productId = e.target.getAttribute("data-id");
//       const product = products.find((p) => p.id == productId);

//       if (isProductInCart(Item.id)) {
//         updateCartQuantity(Item.id);
//       } else {
//         cart.push({ ...product, quantity: 1 });
//         localStorage.setItem("Like", JSON.stringify(Like));
//         alert(`${Item.title} has been added to your cart!`);
//       }
//     });
//   });
// };
// const isProductInCart = (id) => {
//   return cart.some((product) => product.id == id);
// };

// // Update the quantity of a product in the cart
// const updateCartQuantity = (id) => {
//   cart = cart.map((product) => {
//     if (product.id == id) {
//       product.quantity += 1;
//     }
//     return product;
//   });
//   localStorage.setItem("cart", JSON.stringify(cart));
//   alert("Quantity updated in your cart!");
// };

// const getData = async () => {
//   try {
//     let req = await fetch("https://fakestoreapi.com/products");
//     data = await req.json();
//     uiMaker(data);
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// getData();

// // Function to filter products by category
// const handleFilter = (category) => {
//   if (category === "all") {
//     uiMaker(data);
//     return;
//   }
//   let filteredData = data.filter((ele) => ele.category === category);
//   uiMaker(filteredData);
// };

// document
//   .getElementById("mens-clothing")
//   .addEventListener("click", () => handleFilter("men's clothing"));

// document
//   .getElementById("jwellry")
//   .addEventListener("click", () => handleFilter("jewelery"));

// document
//   .getElementById("electronics")
//   .addEventListener("click", () => handleFilter("electronics"));

// document
//   .getElementById("womencloth")
//   .addEventListener("click", () => handleFilter("women's clothing"));

// document
//   .getElementById("all")
//   .addEventListener("click", () => handleFilter("all"));

// // Function to search products by title
// const searching = (value) => {
//   let filteredData = data.filter(
//     (ele) => ele.title.toLowerCase().includes(value.toLowerCase()) // Case insensitive search
//   );
//   uiMaker(filteredData);
// };

// document.getElementById("search").addEventListener("input", () => {
//   let value = document.getElementById("search").value;
//   searching(value);
// });




let Like = JSON.parse(localStorage.getItem("Like")) || [];
let cart = JSON.parse(localStorage.getItem("cart")) || []; // Initialize the cart

// Function to handle UI rendering
const uiMaker = (data) => {
  let temp = "";

  // Loop through products and create HTML for each item
  data.map((Item) => {
    const isLiked = Like.some((likedItem) => likedItem.id === Item.id); // Check if the item is liked

    temp += `
      <div class="col-lg-3 box">
        <img src="${Item.image}" alt="" class="img"/>
        <h3>${Item.id}</h3>
        <h3>${Item.title}</h3>
        <h3>${Item.category}</h3>
        <p>${Item.price}</p>
        <p class="${Item.rating.rate > 3 ? "green" : "red"}">${
      Item.rating.rate
    }</p>
        <button class="likeBTN" data-id="${Item.id}">
          ${isLiked ? "Unlike" : "Like"}
        </button>
      </div>
    `;
  });

  // Inject the generated HTML into the container
  document.getElementById("container").innerHTML = temp;

  // Add event listeners to the "Like" buttons
  const addToCartButtons = document.querySelectorAll(".likeBTN");
  addToCartButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const productId = e.target.getAttribute("data-id");
      const product = data.find((p) => p.id == productId);

      // Toggle like/unlike
      if (Like.some((likedItem) => likedItem.id === product.id)) {
        // Remove product from "Like" list
        Like = Like.filter((likedItem) => likedItem.id !== product.id);
        e.target.textContent = "Like"; // Change button text to "Like"
        alert(`${product.title} has been removed from your liked list.`);
      } else {
        // Add product to "Like" list
        Like.push(product);
        e.target.textContent = "Unlike"; // Change button text to "Unlike"
        alert(`${product.title} has been added to your liked list.`);
      }

      // Save updated "Like" array to localStorage
      localStorage.setItem("Like", JSON.stringify(Like));
    });
  });
};

// Fetch product data
const getData = async () => {
  try {
    let req = await fetch("https://fakestoreapi.com/products");
    data = await req.json();
    uiMaker(data); // Render products after fetching
  } catch (error) {
    console.log(error.message);
  }
};

// Call getData function to fetch and render products
getData();

// Function to filter products by category
const handleFilter = (category) => {
  if (category === "all") {
    uiMaker(data); // Show all products
    return;
  }

  const filteredData = data.filter((product) => product.category === category);
  uiMaker(filteredData); // Render filtered products
};

// Category filter event listeners
document
  .getElementById("mens-clothing")
  .addEventListener("click", () => handleFilter("men's clothing"));
document
  .getElementById("jwellry")
  .addEventListener("click", () => handleFilter("jewelery"));
document
  .getElementById("electronics")
  .addEventListener("click", () => handleFilter("electronics"));
document
  .getElementById("womencloth")
  .addEventListener("click", () => handleFilter("women's clothing"));
document
  .getElementById("all")
  .addEventListener("click", () => handleFilter("all"));

// Function to search products by title
const searching = (value) => {
  const filteredData = data.filter(
    (product) => product.title.toLowerCase().includes(value.toLowerCase()) // Case insensitive search
  );
  uiMaker(filteredData); // Render search results
};

// Search input event listener
document.getElementById("search").addEventListener("input", () => {
  const value = document.getElementById("search").value;
  searching(value); // Perform search when input changes
});
