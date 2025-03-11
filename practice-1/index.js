let students = [];

const GetValue = (id) => {
  return document.getElementById(id).value;
};

const handlesubmit = (e) => {
  e.preventDefault();
  let name = GetValue("name");
  let number = GetValue("number");
  let email = GetValue("email");

  let student = {
    name: name,
    number: number,
    email: email,
  };
  students.push(student);

  console.log(name, number, email);
};

// Live Validation

document.querySelector("#name").addEventListener("input", (e) => {
  let name = e.target.value;
  let nameRezex = /^[a-zA-Z ]+$/;

  if (nameRezex.test(name)) {
    document.getElementById("name").setAttribute("class", "passed");
  } else {
    document.getElementById("name").setAttribute("class", "err");
  }
});

document.querySelector("#number").setAttribute("input", (e) => {
  let number = e.target.value;
  let numberRezex = "^[0-9]+$";

  if (numberRezex.test(number)) {
    document.getElementById("number").setAttribute("class", "passed");
  } else {
    document.getElementById("number").setAttribute("class", "err");
  }
});

document.getElementById("student").addEventListener("submit", handlesubmit);
