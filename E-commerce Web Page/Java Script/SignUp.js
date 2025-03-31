// let users = JSON.parse(localStorage.getItem("users ")) || [];

// const IsExists = (email) => {
//     let isUser = users.find((user) => user.email === email);

//     if (isUser) {
//         return true;
//     }
//     else {
//         return false
//     }
// };

// const handleSubmit = (e) => {
//     e.preventDefault();
//     let user = {
//       name: document.getElementById("name").value,
//       email: document.getElementById("email").value,
//       password: document.getElementById("password").value,
//     };

//     // console.log(user);
    
//     if (IsExists(user.email)) {
//         alert("user already exists");
//         return;
//     }
//     else {
//         users.push(user);
//         localStorage.setItem("users",JSON.stringify(users));
//         alert("user created successfully");
//         document.getElementById("SignUp").reset();
//     }
    
// }

// document.getElementById("SignUp").addEventListener("click", handleSubmit);


let users = JSON.parse(localStorage.getItem("users")) || [];

const IsExists = (email) => {
  let isUser = users.find((user) => user.email === email);

  if (isUser) {
    return true;
  }
  return false;
};

const handleSubmit = (e) => {
  e.preventDefault(); // Prevent form submission from reloading the page
  let user = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
  };

  // Check if the user already exists based on email
  if (IsExists(user.email)) {
    alert("User already exists");
    return;
  } else {
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users)); // Corrected key
    alert("User created successfully");
    document.getElementById("SignUp").reset(); // Reset the form
  }
};

// Ensure you're adding the event listener on the form, not the button
document.getElementById("SignUp").addEventListener("submit", handleSubmit);