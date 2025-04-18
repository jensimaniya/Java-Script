const Baseurl = "http://localhost:3000/users";

const userMethod = {
    create: async (data) => {
        await fetch(Baseurl, {
            method: "POST",
            header: {
                "contect type": "application/json",
            },
            body: JSON.stringify(data)
        })
             },
        getAll: async () => {
            let req = await fetch(Baseurl);
            return await req.json();
                
        },
        delete : async (id) => {
            await fetch(`${Baseurl}/${id}`, {
                method: "DELETE",
            })
        }
                
   
}


export default userMethod;