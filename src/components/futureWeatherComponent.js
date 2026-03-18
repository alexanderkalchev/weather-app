import getDateWeatherComponent from "./dateWeatherComponent.js";

export default function getFutureWeatherComponent(dates){
    const divFutureWeather = document.createElement("div")

    divFutureWeather.classList.add("future-weather")
    for (let i = 0; i < 5; i++) {
        divFutureWeather.append(getDateWeatherComponent(dates[i]));
    }

    return divFutureWeather;
}