let Like = JSON.parse(localStorage.getItem("Like")) || [];

// Function to handle UI
const uiMaker = (data) => {
  let temp = "";
  data.map((Item) => {
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
        <button class="likeBTN" data-id="${Item.id}">Like</button>

      </div>
    `;
  });

  document.getElementById("container").innerHTML = temp;

  // Find by Id
  const IsExists = (id) => {
    for (let i = 0; i < Like.length; i++) {
      if (Like[i].id == id) {
        return true;
      }
    }
    return false;
  };

  let LikeButtons = document.querySelector(".likeBTN");
  
  LikeButtons.addEventListener("click", () => {
    if (IsExists(data.id)) {
      console.log("alreay exists procucts");

      //  alert("alery Exists this Product");
    } else {
      Like.push(data);
      localStorage.setItem("Like", JSON.stringify(Like));
      console.log("Your Product is Added");

      //  alert("Your Product is Added");
    }
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

// Function to filter products by category
const handleFilter = (category) => {
  if (category === "all") {
    uiMaker(data);
    return;
  }
  let filteredData = data.filter((ele) => ele.category === category);
  uiMaker(filteredData);
};

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
  let filteredData = data.filter((ele) =>
    ele.title.toLowerCase().includes(value.toLowerCase())
  );
  uiMaker(filteredData);
};

document.getElementById("search").addEventListener("input", () => {
  let value = document.getElementById("search").value;
  searching(value);
});
