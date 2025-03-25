let HomePageShow = JSON.parse(localStorage.getItem("HomePageShow")) || [];

const Uimaker = (HomePageShow) => {
  document.getElementById("newsList").innerHTML = " ";
  HomePageShow.map((ele, i) => {
    let title = document.createElement("h1");
    title.innerHTML = ele.title;

    let discription = document.createElement("p");
    discription.innerHTML = ele.description;

    let category = document.createElement("p");
    category.innerHTML = ele.category;

    let img = document.createElement("img");
    img.src = ele.image;

    // deleted btn
    let btn = document.createElement("button");
    btn.innerHTML = "Delete";
    btn.addEventListener("click", () => {
      HomePageShow.splice(i, 1);
      localStorage.setItem("HomePageShow", JSON.stringify(HomePageShow));
      Uimaker(HomePageShow);
    });

    // create a div
    let div = document.createElement("div");
    div.append(img, title, discription, category, btn);
    document.getElementById("newsList").append(div);
  });
};

Uimaker(HomePageShow);


// serching

const getValue = (id) => {
  return document.getElementById(id).value;
};

const Serching = (value) => {
  let temp = HomePageShow.filter((ele) =>
    ele.title.toLowerCase().includes(value.toLowerCase())
  );
  Uimaker(temp);
};

document.getElementById("search").addEventListener("input", () => {
  let value = getValue("search");
  Serching(value);
});


// category filter
const FilterByCategory = (category) => {
  if (category == "all") {
    Uimaker(HomePageShow);
    return;
  }

  let temp = HomePageShow.filter((ele) => ele.category == category);
  Uimaker(temp);
};

document
  .getElementById("helth")
  .addEventListener("click", () => FilterByCategory("helth"));

document
  .getElementById("sports")
  .addEventListener("click", () => FilterByCategory("sports"));

document
  .getElementById("education")
  .addEventListener("click", () => FilterByCategory("education"));

document
  .getElementById("all")
  .addEventListener("click", () => FilterByCategory("all"));



