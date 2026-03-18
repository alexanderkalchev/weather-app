import imgSource from "../assets/icons/weather.svg";

export default function getCurrentWeatherComponent(currentConditions){
    const divCurrentWeather = document.createElement("div");
    const divMainData = document.createElement("div");
    const img = document.createElement("img");
    const divCurrentTemp = document.createElement("div");
    const h2RealTemp = document.createElement("h2");
    const h4feelsLikeTemp = document.createElement("h4");
    const h3Conditions = document.createElement("h3");
    const divWind = document.createElement("div");
    const h3WindSpeed = document.createElement("h3");

    divCurrentWeather.classList.add("current-weather");
    divMainData.classList.add("main-data");
    img.src = imgSource;
    divCurrentTemp.classList.add("current-temp");
    h2RealTemp.classList.add("real-temp");
    h4feelsLikeTemp.classList.add("feels-like-temp");
    h3Conditions.classList.add("conditions");
    divWind.classList.add("wind");
    h3WindSpeed.classList.add("wind-speed");

    h2RealTemp.innerText = currentConditions["temp"];
    h4feelsLikeTemp.innerText = currentConditions["feelslike"];
    h3Conditions.innerText = currentConditions["conditions"];
    h3WindSpeed.innerText = currentConditions["windspeed"];

    divCurrentTemp.append(h2RealTemp, h4feelsLikeTemp);
    divMainData.append(img, divCurrentTemp);
    divWind.append(h3WindSpeed);
    divCurrentWeather.append(divMainData, h3Conditions, divWind);

    return divCurrentWeather;
}