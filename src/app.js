function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  searchCity(searchInputElement.value);
}
function refreshWeather(response) {
  let cityElement = document.querySelector("#city");
  let temperatureElement = document.querySelector("#temp");
  let temperature = Math.round(response.data.temperature.current);
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windSpeedElement = document.querySelector("#wind-speed");
  let timeElement = document.querySelector("#time");
  let date = new Date(response.data.time * 1000);
  let iconElement = document.querySelector("#icon");

  cityElement.innerHTML = response.data.city;
  descriptionElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
  windSpeedElement.innerHTML = `${response.data.wind.speed}km/h`;
  temperatureElement.innerHTML = `${temperature}°c`;
  timeElement.innerHTML = formatDate(date);
  iconElement.innerHTML = `<img src = "${response.data.condition.icon_url}" class = "icon"/>`;
}
function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${day} ${hours}: ${minutes}`;
}

function searchCity(city) {
  let apiKey = "bdcb7o102f3t06abc42d1da24fda93b2";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(refreshWeather);
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

searchCity("durban");
