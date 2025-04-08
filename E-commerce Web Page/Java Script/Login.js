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
    const emailerror = document.getElementById("email-error");
    const passregex = document.getElementById("password-error");
    const SuccessFully = document.getElementById("success");
  
  let user = {
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
  };

    // console.log(user);

    let userData = IsExists(user.email);
    if (userData.found) {
        if (userData.user.password == user.password)
        {
            // alert("login success");
            SuccessFully.style.display = "inline-block";
           
            setTimeout(() => {
               window.location.href = "../index.html";
            }, 1500);
        }
        else {
            // alert("password does not match")
            passregex.innerHTML = "Invalid Password";
            passregex.style.color = "red";
        }
    }
    else {
        // alert("invalid email");
        emailerror.innerHTML = "Invalid email";
        emailerror.style.color = "red";
    }
    
  
};



document.getElementById("Login").addEventListener("submit", handleSubmit);
