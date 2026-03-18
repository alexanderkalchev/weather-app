import imgSource from "../assets/icons/weather.svg";

export default function getDateWeatherComponent(dateConditions){
    const divDateWeather = document.createElement("div");
    const h4Date = document.createElement("h4");
    const img = document.createElement("img");
    const divSecondary = document.createElement("div");
    const divMinMaxTemps = document.createElement("div");
    const h4MinTemp = document.createElement("h4");
    const h4MaxTemp = document.createElement("h4");
    const h4Conditions = document.createElement("h4");
    const h4WindSpeed = document.createElement("h4");

    divDateWeather.classList.add("date-weather");
    h4Date.classList.add("date");
    img.src = imgSource;
    divSecondary.classList.add("secondary");
    divMinMaxTemps.classList.add("minmax-temps");
    h4MinTemp.classList.add("min-temp");
    h4MaxTemp.classList.add("max-temp");
    h4Conditions.classList.add("conditions");
    h4WindSpeed.classList.add("wind-speed");

    h4Date.innerText = dateConditions["datetime"];
    h4MinTemp.innerText = dateConditions["tempmin"];
    h4MaxTemp.innerText = dateConditions["tempmax"];
    h4Conditions.innerText = dateConditions["conditions"];
    h4WindSpeed.innerText = dateConditions["windspeed"];
    divMinMaxTemps.append(h4MinTemp, h4MaxTemp);
    divSecondary.append(divMinMaxTemps, h4Conditions, h4WindSpeed);
    divDateWeather.append(h4Date, img, divSecondary);

    return divDateWeather;
}