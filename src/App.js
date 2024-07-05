import sunny from './images/sun.png'
import './index.css';

export default function App() {
  return (
    <div className="App">
      <div className='container'>
        <div className='weather-app'>
             <div className='search-up'>
              <i className='fa-solid fa-location-dot'></i>
                    <div className='local'>London</div>
                    </div>
                    <div className='search-bar'>
                      <input type='text' placeholder='Enter a location...' />
                  <i className='fa-solid fa-magnifying-glass'></i>
                    </div>

            <div className='weather-icon'>
              <img src={sunny} alt='sunny' />
            </div>
            <div className='temp'>30° C</div>

            <div className='weather-description'>Clear & Sunny</div>

          <div className='date'>Friday July 30, 2024</div>
            <div className='weather-details'>
                <div className='humidity'>Humidity
                  <div>
              <i className='fa-solid fa-droplet'>80 %</i></div></div>

                <div className='wind'>Wind
                  <div>
                <i className='fa-solid fa-wind'>16 km/h</i></div></div>
            </div>

        </div>
           <div className='forecast-box'>
        <div className='box-column'>
        <div className='day-one'>day one forecast</div>
            <div className='day-two'>day 2 forecast</div>
            <div className='day-three'>day 3</div>
        </div>

    </div>
        </div>

      <footer>
      This project was coded by Nic Alonso, opened sourced on {""}
      <a href='https://github.com/Lonz8576' target='_blank'>GitHub</a>
      </footer>
    </div>

  );
}


