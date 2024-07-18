import React, { useState }  from "react";
import { WeatherSvg } from "weather-icons-animated";

export default function WeatherIcon(props){
        
        const svgMapping = {
                "clear-sky-day":"sunny",
                "clear-sky-night" : "clear-night",
                "few-clouds-day" : "partly-cloudy",
                "few-clouds-night" : "cloudy",
                "scattered-clouds-day" : "partlycloudy",
                "scattered-clouds-night" : "windy",
                "broken-clouds-day" : "cloudy",
                "broken-clouds-night" : "rainy",
                "shower-rain-day" : "rainy",
                "shower-rain-night": "pouring",
                "rain-day" : "pouring",
                "rain-night": "lightning",
                "thunderstorm-day": "lightning-rainy",
                "thunderstorm-night": "snowy",
                "snow-day": "snowy-rainy",
                "snow-night" : "windy-variant",
                "mist-day" : "windy",
                "mist-night" : "fog"
        };
         return (
                <WeatherSvg state = {svgMapping[props.icons]} width={200} height={200} />

         );
}
    
       
