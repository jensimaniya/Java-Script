

let data = JSON.parse(localStorage.getItem("data")) || [];

const uiMaker = (data) => {
  document.getElementById("container").innerHTML = "";
  data.map((Item,i) => {
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
      rate.innerHTML = Item.rating.rate;
      
    // create delete button
    let btndlt = document.createElement("button");
    btndlt.innerHTML = "Delete";
    btndlt.style.width = "50px";
    let p = document.createElement("p");
    p.append(btndlt);

    btndlt.addEventListener("click", () => {
      data.splice(i, 1);
      localStorage.setItem("data", JSON.stringify(data));
        uiMaker(data);
        
     
    });

    // create a div
    let div = document.createElement("div");
    div.append(image, id, title, price, category, rate,p);

    document.getElementById("container").append(div);
  });
};

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


const getData = async () => {
  // Only fetch from API if localStorage is empty
  if (data.length === 0) {
    try {
      let req = await fetch("https://fakestoreapi.com/products");
      data = await req.json();
      localStorage.setItem("data", JSON.stringify(data)); // Save fetched data
    } catch (error) {
      console.log(error.message);
    }
  }

  uiMaker(data); // render UI from localStorage data (or freshly fetched)
};

getData();
