
const API_KEY = 'f25110b0f83adb9f7c080ee182cd1d00';


const weatherInfo = {
    temp: 0,
    maxTemp: 0,
    minTemp: 0,
    humi: 0,
    windSpeed: 0,
    weather: ''
}

let search = document.querySelector(".search");

requestWeatherData();

function requestWeatherData() {
    const promisse = axios.get(urlWeatherData(-13.851, -40.0812));
    promisse.then(fillValues);
    promisse.catch((request) => { console.log('Deu erro', request) });
}

function urlWeatherData(lat, lon) {
    return `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=pt_br`;
}

function fillValues(request) {
    const weatherData = request.data;
    const mainData = weatherData.main;
    
    weatherInfo.temp = mainData.feels_like;
    weatherInfo.maxTemp = mainData.temp_max;
    weatherInfo.minTemp = mainData.temp_min;

    weatherInfo.humi = mainData.humidity;
    weatherInfo.windSpeed = weatherData.wind.speed;

    weatherInfo.weather = weatherData.weather.shift().description;
}

search.addEventListener("click", () => {
    const content = document.querySelector(".content");
    const result = document.querySelector(".result");
    result.classList.remove("hidden");
    content.classList.add("hidden");
})

function getLocation() {
    if (window.navigator.geolocation) {
        window.navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        alert("The Browser Does not Support Geolocation");
    }
}

function showPosition(position) {
    LATITUDE = position.coords.latitude;
    LONGITUDE = position.coords.longitude;

}

function showError(error) {
    if (error.PERMISSION_DENIED) {
        alert("The User have denied the request for Geolocation.");
    }
}

getLocation();

