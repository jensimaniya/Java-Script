let BreakingNews = JSON.parse(localStorage.getItem("BreakingNews")) || [];

const Uimaker = (BreakingNews) => {
  document.getElementById("newsList").innerHTML = " ";
  BreakingNews.map((ele, i) => {
    let title = document.createElement("h1");
    title.innerHTML = ele.title;

    let discription = document.createElement("p");
    discription.innerHTML = ele.discription;

    let category = document.createElement("p");
    category.innerHTML = ele.category;

    let img = document.createElement("img");
    img.src = ele.image;

    // deleted btn
    let btn = document.createElement("button");
    btn.innerHTML = "Delete";
    btn.addEventListener("click", () => {
      BreakingNews.splice(i, 1);
      localStorage.setItem("BreakingNews", JSON.stringify(BreakingNews));
      Uimaker(BreakingNews);
    });

    // create a div
    let div = document.createElement("div");
    div.append(img, title, discription, category, btn);
    document.getElementById("newsList").append(div);
  });
};

Uimaker(BreakingNews);
