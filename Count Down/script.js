// let interval
// let countDown1

// const downCounter = () => {
//     let countDown11 = document.getElementById("number").value;
//      countDown1 = localStorage.getItem("key-count") || countDown11 || 0;
//     document.getElementById("show").innerHTML = countDown1;

//      interval =setInterval(() => {

//         if (countDown1 > 0) {
//             countDown1--;
//             document.getElementById("show").innerHTML = countDown1;
//             localStorage.setItem("key-count", countDown11);

//         }
//         else {
//             clearInterval();
            
//         }
      
//   },100)

    
// };

// document.getElementById("counter").addEventListener("click", downCounter);



let interval;
let countdown1;

const countwork = () => {
  let countdown11 = document.getElementById("number").value;
  countdown1 = localStorage.getItem("keycount") || countdown11 || 0;
  document.getElementById("show").innerHTML = countdown1;

  interval = setInterval(() => {
    if (countdown1 > 0) {
      countdown1--;
      document.getElementById("show").innerHTML = countdown1;
      localStorage.setItem("keycount", countdown1);
    } else {
      clearInterval(); // Stop countdown at 0
      // alert("Countdown finished!");
    }
  }, 1000);
};

document.getElementById("counter").addEventListener("click", countwork);
