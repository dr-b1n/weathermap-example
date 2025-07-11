const getCurrentWeather = (lat, lon) => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=dff6a9c9769079116a0993fb02b49d56&units=metric`;

  fetch(URL)
  .then((response) => response.json())
  .then((result => {
    console.log(result);

    const temp = document.querySelector(".temp");
    temp.innerText = `${result.main.temp}°C`;

    let weatherInfo;
    const weather = document.querySelector(".weather");
    switch(result.weather[0].main) {
      case "Clear" :
        weatherInfo = "🌈 맑음";
    }
    weather.innerText = weatherInfo;

    let cityName;
    const city = document.querySelector(".city");
    switch(result.name){
      case "Jamwon-dong" :
        cityName = "🏛 역삼동";
    }
    city.innerText = cityName;

    const icon = document.querySelector(".icon");
    icon.src = `https://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png`
  })); 
  

}

const getPosition = (position) => {
  const{ latitude, longitude } = position.coords;
  getCurrentWeather(latitude, longitude);
};

const errorhandle = (error) => {
  console.error(error);
}

if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(getPosition, errorhandle);
} else {
  console.log("geolocation is not available");
}