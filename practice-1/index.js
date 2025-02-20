let students = [];

const uiMaker = () => {
  students.map((student) => {
    let td1 = document.createElement("td");
    td1.innerHTML = student.name;

    let td2 = document.createElement("td");
    td2.innerHTML = student.number;

    let td3 = document.createElement("td");
    td3.innerHTML = student.email;

    let tr = document.createElement("tr");
    tr.append(td1, td2, td3);

    document.getElementById("studentList").append(tr);
  });
};

const handleSubmit = (e) => {
  e.preventDefault();
  let name = document.getElementById("name").value;
  let number = document.getElementById("number").value;
  let email = document.getElementById("email").value;

  let student = {
    name: name,
    number: number,
    email: email,
  };

  students.push(student);
  // console.log(students);
  uiMaker();
};

document.getElementById("student").addEventListener("submit", handleSubmit);
