import React, { useState } from 'react';
import axios from 'axios';
import ForecastData from './ForecastData';







export default function Forecast(props) {
  let [forecastReady, setForecastReady] = useState(false);
  let [forecast, setForecast] = useState(null);

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
            if (index < 6){
              return (
                <div key={index}>
                <ForecastData data={nextDays}/>
                  </div>
              );
            }
          })}
          <ForecastData data={forecast[0]} />
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
    
  

