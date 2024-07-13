import React, { useState } from "react";
import Forecast from "./ForecastDays";
import axios from 'axios';


export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({load : false});
  function handleResponse(response) {
    setWeatherData({
      load: true,
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      city: response.data.city,
      humidity: response.data.temperature.humidity,
      description: response.data.condition.description,
      icon: response.data.condition.icon_url,
      date: "Friday July 30, 2024"


    });
      
      
  }
  if (weatherData.load) {

    return (
      <div className="App">
            <div className='container-md'>
              <div className='container-sm weather-app mt-2'>
                   <div className='search-up'>
                    <i className='fa-solid fa-location-dot'></i>
                          <div className='local'>{weatherData.city}</div>
                          </div>
                          <div className='search-bar mt-3 pt-2'>
                            <input className="position-absolute top-10 start-50 translate-middle" type='search' placeholder='Enter a location...' />
                       <button type="submit" className="btn" value="search"><i className='fa-solid fa-magnifying-glass text-dark text-opacity-90'></i></button>
                          </div>
      
                  <div className='weather-icon'>
                    <img src={weatherData.icon} alt='sunny' />
                  </div>
                  <div className='temp'>{Math.round(weatherData.temperature)} <span className="unit">°C</span></div>
      
                  <div className='text-capitalize weather-description'>{weatherData.description} </div>
      
                <div className='date'>{weatherData.date}</div>

                  <div className='weather-details mx-5 py-1'>
                      <div className='humidity py-2'>Humidity
                        <div className="daily-details">
                    {weatherData.humidity}<span> %</span></div></div>
      
                      <div className='wind py-2'>Wind
                        <div className="daily-details">
                    {Math.round(weatherData.wind)}<span> km/h</span></div></div>
                      <div className='wind py-2'>Wind
                        <div className="daily-details">
                      {Math.round(weatherData.wind)}<span> km/h</span></div></div>
                      <div className='wind py-2'>Wind
                        <div className="daily-details">
                      {Math.round(weatherData.wind)}<span> km/h</span></div></div>
                  </div>
          <Forecast />
              </div>
     
      
          </div>
              </div>
      
      
       );

  } else {

    const apiKey = "2e99ddt6a7e37f7c164ob09d070ab380";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    
    axios.get(apiUrl).then(handleResponse);

      return (
        <div class="d-flex justify-content-center text-warning">
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      );

  }
   
}

