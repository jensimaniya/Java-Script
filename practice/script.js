// let count = 0;
// let value = document.getElementById("count1").innerHTML;
// // console.log(value);

// setTimeout(() => {
//   let counter = setInterval(() => {
//     document.getElementById("count1").innerHTML = count;
//     count++;

//     if (count == value) {
//       count = 0;
//     }
//   }, 100);
// }, 10);


let count = 0
let value = document.getElementById("count1").innerHTML;



  setInterval ( () => {

    document.getElementById("count1").innerHTML = count;
    count++;
    if (count == value)
      count=0
    
  },100)


