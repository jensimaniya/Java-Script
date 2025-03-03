let count = 0;
let value;

const start = () => {
  if (!value) {
    value = setInterval(() => {
      count++;
      document.getElementById("count1").innerHTML=count
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
   document.getElementById("count1").innerHTML = count;
};
