let employes = [];

// delete all data mate
function allDelete() {
  employes = [];
  TableShow();
}
// one row delete krva mate
const Delete = (i) => {
  employes.splice(i, 1);
  TableShow();
};

const TableShow = () => {
  document.getElementById("tablebody").innerHTML = " ";
  employes.map((employes, i) => {
    
    let img = document.createElement("img");
    img.src = employes.image;
    let td1 = document.createElement("td");
    td1.append(img);

    let td2 = document.createElement("td");
    td2.innerHTML = employes.name;

    let td3 = document.createElement("td");
    td3.innerHTML = employes.number;

    let td4 = document.createElement("td");
    td4.innerHTML = employes.email;

    let td5 = document.createElement("td");
    td5.innerHTML = employes.jobroll;

    let td6 = document.createElement("td");
    td6.innerHTML = employes.exprience;

    let td7 = document.createElement("td");
    td7.innerHTML = employes.expriencelevel;

    let td8 = document.createElement("td");
    td8.innerHTML = employes.salary;

    let but = document.createElement("button");
    but.innerHTML = "button";
    let td9 = document.createElement("td");
    td9.append(but);

    but.addEventListener("click", () => Delete(i));

    let tr = document.createElement("tr");
    tr.append(td1, td2, td3, td4, td5, td6, td7, td8, td9);
    document.getElementById("tablebody").append(tr);
  });
};

const submit = (e) => {
  e.preventDefault();
  let image = document.getElementById("image").value;
  let name = document.getElementById("name").value;
  let number = document.getElementById("number").value;
  let email = document.getElementById("email").value;
  let jobroll = document.getElementById("jobroll").value;
  let exprience = document.getElementById("exprience").value;
  let salary = document.getElementById("salary").value;

  
  if (exprience < 3 ) {
    expriencelevel = `junior`;
  } else if (exprience < 5 && exprience >= 3) {
    expriencelevel = `mid`;
  } else if (exprience >= 5) {
    expriencelevel = `senior`;
  }
  
  

  let employe = {
    name: name,
    number: number,
    email: email,
    jobroll: jobroll,
    exprience: exprience,
    expriencelevel: expriencelevel,
    salary: salary, 
    image: image,
  };

  employes.push(employe);

  TableShow();
};

document.getElementById("employe").addEventListener("submit", submit);


