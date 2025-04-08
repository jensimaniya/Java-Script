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
  const newuser = document.getElementById("newuser");
  const Alreday = document.getElementById("alreday");
  let user = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
  };

  if (IsExists(user.email)) {
    // alert("User already exists");
    Alreday.style.display = "inline-block";
    newuser.style.display = "none";
    return;
  } else {
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
    // alert("User created successfully");
    newuser.style.display = "inline-block";
    Alreday.style.display = "none";
    // window.location.href = "./LogIn.html";
    document.getElementById("SignUp").reset();
  }
};

document.getElementById("SignUp").addEventListener("submit", handleSubmit);

// name form validation

document.querySelector("#name").addEventListener("input", (e) => {
  let name = e.target.value; // Get the value from the input
  let nameRegex = /^[a-zA-Z\-]+$/; // Regex to allow only letters and hyphens

  // Get the error message container
  const nameError = document.getElementById("name-error");

  if (nameRegex.test(name)) {
    // If valid name
    document.getElementById("name").setAttribute("class", "passed");
    nameError.innerHTML = "Valid name";
    nameError.style.color = "green";
    setTimeout(() => {
      nameError.style.display = "none";
    }, 1000);
  } else {
    // If invalid name
    document.getElementById("name").setAttribute("class", "error");
    nameError.innerHTML = "Invalid name. Only letters and hyphens allowed.";
    nameError.style.color = "red";
    nameError.style.fontSize = "12px";
  }
});

// email form validation
document.querySelector("#email").addEventListener("input", (e) => {
  let email = e.target.value;
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Valid email format

  const emailError = document.getElementById("email-error"); // To show validation feedback

  // Check if email matches the regex
  if (emailRegex.test(email)) {
    // If valid email, show passed style and clear error message
    document.getElementById("email").setAttribute("class", "passed");
    emailError.innerHTML = "Valid email";
    emailError.style.color = "green";
    setTimeout(() => {
      emailError.style.display = "none";
    }, 1000);
  } else {
    // If invalid email, show error style and set error message
    document.getElementById("email").setAttribute("class", "error");
    emailError.innerHTML = "Invalid email format";
    emailError.style.color = "red";
  }
});

// password form validation
document.querySelector("#password").addEventListener("input", (e) => {
  let password = e.target.value;

  // Regular expression to validate password
  let regex =
    /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()+=-\?;,./{}|":<>\[\]\\' ~_]).{8,}/;

  // Get the password input field
  const passwordField = document.getElementById("password");
  const passwordError = document.getElementById("password-error"); // Error message container

  // Test if password matches the regex
  if (regex.test(password)) {
    // If password is valid, add "passed" class and show success message
    passwordField.setAttribute("class", "passed");
    passwordError.innerHTML = "Valid password";
    passwordError.style.color = "green";
    setTimeout(() => {
      passwordError.style.display = "none";
    }, 1000);
  } else {
    // If password is invalid, add "error" class and show error message
    passwordField.setAttribute("class", "error");
    passwordError.innerHTML =
      "Password must be at least 8 characters long, include uppercase & lowercase letters, a digit, and a special character.";
    passwordError.style.color = "red";
  }
});
