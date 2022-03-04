
const API_KEY = 'f25110b0f83adb9f7c080ee182cd1d00';
const LATITUDE = "";
const LONGITUDE = "";

let search= document.querySelector(".search");

requestWeatherData();

function askLocation() {
if (window.navigator.geolocation) {
    window.navigator.geolocation
  .getCurrentPosition(successfulLookup);
   } 
}

function requestWeatherData(){
    const promisse = axios.get(urlWeatherData(-13.851, -40.0812));
    promisse.then((request) => {console.log('Resposta', request.data)});
    promisse.catch((request) => {console.log('Deu erro', request)});
}

function urlWeatherData(lat, lon){
    return `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=pt_br`;
}

search.addEventListener("click",()=>{
    const content = document.querySelector(".content");
    const result = document. querySelector(".result");
    result.classList.remove("hidden");
    content.classList.add("hidden");
});

askLocation();

function successfulLookup(position){
    LATITUDE = position.coords.latitude;
    LONGITUDE = position.coords.longitude;
    console.log(LATITUDE);
    console.log(LONGITUDE);
    //fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=1234`)
    //.then(response => response.json());
}

