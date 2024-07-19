import React from 'react'




export default function Forecast() {
  return (
    
 <div className='forecast-box'>
    <div className='next d-flex justify-content-start'>Next 5 days</div>
        <div className='box-rows row row-cols-2'>
        <div className='day-one col'>
          day one forecast
        <div className='col forecast-date'>Date</div>
          </div>
          <div className='row d-flex justify-content-end temp-forecast'>
            Temp
          </div>
          </div>
          <div className='box-rows row row-cols-2'>
            <div className='day-two'>
              day 2 forecast
              <div className='col forecast-date'>Date</div>
          </div>
          <div className='row d-flex justify-content-end temp-forecast'>
            Temp
          </div>
              </div>
              <div className='box-rows row row-cols-2'>
            <div className='day-two'>
              day 2 forecast
              <div className='col forecast-date'>Date</div>
          </div>
          <div className='row d-flex justify-content-end temp-forecast'>
            Temp
          </div>
              </div>
              <div className='box-rows row row-cols-2'>
            <div className='day-two'>
              day 2 forecast
              <div className='col forecast-date'>Date</div>
          </div>
          <div className='row d-flex justify-content-end temp-forecast'>
            Temp
          </div>
              </div>
              <div className='box-rows row row-cols-2'>
            <div className='day-three'>
              day 3
              <div className='col forecast-date'>Date</div>
          </div>
          <div className='row d-flex justify-content-end temp-forecast'>
            Temp
          </div>
              </div>
              
        </div>
        
       
      

)
}
