let students = [];

const GetValue = (id) => {
  return document.getElementById(id).value;
};
const handleDelete = (i) => {
  students.splice(i, 1);
  uiMaker();
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
  uiMaker();

  console.log(name, number, email);
};




const uiMaker = () => {
  document.getElementById("tablebody").innerHTML = " ";
  students.map((student1, i) => {
   let td1 = document.createElement("td");
   td1.innerHTML = student1.name;

   let td2 = document.createElement("td");
   td2.innerHTML = student1.number;

   let td3 = document.createElement("td");
    td3.innerHTML = student1.email;

    let but = document.createElement("button");
    but.innerHTML = "button";
    let td7 = document.createElement("td");
    td7.append(but);
    
     but.addEventListener("click", () => handleDelete(i));
    
    let tr = document.createElement("tr");
    tr.append(td1, td2, td3,td7);
    document.getElementById("tablebody").append(tr);

  });
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

document.querySelector("#number").addEventListener("input", (e) => {
  let number = e.target.value;
  let numberRezex = /[0-9]/;

  if (numberRezex.test(number)) {
    document.getElementById("number").setAttribute("class", "passed");
  } else {
    document.getElementById("number").setAttribute("class", "err");
  }
});




document.getElementById("student").addEventListener("submit", handlesubmit);
