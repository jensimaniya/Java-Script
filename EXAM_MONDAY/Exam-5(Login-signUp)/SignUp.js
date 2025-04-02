
let signup = JSON.parse(localStorage.getItem("signup")) || [];





const IsExists = (email) => {
  let isUser = signup.find((user) => user.email === email);

  if (isUser) {
    return true;
  }
  return false;
};

const handlesubmit = (e) => {
    e.preventDefault();
  let user = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    password: document.getElementById("Password").value,
    };
    
    

    if (IsExists(user.email)) {
      alert("User already exists");
      return;
    } else {
      signup.push(user);
      localStorage.setItem("signup", JSON.stringify(signup)); // Corrected key
    
      alert("User created successfully");
      document.getElementById("signup").reset(); // Reset the form
      
    }
    
    
};

document.getElementById("signup").addEventListener("submit", handlesubmit);


