import { useState } from "react"
import InfoBox from "./InfoBox"
import SearchBox from "./SearchBox"

export default function WeatherApp() {
          const [weatherInfo, setWeatherInfo] = useState( {

             city : "Delhi" ,     
    feelsLike: 40.82,  
    humidity: 13,
    temp: 42.84,
 tempmax: 43.05,
   tempmin: 42.84,
   weather: "haze" 
          })
    
      let updateInfo = (newInfo) => {
          setWeatherInfo(newInfo)
      }
                        
    return ( 
        <div style={{textAlign: "center"}}><h1>Weather app by Hareesh</h1>
        <SearchBox updateInfo = {updateInfo}/>
        <InfoBox Info={weatherInfo}/>
        </div>
    )
} 