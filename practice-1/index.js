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


const uiMaker = () => {
  students.map((student1, i) => {
    let td1 = document.createElement("td")
    td1.innerHTML=student1.name;

  });
};

document.querySelector("#number").addEventListener("input", (e) => {
  let number = e.target.value;
  let numberRezex = /^[0-5]+$/;

  if (numberRezex.test(number)) {
    document.getElementById("number").setAttribute("class", "passed");
  } else {
    document.getElementById("number").setAttribute("class", "err");
  }
});




document.getElementById("student").addEventListener("submit", handlesubmit);
