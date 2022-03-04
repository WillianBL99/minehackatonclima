
const API_KEY = 'f25110b0f83adb9f7c080ee182cd1d00';
const LATITUDE = "";
const LONGITUDE = "";

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

search.addEventListener("click",()=>{
    const content = document.querySelector(".content");
    const result = document. querySelector(".result");
    result.classList.remove("hidden");
    content.classList.add("hidden");
});

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
        if(error.PERMISSION_DENIED){
            alert("The User have denied the request for Geolocation.");
        }
    }

    getLocation();

