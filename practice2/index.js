let count = 0;
let value;
let counterDisplay = document.getElementById("count1");

const start = () => {
  if (!value) {
    value = setInterval(() => {
      count++;
      counterDisplay.textContent = count;
    }, 1000);
  }
};

const stop = () => {
  clearInterval(value);
  value = null;
};

const reset = () => {
  clearInterval(value);
  value = null;
  count = 0;
  counterDisplay.textContent = count;
};
