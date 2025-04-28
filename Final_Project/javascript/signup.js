// import navbar from "../components/navbar.js";
// import userMethod from "../api/user.js";
// import { getvalue } from "../utils/helper.js";

// document.getElementById("navbar").innerHTML = navbar();



// const Onsubmit = (e) => {
//   e.preventDefault();

//   let user = {
//     name: getvalue("name"),
//     email: getvalue("email"),
//     password: getvalue("password"),
//     };
//     console.log(user);
    
//     userMethod.create(user);
    
    

// };

// document.getElementById("user").addEventListener("submit", Onsubmit);



import userMethods from "../api/user.js";
import navbar from "../components/navbar.js";
import { getValue } from "../utils/helper.js";

document.getElementById("navbar").innerHTML = navbar();
// form
const onSubmit = (e) => {
  e.preventDefault();
  let user = {
    name: getValue("name"),
    email: getValue("email"),
    password: getValue("password"),
  };
  userMethods.create(user);
};
document.getElementById("user").addEventListener("submit", onSubmit);
