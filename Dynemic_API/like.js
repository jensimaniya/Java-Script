let Like = JSON.parse(localStorage.getItem("Like")) || [];

// Function to handle UI rendering
const uiMaker = (data) => {
  let temp = "";

  // Loop through the data array and generate HTML
  data.map((item, index) => {
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
      
      <button class="quantityBtn" data-action="increase" data-index="${index}">+</button>
      <span>Quantity: <span class="quantity">${item.quantity || 1}</span></span>
      <button class="quantityBtn" data-action="decrease" data-index="${index}">-</button>

      <button class="dltBTN" data-index="${index}">Delete</button>
    </div>`;
  });

  document.getElementById("like").innerHTML = temp;

  // Add event listeners to quantity buttons
  document.querySelectorAll(".quantityBtn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const index = e.target.getAttribute("data-index");
      const action = e.target.getAttribute("data-action");

      // Update quantity based on the action
      if (action === "increase") {
        Like[index].quantity = (Like[index].quantity || 1) + 1; // Increase quantity
      } else if (action === "decrease" && Like[index].quantity > 1) {
        Like[index].quantity -= 1; // Decrease quantity
      }

      localStorage.setItem("Like", JSON.stringify(Like)); // Save updated Like array to localStorage
      uiMaker(Like); // Re-render the UI with updated quantity
    });
  });

  // Add event listeners to the Delete buttons
  document.querySelectorAll(".dltBTN").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const index = e.target.getAttribute("data-index");

      // Remove item from Like array
      Like.splice(index, 1);
      localStorage.setItem("Like", JSON.stringify(Like)); // Save updated Like array to localStorage
      uiMaker(Like); // Re-render the UI after removal
    });
  });
};

// Initial rendering of the UI
uiMaker(Like);
