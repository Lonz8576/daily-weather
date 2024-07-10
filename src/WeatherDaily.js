import React, { useState } from "react";
import sunny from './images/sun.png'
import Forecast from "./ForecastDays";
import axios from 'axios';


export default function Weather() {
  const [load, setLoad] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  function handleResponse(response) {
    setWeatherData({
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      city: response.data.city,
      humidity: response.data.temperature.humidity,
      description: response.data.condition.description,
      icon: response.data.condition.icon_url


    });
      
      setLoad(true);
  }
  if (load) {

    return (
      <div className="App">
            <div className='container-sm'>
              <div className='weather-app'>
                   <div className='search-up'>
                    <i className='fa-solid fa-location-dot'></i>
                          <div className='local'>{weatherData.city}</div>
                          </div>
                          <div className='search-bar'>
                            <input type='search' placeholder='Enter a location...' />
                       <button type="submit" className="btn" value="search"><i className='fa-solid fa-magnifying-glass'></i></button>
                          </div>
      
                  <div className='weather-icon'>
                    <img src={weatherData.icon} alt='sunny' />
                  </div>
                  <div className='temp'>{Math.round(weatherData.temperature)} <span className="unit">°C</span></div>
      
                  <div className='weather-description'>{weatherData.description} </div>
      
                <div className='date'>Friday July 30, 2024</div>
                  <div className='weather-details'>
                      <div className='humidity'>Humidity
                        <div>
                    <i className='fa-solid fa-droplet'>{weatherData.humidity} <span>%</span> </i></div></div>
      
                      <div className='wind'>Wind
                        <div>
                      <i className='fa-solid fa-wind'>{Math.round(weatherData.wind)} <span>km/h</span> </i></div></div>
                  </div>
      
              </div>
      <Forecast />
      
          </div>
              </div>
      
      
       );

  } else {

    const apiKey = "2e99ddt6a7e37f7c164ob09d070ab380";
    let city = "London";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    
    axios.get(apiUrl).then(handleResponse);

      return "Loading....";

  }
   
}

