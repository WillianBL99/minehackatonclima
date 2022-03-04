
const API_KEY = 'f25110b0f83adb9f7c080ee182cd1d00';


const weatherInfo = {
    temp: 0,
    maxTemp: 0,
    minTemp: 0,
    humi: 0,
    windSpeed: 0,
    precipitation: 0,
    wheader: ''
}

let search= document.querySelector(".search");

function requestWeatherData(){
    const promisse = axios.get(urlWeatherData(LATITUDE, LONGITUDE));
    promisse.then((request) => {console.log('Resposta', request.data)});
    promisse.catch((request) => {console.log('Deu erro', request)});
}

function urlWeatherData(lat, lon){
    return `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=pt_br`;
}

function fillValues(request){
    const weatherData = request.data;
}

search.addEventListener("click",()=>{
    const content = document.querySelector(".content");
    const result = document. querySelector(".result");
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
        requestWeatherData();
    }

    function showError(error) {
        if(error.PERMISSION_DENIED){
            const zipcode = prompt("Qual o seu zip code?");
            const promise = axios.get(`http://api.openweathermap.org/geo/1.0/zip?zip=${zipcode}&appid=${API_KEY}`);
            promise.then(response => {
                LATITUDE = response.lat;
                LONGITUDE = response.long;
            });
            promise.catch(response => {
                alert("Deu erro, insira seu zip code");
                getLocation();
            });
        }
    }

    getLocation();

