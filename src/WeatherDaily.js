import React, { useState } from "react";
import Forecast from "./ForecastDays";
import axios from 'axios';
import MainWeather from "./MainWeather";


export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({load : false});
  function handleResponse(response) {
    setWeatherData({
      load: true,
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      city: response.data.city,
      humidity: response.data.temperature.humidity,
      pressure: response.data.temperature.pressure,
      feels: response.data.temperature.feels_like,
      description: response.data.condition.description,
      icons: response.data.condition.icon,
      date:new Date(response.data.time * 1000)
    });   
      
  }

    function search(){
      const apiKey = "2e99ddt6a7e37f7c164ob09d070ab380";
      const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
      
      axios.get(apiUrl).then(handleResponse);

    }

    function handleSubmit(event) {
      event.preventDefault();
      search();

    }

    function handleCityChange(event) {
      setCity(event.target.value);

    }

  if (weatherData.load) {

    return (
      <div className="App">
            <div className='container-md'>
              <div className='container-sm weather-app mt-2'>
                   <div className='search-up'>
                    <i className='fa-solid fa-location-dot'></i>
                          <div className='local'>{city}</div>
                          </div>
                          <form className='search-bar mt-3 pt-2' onSubmit={handleSubmit} id="search-form">
                            <input className="position-absolute top-10 start-50 translate-middle" type='search' placeholder='Enter a location...' autoFocus="on" onChange={handleCityChange} />


                       <button type="submit" className="btn" value="Search"><i className='fa-solid fa-magnifying-glass text-light text-opacity-90'></i></button>
                          </form>
                        <MainWeather info={weatherData} />
                  
          <Forecast />
          
              </div>
     
      
          </div>
              </div>
      
      
       );

  } else {

      search();

      return (
        <div className="d-flex justify-content-center text-warning m-5">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      );

  }
   
}

