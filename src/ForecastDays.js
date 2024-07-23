import React, { useState } from 'react';
import axios from 'axios';
import ForecastData from './ForecastData';






export default function Forecast(props) {
  let [forecastReady, setForecastReady] = useState(false);
  let [forecastDays, setForecastDays] = useState(null);

  function handleResponse(response) {
    setTimeout(() => {
  console.log("Delayed");
}, "3000");
      setForecastDays(response.data.daily);
      setForecastReady(true);

  }


 

    if (forecastReady) {

      return (

      <div className='forecast-box'>
      <div className='next d-flex justify-content-start'>Next 7 days</div>
          <ForecastData futureData={forecastDays[0]} />
          <ForecastData futureData={forecastDays[1]} />
          <ForecastData futureData={forecastDays[2]} />
          <ForecastData futureData={forecastDays[3]} />
          <ForecastData futureData={forecastDays[4]} />
          <ForecastData futureData={forecastDays[5]} />
          <ForecastData futureData={forecastDays[6]} />
         
                </div>
      )
     
     } else {

      const apiKey = "2e99ddt6a7e37f7c164ob09d070ab380";
      let lat = props.latlon.latitude;
      let lon = props.latlon.longitude;
      
    
    
      let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lat=${lat}&lon=${lon}&key=${apiKey}&units=imperial`;
      

        axios.get(apiUrl).then(handleResponse);
        
        
       

          return "loading";
    
    
       
    }
    }
  

