
function getLocation() {
    if (window.navigator.geolocation) {
        window.navigator.geolocation
        .getCurrentPosition(successfulLookup, console.log);
       } else {
           alert("O browser não forneceu a info.");
       }
  }

const successfulLookup = position => {
    const { latitude, longitude } = position.coords;
    fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=1234`)
      .then(response => response.json());
      //.then(console.log);
