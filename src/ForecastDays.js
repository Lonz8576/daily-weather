import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ForecastData from './ForecastData';







export default function Forecast(props) {
  let [forecastReady, setForecastReady] = useState(false);
  let [forecast, setForecast] = useState(null);


    useEffect (() => {
      setForecastReady(false);

    }, [props.latlon]);



  function handleResponse(response) {
 
      setForecast(response.data.daily);
      setForecastReady(true);

  }

    if (forecastReady)   {
      console.log(forecast);
      return (

      <div className='forecast-box'>
      <div className='next d-flex justify-content-start'>Next 7 days </div>
          {forecast.map(function(nextDays, index) {
            if (index < 7){
              return (
                <div key={index}>
                <ForecastData data={nextDays}/>
                  </div>
              );
            } else {
              return null;
            }
          })}
          
                </div>
                );
     
   } else {

      const apiKey = "2e99ddt6a7e37f7c164ob09d070ab380";
      let lat = props.latlon.latitude;
      let lon = props.latlon.longitude;
      
    
    
      let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lat=${lat}&lon=${lon}&key=${apiKey}&units=imperial`;
      

        axios.get(apiUrl).then(handleResponse);
        
        
       

          return "loading";
    
    
     }
    }
    
  

