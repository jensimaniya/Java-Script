let users = JSON.parse(localStorage.getItem("users")) || [];

const IsExists = (email) => {
    let isUser = users.find((user) => user.email === email)
    if (isUser) {
        return { found: true, user: isUser };
    }
    else {
        return { found: false, user: isUser };
    }
};



const handleSubmit = (e) => {
  e.preventDefault(); 
  let user = {
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
  };

    // console.log(user);

    let userData = IsExists(user.email);
    if (userData.found) {
        if (userData.user.password == user.password)
        {
            alert("login success");
        }
        else {
            alert("password does not match")
        }
    }
    else {
        alert("invalid email");
    }
    
  
};



document.getElementById("Login").addEventListener("submit", handleSubmit);
