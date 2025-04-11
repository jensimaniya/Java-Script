let Like = JSON.parse(localStorage.getItem("Like")) || [];

// Function to handle UI rendering
const uiMaker = (data) => {
  let temp = "";

  data.map((item) => {
    temp += `
    <div class="col-lg-3 box">
      <img src="${item.image}" alt="" class="img"/>
      <h3>${item.id}</h3>
      <h3>${item.title}</h3>
      <h3>${item.category}</h3>
      <p>${item.price}</p>
      <p class="${item.rating.rate > 3 ? "green" : "red"}">${
      item.rating.rate
    }</p>
      <button>Delete</button>
    </div>`;
  });

  document.getElementById("like").innerHTML = temp;
};

uiMaker(Like);
