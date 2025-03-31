// for first div
let count = 0;
let value = document.getElementById("count1").innerHTML;
// console.log(value);
setTimeout(() => {
  let counter = setInterval(() => {
    
    document.getElementById("count1").innerHTML = count;
    count++;
    if (count == value) {
      count = 0;
    }
  }, 100);
}, 2000);

// for second div

let count1 = 0;
let value1 = document.getElementById("count2").innerHTML;
// console.log(value1);
setTimeout(() => {
  let counter1 = setInterval(() => {
    count1++;
    document.getElementById("count2").innerHTML = count1;
    if (count1 == value1) {
      count1 = 0;
    }
  }, 100);
}, 2000);

// for third div

let count2 = 0;
let value2 = document.getElementById("count3").innerHTML;
// console.log(value2);
setTimeout(() => {
  let counter = setInterval(() => {
    count2++;
    document.getElementById("count3").innerHTML = count2;
    if (count2 == value2) {
      count2 = 0;
    }
  }, 100);
}, 2000);

// for forth div
let count3 = 0;
let value3 = document.getElementById("count4").innerHTML;
// console.log(value3);
setTimeout(() => {
  let counter = setInterval(() => {
    count3++;
    document.getElementById("count4").innerHTML = count3;
    if (count3 == value3) {
      count3 = 0;
    }
  }, 100);
}, 2000);
