let HomePageShow = JSON.parse(localStorage.getItem("HomePageShow")) || [];

const getValue = (id) => {
  return document.getElementById(id).value;
};
const handleSubmit = (e) => {
  e.preventDefault();
  let New = {
    title: getValue("title"),
    image: getValue("image"),
    description: getValue("discription"),
    category: getValue("category"),
    id:Date.now(),
  };

  HomePageShow.push(New);
  localStorage.setItem("HomePageShow", JSON.stringify(HomePageShow));
};

document.getElementById("news").addEventListener("submit", handleSubmit);
