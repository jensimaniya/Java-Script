let count = 0;
let value = document.getElementById("count1").innerHTML;
// console.log(value);

setTimeout(() => {
  let counter = setInterval(() => {
    count++;
    document.getElementById("count1").innerHTML = count;

    if (count == value) {
      count = 0;
    }
  }, 100);
}, 100);



