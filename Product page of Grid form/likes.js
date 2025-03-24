// Likes na dataa store kravya
let Like = JSON.parse(localStorage.getItem("Likes")) || [];

const Uimaker = (Like) => {
  document.getElementById("like").innerHTML = " ";
  Like.map((ele, i) => {
    let title = document.createElement("h1");
    title.innerHTML = ele.title;

    let price = document.createElement("p");
    price.innerHTML = `Rs.${ele.price}`;
    let category = document.createElement("p");
    category.innerHTML = ele.category;

    let img = document.createElement("img");
    img.src = ele.image;

    // deleted btn
    let btn = document.createElement("button");
    btn.innerHTML = "Delete";
    btn.addEventListener("click", () => {
      Like.splice(i, 1);
      localStorage.setItem("Likes", JSON.stringify(Like));
      Uimaker(Like);
    });

    // create a div
    let div = document.createElement("div");
    div.append(img, title, price,category, btn);
    document.getElementById("like").append(div);
  });
};

Uimaker(Like);
