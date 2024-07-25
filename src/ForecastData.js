import React from "react";
import WeatherIcon from "./WeatherIcon";






export default function ForecastData(props) {

function maxTemp(){
    let dayMaxTemp = Math.round(props.data.temperature.day);
    return `${dayMaxTemp}°`;
}
    
  
  function dailyDate() {
    let date = new Date(props.data.time * 1000);
    let dailyDate = date.getDay();
    let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

        return days[dailyDate];
  }

        return (
            <div>
            <div className='box-rows row row-cols-2'>
          <div className='day-one col'>
            
          <div className='col forecast-date'>{dailyDate()} 
          <div className="forecast-description">{props.data.condition.description} </div>
                </div>
            </div>
            <div className='row d-flex justify-content-end temp-forecast'>
              {maxTemp()}
            </div>
            </div>
           
                
          </div>
            
        );
}
