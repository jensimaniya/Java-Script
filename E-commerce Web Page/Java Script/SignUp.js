
let users = JSON.parse(localStorage.getItem("users")) || [];

const IsExists = (email) => {
  let isUser = users.find((user) => user.email === email);

  if (isUser) {
    return true;
  }
  return false;
};

const handleSubmit = (e) => {
  e.preventDefault(); 
  let user = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
  };

  
  if (IsExists(user.email)) {
    alert("User already exists");
    return;
  } else {
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users)); 
    alert("User created successfully");
    window.location.href = "./LogIn.html";
    document.getElementById("SignUp").reset(); 
  }
};



document.getElementById("SignUp").addEventListener("submit", handleSubmit);

// name form validation
document.querySelector("#name").addEventListener("input", (e) => {
  let name = e.target.value;
  let nameRegex = /^[a-zA-Z\-]+$/;


  if (nameRegex.test(name)) {
    document.getElementById("name").setAttribute("class", "passed");
  } else {
    document.getElementById("name").setAttribute("class", "error");
  }
  
});

// email form validation
document.querySelector("#email").addEventListener("input", (e) => {
  let email = e.target.value;
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (emailRegex.test(email)) {
    document.getElementById("email").setAttribute("class", "passed");
  }
  else {
    document.getElementById("email").setAttribute("class", "error");
  }
});


// password form validation
document.querySelector("#password").addEventListener("input", (e) => {
  let password = e.target.value;
  let rezex =
    /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()+=-\?;,./{}|\":<>\[\]\\\' ~_]).{8,}/; 
  
  if (rezex.test(password)) {
    document.getElementById("password").setAttribute("class","passed");
  }
  else {
    document.getElementById("password").setAttribute("class","error");
  }
});