import "./style.css"
import {API_KEY} from "./config.js"

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
    console.log(data);
}

getWeatherData("Sofia", "metric");
