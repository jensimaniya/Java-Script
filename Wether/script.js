const uiMaker = (data) => {
  let temp = `
    <div class="weather__header">
        <div class="weather__units">
            <span class="weather_unit_celsius">&#176C</span>
            <span class="weather_unit_farenheit">&#176F</span>
        </div>
    </div>
    <div class="weather__body">
        <h1 class="weather__city">${data.name}</h1>
        <div class="weather__datetime">${new Date().toLocaleString()}</div>
        <div class="weather__forecast">${data.weather[0].description}</div>
        <div class="weather__icon">
            <img src="https://openweathermap.org/img/wn/${
              data.weather[0].icon
            }@2x.png" alt="Weather Icon">
        </div>
        <p class="weather__temperature">${Math.round(data.main.temp)}&#176;</p>
        <div class="weather__minmax">
            <p>Min: ${Math.round(data.main.temp_min)}&#176;</p>
            <p>Max: ${Math.round(data.main.temp_max)}&#176;</p>
        </div>
    </div>

    <div class="weather__info">
        <div class="weather__card">
            <i class="fa-solid fa-temperature-full"></i>
            <div>
                <p>Real Feel</p>
                <p class="weather__realfeel">${Math.round(
                  data.main.feels_like
                )}&#176;</p>
            </div>
        </div>
        <div class="weather__card">
            <i class="fa-solid fa-droplet"></i>
            <div>
                <p>Humidity</p>
                <p class="weather__humidity">${data.main.humidity}%</p>
            </div>
        </div>
        <div class="weather__card">
            <i class="fa-solid fa-wind"></i>
            <div>
                <p>Wind</p>
                <p class="weather__wind">${data.wind.speed} km/h</p>
            </div>
        </div>
        <div class="weather__card">
            <i class="fa-solid fa-gauge-high"></i>
            <div>
                <p>Pressure</p>
                <p class="weather__pressure">${data.main.pressure} hPa</p>
            </div>
        </div>
    </div>`;

  document.getElementById("output").innerHTML = temp;
};

const getWeather = async (cityName) => {
  const apiKey = "9e1ac06a6f72dc48dc80d70b4f040583";
  try {
    let req = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`
    );
    let res = await req.json();

    if (res.cod === "404") {
      document.getElementById("output").innerHTML =
        "<h2>Oops! Location not found!</h2>";
      return;
    }

    console.log(res);
    uiMaker(res);
  } catch (error) {
    console.log("Fetch Error: ", error);
  }
};

// Wait for page to fully load before attaching event
window.onload = () => {
  const input = document.getElementById("search");
  input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      let cityName = e.target.value.trim();
      if (cityName) {
        getWeather(cityName);
      }
    }
  });
};
