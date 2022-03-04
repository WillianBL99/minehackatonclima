
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

requestWeatherData();


function requestWeatherData(){
    const promisse = axios.get(urlWeatherData(-13.851, -40.0812));
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


