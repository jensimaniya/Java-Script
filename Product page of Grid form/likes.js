let Like = JSON.parse(localStorage.getItem("Likes")) || [];

const Uimaker = (Like) => {
  document.getElementById("like").innerHTML = " ";
  Like.map((ele, i) => {
    let title = document.createElement("p");
    title.innerHTML = ele.title;

    let price = document.createElement("p");
    price.innerHTML = ele.price;

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
    let div = document.createElement("div");
    div.append(img, title, price, btn);
    document.getElementById("like").append(div);
  });
};

Uimaker(Like);
