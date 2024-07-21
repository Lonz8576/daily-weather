import React from "react";
import { WeatherSvg } from "weather-icons-animated";

export default function WeatherIcon(props){
        
        const svgMapping = {
                "clear-sky-day":"sunny",
                "clear-sky-night" : "clear-night",
                "few-clouds-day" : "partlycloudy",
                "few-clouds-night" : "partlycloudy",
                "scattered-clouds-day" : "cloudy",
                "scattered-clouds-night" : "fog",
                "broken-clouds-day" : "partlycloudy",
                "broken-clouds-night" : "cloudy",
                "shower-rain-day" : "rainy",
                "shower-rain-night": "rainy",
                "rain-day" : "pouring",
                "rain-night": "pouring",
                "thunderstorm-day": "lightning-rainy",
                "thunderstorm-night": "lightning",
                "snow-day": "snowy",
                "snow-night" : "snowy-rainy",
                "mist-day" : "windy",
                "mist-night" : "windy-variant"
        };
         return (
                <WeatherSvg state = {svgMapping[props.icons]} width={200} height={200} />

         );
}
    
       
