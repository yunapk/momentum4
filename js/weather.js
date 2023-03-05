const API_KEY = "e44175a2b4241d46a3d0dec1b1e70ab4"

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}C`;
    });
}
function onGeoError() {
    alert("Can't find your location. No weather.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);