import React, {useState} from "react";


export default function WeatherTemp(props){
    const [unit, setUnit]=useState("fahrenheit");
    
    function showCelsius(event){
        event.preventDefault();
        setUnit("celsius");
    }

    function showFahrenheit(event){
        event.preventDefault();
        setUnit("fahrenheit");
    }

    if (unit === "fahrenheit" ){
        return(
            <div className="WeatherTemp">
                <div className='temp'> {Math.round(props.fahrenheit)}
                <span className="unit">
                     °F | {" "} 
                    <a href="/" onClick={showCelsius}>
                    °C
                    </a>
                    </span>
                </div>
            </div>
    
);
    } else {
        let celsius =(props.fahrenheit * 5) / 9;

        return(
            <div className="WeatherTemp">
            <div className='temp'>{Math.round(celsius)}
            <span className="unit">
            <a href="/" onClick={showFahrenheit}> 
             °F  
            </a> {" "}| 
            °C
            </span>
            </div>
        </div>
        );
    }
}
