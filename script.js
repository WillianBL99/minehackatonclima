
const API_KEY = 'f25110b0f83adb9f7c080ee182cd1d00';

requestWeatherData(-13.851, -40.0812);


function requestWeatherData(){
    const promisse = axios.get(url);
    promisse.then((request) => {console.log('Resposta', request)});
    promisse.catch((request) => {console.log('Deu erro', request)});
}

function urlWeatherData(lat, lon){
    return `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
}