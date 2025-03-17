function sum() {
  let a = document.getElementById("valueOfA").value;
  let b = document.getElementById("valueOfB").value;
  document.getElementById("result").innerHTML = `sum of a : ${a} and b:${b}=${
    Number(a) + Number(b)
  }`;
}

function sub() {
  let a = document.getElementById("valueOfA").value;
  let b = document.getElementById("valueOfB").value;
  document.getElementById("result").innerHTML = a - b;
}

function mul() {
  let a = document.getElementById("valueOfA").value;
  let b = document.getElementById("valueOfB").value;
  document.getElementById("result").innerHTML = Number(a) * Number(b);
}

function div() {
  let a = document.getElementById("valueOfA").value;
  let b = document.getElementById("valueOfB").value;
  document.getElementById("result").innerHTML = Number(a) / Number(b);
}
