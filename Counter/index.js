let count = 0;
let value;

const start = () => {
  if (!value) {
    value = setInterval(() => {
      count++;
      document.getElementById("count1").innerHTML = count;
    }, 100);
  }
};

const stop = () => {
  clearInterval(value);
  // value = 0;
};

const reset = () => {
  clearInterval(value);
  value = 0;
  count = 0;
   document.getElementById("count1").innerHTML = count;
};
