function findSum() {
  let a = document.getElementById("EnterNumber").value;

  let array = [10, 20, 25, 50, 40, 35];

  let n = array.length;
  let even = 0;
  let odd = 0;

  for (let i = 0; i < n; i++) {
    if (i % 2 == 0) {
      even += array[i];
    } else {
      odd += array[i];
    }
  }

  if (even > odd) {
    document.getElementById("result").innerHTML = "even";
  } else {
    document.getElementById("result").innerHTML = "odd";
  }
}
