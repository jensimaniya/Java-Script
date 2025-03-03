let count = 0;
let value;


let start = document.getElementById("start");
// let stop = document.getElementById("stop");
// let reset = document.getElementById("reset");

setTimeout(() => {
  let counter = setInterval(() => {
    count++;
    document.getElementById("start").innerHTML=count;
    
  },1000)
  
},1000)




