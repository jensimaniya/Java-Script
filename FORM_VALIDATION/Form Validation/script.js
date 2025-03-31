// blank array craet kro
let students = [];

// form validation function start
const errorDetails = (id, msg) => {
  let error = document.createElement("p");
  error.innerHTML = msg;
  document.getElementById(id).append(error);
};
// form validation function end

// delete all data mate
function allDelete() {
  students = [];
  uiMaker();
}

const handleDelete = (i) => {
  students.splice(i, 1);
  uiMaker();
};

// table ni td or tr creat krva mate
const uiMaker = () => {
  document.getElementById("tablebody").innerHTML = " ";
  students.map((student1, i) => {
    let td1 = document.createElement("td");
    td1.innerHTML = student1.name;

    let td2 = document.createElement("td");
    td2.innerHTML = student1.number;

    let td3 = document.createElement("td");
    td3.innerHTML = student1.email;

    let td5 = document.createElement("td");
    td5.innerHTML = student1.course;

    let td6 = document.createElement("td");
    td6.innerHTML = student1.fee;

    let but = document.createElement("button");
    but.innerHTML = "button";
    let td7 = document.createElement("td");
    td7.append(but);

    but.addEventListener("click", () => handleDelete(i));

    let tr = document.createElement("tr");
    tr.append(td1, td2, td3, td5, td6, td7);
    document.getElementById("tablebody").append(tr);
  });
};

// user pase thi value leva matenu function
const handlesubmit = (e) => {
  e.preventDefault();
  let name = document.getElementById("name").value;
  let number = document.getElementById("number").value;
  let email = document.getElementById("email").value;
  let course = document.getElementById("course").value;
  let fee = document.getElementById("fee").value;
  // object bnavyo
  let student = {
    name: name,
    number: number,
    email: email,
    course: course,
    fee: fee,
  };

  // for form validation start

  if (name.length < 2) {
    errorDetails("name-box", "please enter valid name");
    return;
  }

  if (number.length < 10 || number.length > 10) {
    errorDetails("number-box", "please enter valid number");
    return;
  }

  if (email.length < 2) {
    errorDetails("email-box", "please enter valid email address");
    return;
  }

  if (fee.length < 2) {
    errorDetails("fees-box", "please enter valid fees");
    return;
  }
  // form validation end

  // object array ma add karva mate
  students.push(student);

  uiMaker();
};

document.getElementById("student").addEventListener("submit", handlesubmit);
