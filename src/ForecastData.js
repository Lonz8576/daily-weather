import React from "react";



export default function ForecastData(props) {
        return (
            <div forecastData>
            <div className='box-rows row row-cols-2'>
          <div className='day-one col'>
            Tuesday
          <div className='col forecast-date'>{props.futureData[0].time}  <span>July</span></div>
            </div>
            <div className='row d-flex justify-content-end temp-forecast'>
              {props.futureData[0].temperature.maximum}°
            </div>
            </div>
            <div className='box-rows row row-cols-2'>
              <div className='day-two'>
                Wednesday
                <div className='col forecast-date'>24  <span>July</span></div>
            </div>
            <div className='row d-flex justify-content-end temp-forecast'>
            {props.futureData[1].temperature.maximum}°
            </div>
            </div>
            <div className='box-rows row row-cols-2'>
              <div className='day-two'>
                Thursday
                <div className='col forecast-date'>25  <span>July</span></div>
            </div>
            <div className='row d-flex justify-content-end temp-forecast'>
            {props.futureData[2].temperature.maximum}°
            </div>
                </div>
                <div className='box-rows row row-cols-2'>
              <div className='day-two'>
                Friday
                <div className='col forecast-date'>26  <span>July</span></div>
            </div>
            <div className='row d-flex justify-content-end temp-forecast'>
            {props.futureData[3].temperature.maximum}°
            </div>
                </div>
                <div className='box-rows row row-cols-2'>
              <div className='day-three'>
                Saturday
                <div className='col forecast-date'>27  <span>July</span></div>
            </div>
            <div className='row d-flex justify-content-end temp-forecast'>
            {props.futureData[4].temperature.maximum}°
            </div>
                </div>
                
          </div>
            
        );
}
