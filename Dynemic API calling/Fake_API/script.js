// const uiMaker = (data) => {
//   let temp = "";
// for (let i = 0; i < data.data.length; i++) {
//   temp += `
//   <div class="col-lg-3 box  ">
//    <h4>${data.data[i].id} </h4>
//    <p>${data.data[i].type} </p>
//     <h3>${data.data[i].attributes.name} </h3>
//     <p>${data.data[i].attributes.description} </p>
//      <p>${data.data[i].attributes.life.max} </p>
//       <p>${data.data[i].attributes.life.min} </p>

//     <button>buy</button>

//   </div>`;
// }

//   document.getElementById("container").innerHTML = temp;
// };

const uiMaker = (data) => {
  let temp = "";

  data.map((Item) => {
    temp += `
      <div class="col-lg-3 box">
        <h4>ID: ${Item.id}</h4>
        <p>Type: ${Item.type}</p>
        <h3>${Item.attributes.name}</h3>
        <p>${Item.attributes.description}</p>
        <p>Life Max: ${Item.attributes.life.max}</p>
        <p>Life Min: ${Item.attributes.life.min}</p>
        <button>Buy</button>
      </div>`;
  });

  document.getElementById("container").innerHTML = temp;
};

const getData = async () => {
  try {
    let req = await fetch("https://dogapi.dog/api/v2/breeds");
    let res = await req.json();
    uiMaker(res.data); //res.data thi uimaker call karvu padse
    // uiMaker(res)
  } catch (error) {
    console.log(error.message);
  }
};

getData();
