const validateInput = (id, regex) => {
  let value = document.getElementById(id).value;
  let isValid = regex.test(value);
  document.getElementById(id).setAttribute("class", isValid ? "paased" : "err");
};

const getValue = (id) => {
  return document.getElementById(id).value;
};

const handleUserData = (e) => {
  e.preventDefault();

  let username = getValue("username");
  let email = getValue("email");
  let password = getValue("password");
  let number = getValue("number");
  

  validateInput("username", /^(?=.*[0-9])(?=.*[A-Za-z]).{8,32}$/); 
  validateInput("email", /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/); 
  validateInput(
    "password",
    /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]{8,20}$/
  ); 
  validateInput("number", /^\d{10}$/); 
};













document.getElementById("userData").addEventListener("submit", handleUserData);
