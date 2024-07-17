import React, { useState } from "react";
import { WeatherSvg } from "weather-icons-animated";

export default function WeatherIcon(props){
        
    const stateMapping = {
        "clear-sky-day": "sunny",
        "clear-sky-night" : "clear-night",
        "few-clouds-day" : "partlycloudy",
        "few-clouds-night" : "cloudy",
        "scattered-clouds-day" : "partlycloudy",
        "broken-clouds-day" : "windy",
        "broken-clouds-night" : "cloudy",
        "shower-rain-day" : "rainy",
        "shower-rain-night" : "rainy",
        "rain-day": "pouring",
        "rain-night" : "pouring",
        "thunderstorm-day": "lightning",
        "thunderstorm-night": "lightning-rainy",
        "snow-day": "snowy",
        "snow-night": "snowy-rainy",
        "mist-day" : "windy-variant",
        "mist-night" : "fog"

};
        return(
             <WeatherSvg state ={stateMapping} width={100} height={100} />        
        );
    }

       
