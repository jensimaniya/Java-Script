let count = 0;
let counter = setInterval(() => {
  console.log(count++);
  if (count == 100) {
    clearInterval(counter);
  }
}, 10);
