// // Likes na dataa store kravya
// let Like = JSON.parse(localStorage.getItem("Likes")) || [];

// const uiMaker = (data) => {
//   document.getElementById("like").innerHTML = "";
//   data.map((Item, i) => {
//     let image = document.createElement("img");
//     image.src = Item.image;

//     let id = document.createElement("h3");
//     id.innerHTML = Item.id;

//     let title = document.createElement("h4");
//     title.innerHTML = Item.title;

//     let price = document.createElement("p");
//     price.innerHTML = `Rs. ${Item.price}`;

//     let category = document.createElement("p");
//     category.innerHTML = Item.category;

//     let rate = document.createElement("h5");
//     rate.innerHTML = Item.rating.rate;

//     // deleted btn
//     let btn = document.createElement("button");
//     btn.innerHTML = "Delete";
//     btn.addEventListener("click", () => {
//       Like.splice(i, 1);
//       localStorage.setItem("Likes", JSON.stringify(Like));
//       uiMaker(Like);
//     });

//     // create a div
//     let div = document.createElement("div");
//     div.append(image, id, title, price, category, rate, btn);

//     document.getElementById("like").append(div);
//   });
// };

// uiMaker(Like);



let Like = JSON.parse(localStorage.getItem("Likes")) || [];

const uiMaker = (data) => {
  document.getElementById("like").innerHTML = "";

  data.forEach((Item) => {
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

    let btn = document.createElement("button");
    btn.innerHTML = "Delete";

    // ✅ Delete using filter based on id (not index)
    btn.addEventListener("click", () => {
      Like = Like.filter((ele) => ele.id !== Item.id);
      localStorage.setItem("Likes", JSON.stringify(Like));
      uiMaker(Like);
    });

    let div = document.createElement("div");
    div.append(image, id, title, price, category, rate, btn);

    document.getElementById("like").append(div);
  });
};

uiMaker(Like);

