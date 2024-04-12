function showWeather(response) {}

let apiKey = bdcb7o102f3t06abc42d1da24fda93b2;
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&unit=metric`;
axios.get(apiUrl).then(showWeather);

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#city");
  let searchInputElement = search - input.value;

  let city = document.querySelector("#search-input");
  city.innerHTML = searchInputElement.value;
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", search);
