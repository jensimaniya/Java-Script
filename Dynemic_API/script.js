let data = [];
const uiMaker = (data) => {
  let temp = "";
  for (let i = 0; i < data.length; i++) {
    temp += `
    <div class="col-lg-3 box  ">
     <img src=${data[i].image} alt="" class="img"/>
      <h3>${data[i].title}</h3>
      <h3>${data[i].category}</h3>
      <p>${data[i].price}</p>
      <p  class=${data[i].rating.rate > 3 ? "green" : "red"} >${
      data[i].rating.rate
    }</p>
      
      <button>buy</button>

    
    </div>`;
  }

  document.getElementById("container").innerHTML = temp;
};

const getData = async () => {
  try {
    let req = await fetch("https://fakestoreapi.com/products");
    let res = await req.json();
    data = res;
    uiMaker(res);
  } catch (error) {
    console.log(error.message);
  }
};

getData();

// fot category
const handlefilter = (category) => {
  if (category === "all") {
    uiMaker(data);
    return;
  }
  let temp = data.filter(
    (ele) => ele.category.toLowerCase() === category.toLowerCase()
  );
  uiMaker(temp);
};

document
  .getElementById("mens-clothing")
  .addEventListener("click", () => handlefilter("men's clothing"));

document
  .getElementById("jwellry")
  .addEventListener("click", () => handlefilter("jewelery"));

document
  .getElementById("electronics")
  .addEventListener("click", () => handlefilter("electronics"));

document
  .getElementById("womencloth")
  .addEventListener("click", () => handlefilter("women's clothing"));

document
  .getElementById("all")
  .addEventListener("click", () => handlefilter("all"));

// for serching

const Serching = (value) => {
  let temp = data.filter((ele) =>
    ele.title.toLowerCase().includes(value.toLowerCase())
  );
  uiMaker(temp);
};

document.getElementById("search").addEventListener("input", () => {
  let value = document.getElementById("search").value;
  Serching(value);
  console.log(value);
});

// let data = []; // Global variable to store fetched data

// const uiMaker = (data) => {
//   let temp = "";
//   for (let i = 0; i < data.length; i++) {
//     temp += `
//     <div class="col-lg-3 box">
//       <img src="${data[i].image}" alt="" class="img"/>
//       <h3>${data[i].title}</h3>
//       <h3>${data[i].category}</h3>
//       <p>${data[i].price}</p>
//       <p class="${data[i].rating.rate > 3 ? "green" : "red"}">${
//       data[i].rating.rate
//     }</p>
//       <button>buy</button>
//     </div>`;
//   }

//   document.getElementById("container").innerHTML = temp;
// };

// const getData = async () => {
//   try {
//     let req = await fetch("https://fakestoreapi.com/products");
//     let res = await req.json();
//     data = res; // Store the fetched data globally
//     uiMaker(res); // Render the data
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// getData();

// // Handle category filtering
// const handlefilter = (category) => {
//   if (category === "all") {
//     uiMaker(data); // Use global `data` for 'all'
//     return;
//   }
//   let filteredData = data.filter(
//     (ele) => ele.category.toLowerCase() === category.toLowerCase()
//   );
//   uiMaker(filteredData);
// };

// // Add event listeners for category filtering
// document
//   .getElementById("mens-clothing")
//   .addEventListener("click", () => handlefilter("men's clothing"));
// document
//   .getElementById("jwellry")
//   .addEventListener("click", () => handlefilter("jewelery"));
// document
//   .getElementById("electronics")
//   .addEventListener("click", () => handlefilter("electronics"));
// document
//   .getElementById("womencloth")
//   .addEventListener("click", () => handlefilter("women's clothing"));
// document
//   .getElementById("all")
//   .addEventListener("click", () => handlefilter("all"));

// // Handle searching functionality
// const Serching = (value) => {
//   let filteredData = data.filter((ele) =>
//     ele.title.toLowerCase().includes(value.toLowerCase())
//   );
//   uiMaker(filteredData);
// };

// // Add event listener for the search input
// document.getElementById("search").addEventListener("input", () => {
//   let value = document.getElementById("search").value;
//   Serching(value);
// });
