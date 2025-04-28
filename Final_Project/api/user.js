// const Baseurl = "http://localhost:3000/users";

// const userMethod = {
//     create: async (data) => {
//         await fetch(Baseurl, {
//             method: "POST",
//             header: {
//                 "contect type": "application/json",
//             },
//             body: JSON.stringify(data)
//         })
//              },
//         getAll: async () => {
//             let req = await fetch(Baseurl);
//             return await req.json();
                
//         },
//         delete : async (id) => {
//             await fetch(`${Baseurl}/${id}`, {
//                 method: "DELETE",
//             })
//     },
        
//         //log in signup mate
//     login: async (user) => {
//             let req = await fetch(
//               `${Baseurl}?email=${user.email}&password=${user.password}`
//         );
//         let res = await req.json()
//         return res;
//         }
                
   
// }


// export default userMethod;



const BaseUrl = "http://localhost:3000/users";

const userMethods = {
  create: async (data) => {
    await fetch(BaseUrl, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
  },
  getAll: async () => {
    let req = await fetch(BaseUrl);
    return await req.json();
  },
  delete: async (id) => {
    await fetch(`${BaseUrl}/ ${id}`, {
      method: "DELETE",
    });
  },
  login: async (user) => {
    let req = await fetch(
      `${BaseUrl}?email=${user.email}&password=${user.password}`
    );
    let res = await req.json();
    return res;
  },
};

export default userMethods;