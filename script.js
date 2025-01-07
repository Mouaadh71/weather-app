const weather = document.querySelector("form");
const cityname = document.getElementById("city");
const card = document.querySelector(".container");
const key = "put your api key";

weather.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityname.value}&appid=${key}`
  )
    .then((response) => response.json())
    .then((data) => {
      data.weather[0].description = "rain";
      console.log(data);
      card.innerHTML = `
        <h2 class="cityname">${data.name}</h2>
        <p class="temp">${Math.round(data.main.temp - 273.15)}°C</p>
        <p class="humidity">humidity: ${data.main.humidity}%</p>
        <p class="wind">wind speed: ${data.wind.speed} km/h</p>
        <p class="description">${data.weather[0].description}</p>
        `;
      if (data.weather[0].description == "rain") {
        card.classList.add("rain");
      }
    })
    .catch(() => {
      card.innerHTML = `
        <h2 class="cityname">input invalid</h2>
        `;
    });
  cityname.value = "";
});
