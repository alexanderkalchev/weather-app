import getCurrentWeatherComponent from "./currentWeatherComponent.js";
import getFutureWeatherComponent from "./futureWeatherComponent.js";

export default function getWeatherComponent(data){
    const divWeatherContent = document.createElement("div");
    if(data){
        divWeatherContent.append(getCurrentWeatherComponent(data["currentConditions"]));
        divWeatherContent.append(getFutureWeatherComponent(data["days"]));
    }
    else{
        const divError = document.createElement("div");
        const h1ErrorMsg = document.createElement("h1");

        divError.classList.add("error");
        h1ErrorMsg.classList.add("error-msg");

        h1ErrorMsg.innerText = "Could not find this location in the database!";

        divError.append(h1ErrorMsg);
        divWeatherContent.append(divError);
    }
    return divWeatherContent;
}