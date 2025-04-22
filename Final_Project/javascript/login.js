import navbar from "../components/navbar.js";
import userMethod from "../api/user.js";
import { getvalue } from "../utils/helper.js";

document.getElementById("navbar").innerHTML = navbar();

const Onsubmit = (e) => {
  e.preventDefault();

  let user = {
   
    email: getvalue("email"),
    password: getvalue("password"),
  };
  console.log(user);

    // userMethod.create(user);
    handleLogin(user)
};

document.getElementById("user").addEventListener("submit", Onsubmit);


const handleLogin = async (user) => {
    let res = await userMethod.login(user);
    console.log(res);

    if (res.length == 0) {
        alert("invalid email/password");
    }
    else {
        alert("loging")
        localStorage.setItem("isLoggeIn", true)
        localStorage.setItem("user",JSON.stringify(res[0]))
        window.location.href = "/"
    }

    
    
};