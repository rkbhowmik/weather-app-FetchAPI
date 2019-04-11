// const appKey = "f24f40b1c24505685fce3b8acd0fcffc";
const appKey = "USE_YOUR_OWN_KEY";
const url = "https://api.openweathermap.org/data/2.5/weather?q=";

let searchButton = document.querySelector("#search-btn");
let searchInput = document.querySelector("#search-txt");
let cityName = document.querySelector("#city-name");
let icon = document.querySelector("#icon");
let temperature = document.querySelector("#temp");
let humidity = document.querySelector("#humidity-div");
let description = document.querySelector("#description");

searchButton.addEventListener("click", findWeatherDetails);
searchInput.addEventListener("keyup", enterPressed);

function enterPressed(event) {
    if (event.key === "Enter") {
        findWeatherDetails();
    }
}

function findWeatherDetails() {
    if (searchInput.value === "") {

    } else {
        fetch(url + searchInput.value + "&appid=" + appKey)
            .then(function (response) {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                        response.status);
                    return;
                }
                response.json().then(function (data) {
                    cityName.innerHTML = data.name;
                    icon.src = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
                    temperature.innerHTML = parseInt(data.main.temp - 273) + "°";
                    humidity.innerHTML = data.main.humidity + '%';
                    description.innerHTML = data.weather[0].description;
                    console.log(data);
                })
            })
            .catch(function (error) {
                console.log(error);
            }
        );
    }
}