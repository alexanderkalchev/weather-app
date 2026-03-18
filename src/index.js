import "./style.css"
import {API_KEY} from "./config.js"
import getCurrentWeatherComponent from "./components/currentWeatherComponent.js";
import getFutureWeatherComponent from "./components/futureWeatherComponent.js";

const search_weather_button = document.querySelector("#search-weather");
const weather_form = document.querySelector("form");
const location_input = document.querySelector("#location");
const units_input = document.querySelector("#unit-metric");
const divWeatherContent = document.querySelector(".weather-content");

async function getWeatherData(location, unit_group){
    const searchParams = new URLSearchParams({
        key: API_KEY,
        unitGroup:unit_group,
        include:"current,fcst",
        elements: "temp,feelslike,windspeed,visibility,datetime,tempmax,tempmin,temp,conditions"
    });
    console.log(searchParams.toString());
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?` + searchParams.toString())
    const data = await response.json();
    
    return data;
}

async function updateWeatherContent(data){
    divWeatherContent.innerHTML = "";
    divWeatherContent.append(getCurrentWeatherComponent(data["currentConditions"]));
    divWeatherContent.append(getFutureWeatherComponent(data["days"]));
}



search_weather_button.addEventListener("click",(e) => {
    e.preventDefault();
    if(weather_form.checkValidity()){
        getWeatherData(location_input.value, "metric").then((data) => updateWeatherContent(data));
    }
    weather_form.reportValidity();
});
