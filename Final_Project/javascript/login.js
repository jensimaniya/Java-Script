// import navbar from "../components/navbar.js";
// import userMethod from "../api/user.js";
// import { getvalue } from "../utils/helper.js";

// document.getElementById("navbar").innerHTML = navbar();

// const Onsubmit = (e) => {
//   e.preventDefault();

//   let user = {
   
//     email: getvalue("email"),
//     password: getvalue("password"),
//   };
//   console.log(user);

//     // userMethod.create(user);
//     handleLogin(user)
// };

// document.getElementById("user").addEventListener("submit", Onsubmit);


// const handleLogin = async (user) => {
//     let res = await userMethod.login(user);
//     console.log(res);

//     if (res.length == 0) {
//         alert("invalid email/password");
//     }
//     else {
//         alert("loging")
//         localStorage.setItem("isLoggeIn", true)
//         localStorage.setItem("user",JSON.stringify(res[0]))
//         window.location.href = "/"
//     }

    
    
// };



import userMethods from "../api/user.js";
import navbar from "../components/navbar.js";
import { getValue } from "../utils/helper.js";

document.getElementById("navbar").innerHTML = navbar();

const handleLogin = async (user) => {
  let res = await userMethods.login(user);
  console.log(res);
  if (res.length == 0) {
    alert("invalid email / password");
  } else {
    alert("logged in .......");
    localStorage.setItem("isLoggedIn", true);
    localStorage.setItem("user", JSON.stringify(res[0]));
    window.location.href = "/";
  }
};

// form
const onSubmit = (e) => {
  e.preventDefault();
  let user = {
    email: getValue("email"),
    password: getValue("password"),
  };
  //   console.log(user);
  handleLogin(user);
  //  userMethods.create(user)
};
document.getElementById("user").addEventListener("submit", onSubmit);