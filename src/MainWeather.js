import React from "react";
import MainDate from "./MainDate";




export default function MainWeather(props) {
    return(

      <div className="MainWeather">
        <div className='weather-icon'>
                    <img src={props.info.icon} alt='' />
                  </div>
                  <div className='temp'>{Math.round(props.info.temperature)} <span className="unit">°F</span></div>
      
                  <div className='text-capitalize weather-description'>{props.info.description} </div>
      
                <div className='date'><MainDate date={props.info.date} /></div>

                  <div className='weather-details container-fluid py-1'>
                      <div className='humidity py-2'>Humidity
                        <div className="daily-details">
                    {props.info.humidity}<span> %</span></div></div>
      
                      <div className='wind py-2'>Wind
                        <div className="daily-details fs-6">
                    {Math.round(props.info.wind)}<span> km/h</span></div></div>
                      <div className='wind py-2'>Feels like
                        <div className="daily-details">
                      {Math.round(props.info.feels)}<span> °F</span></div></div>
                      <div className='wind py-2'>Pressure
                        <div className="daily-details">
                      {Math.round(props.info.pressure)}<span> Hg</span></div></div>
                  </div>
                  </div>  
    );
}