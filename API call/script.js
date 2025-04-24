// let data = [];

// create an array for Like button
let Like = JSON.parse(localStorage.getItem("Likes")) || [];

const uiMaker = (data) => {
  document.getElementById("container").innerHTML = "";

  data.map((Item) => {
    let image = document.createElement("img");
    image.src = Item.image;

    let id = document.createElement("h3");
    id.innerHTML = Item.id;

    let title = document.createElement("h4");
    title.innerHTML = Item.title;

    let price = document.createElement("p");
    price.innerHTML = `Rs. ${Item.price}`;

    let category = document.createElement("p");
    category.innerHTML = Item.category;

    let rate = document.createElement("h5");
    rate.innerHTML = Item.rating?.rate || "No rating";

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

    let div = document.createElement("div");
    div.append(image, id, title, price, category, rate, LikeButtons);

    document.getElementById("container").append(div);
  });
};

const getData = async () => {
  try {
    let req = await fetch("https://fakestoreapi.com/products");
    data = await req.json();
    uiMaker(data);
  } catch (error) {
    console.log(error.message);
  }
};

getData();

// Filter Function
const handleFilter = (category) => {
  if (category === "all") {
    uiMaker(data);
    return;
  } else {
    let filteredData = data.filter((ele) => ele.category === category);
    uiMaker(filteredData);
  }
};

// Event Listeners for Category Buttons
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

// Search Function
const searching = (value) => {
  let filteredData = data.filter((ele) =>
    ele.title.toLowerCase().includes(value.toLowerCase())
  );
  uiMaker(filteredData);
};

document.getElementById("search").addEventListener("input", () => {
  let value = document.getElementById("search").value;
  searching(value);
});
