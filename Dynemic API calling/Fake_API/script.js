let data = [];
const uiMaker = (data) => {
  let temp = "";
  for (let i = 0; i < data.data.length; i++) {
    temp += `
    <div class="col-lg-3 box  ">
     <h4>${data.data[i].id} </h4>
     <p>${data.data[i].type} </p>
      <h3>${data.data[i].attributes.name} </h3>
      <p>${data.data[i].attributes.description} </p>
       <p>${data.data[i].attributes.life.max} </p>
        <p>${data.data[i].attributes.life.min} </p>
      
      
      <button>buy</button>

    
    </div>`;
  }

  document.getElementById("container").innerHTML = temp;
};

const getData = async () => {
  try {
    let req = await fetch("https://dogapi.dog/api/v2/breeds");
    let res = await req.json();
    data = res;
    uiMaker(res);                                          
  } catch (error) {
    console.log(error.message);
  }
};

getData();



