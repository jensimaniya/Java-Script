let count = 0;
let value;

let counterDisplay = document.getElementById("counter");
let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");

// Start 
start.addEventListener("click", () => {
  if (!value) {
    value = setInterval(() => {
      count++;
      counterDisplay.textContent = count;
    }, 100);
  }
});

// Stop 
stop.addEventListener("click", () => {
  clearInterval(value);
  value = 0;
});

// Reset 
reset.addEventListener("click", () => {
  clearInterval(value);
  value = 0;
  count = 0;
  counterDisplay.textContent = count;
});
