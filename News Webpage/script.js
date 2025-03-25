// blank array create...
// let BreakingNews = JSON.parse(localStorage.getItem("BreakingNews")) || [];

let HomePageShow = JSON.parse(localStorage.getItem("HomePageShow")) || [];

// const uiMaker = (BreakingNews) => {
//     document.getElementById("newsList").innerHTML = "";
//   BreakingNews.map((Item,i) => {
//     let image = document.createElement("img");
//     image.src = Item.image;

//     let title = document.createElement("h1");
//     title.innerHTML = Item.title;

//     let category = document.createElement("p");
//     category.innerHTML = Item.category;

//     let discription = document.createElement("p");
//     discription.innerHTML = Item.description;

//     let btndlt = document.createElement("button");
//     btndlt.innerHTML = "Delete";
//     let p = document.createElement("p");
//       p.append(btndlt);

//        btndlt.addEventListener("click", () => {
//          BreakingNews.splice(i, 1);

//            localStorage.setItem("BreakingNews", JSON.stringify(BreakingNews));
//             uiMaker(BreakingNews);
//        });

//     let div = document.createElement("div");
//     div.append(image, title, category, discription, btndlt);

//     document.getElementById("newsList").append(div);
//   });
// };

const getValue = (id) => {
  return document.getElementById(id).value;
};
const handleSubmit = (e) => {
  e.preventDefault();
  let New = {
    title: getValue("title"),
    image: getValue("image"),
    description: getValue("discription"),
    category: getValue("category"),
  };
  // console.log(New);
  // BreakingNews.push(New);
  // localStorage.setItem("BreakingNews", JSON.stringify(BreakingNews));

  HomePageShow.push(New);
  localStorage.setItem("HomePageShow", JSON.stringify(HomePageShow));
  
};


document.getElementById("news").addEventListener("submit", handleSubmit);
