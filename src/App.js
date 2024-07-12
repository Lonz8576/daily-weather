
import Weather from './WeatherDaily.js';
import './index.css';
import axios from 'axios';

export default function App() {
  return (
    <div>

<Weather defaultCity = "Saint Petersburg" />
      <footer>
      This project was coded by {""} <a href='https://nic-alonso-dev.netlify.app' >Nic Alonso</a>, opened sourced on {""}
      
      <a href='https://github.com/Lonz8576' >GitHub</a>
      
      </footer>
      </div>


  );
}


