import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { useState } from "react";
import "./SearchBox.css"




export default function SearchBox({updateInfo}) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);

    let API_URL = "https://api.openweathermap.org/data/2.5/weather"
    let API_KEY = "7b80141f8744d65a79fb7419a677bdaf"

    let getWeatherInfo = async ()=> {
        try {
            let Responce  =  await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
            let jesonResponce =  await Responce.json();
                //  console.log(jesonResponce);
                 let result = {
                       city : city,
                       temp : jesonResponce.main.temp,
                       tempmin : jesonResponce.main.temp_min,
                       tempmax : jesonResponce.main.temp_max,
                       humidity : jesonResponce.main.humidity,
                       feelsLike : jesonResponce.main.feels_like,
                       weather : jesonResponce.weather[0].description,
                 }
                //    console.log(result)
                   return result;

        }  catch(err) {
            throw err;
        }
    
                }   

   
    let handleChange = (evt) => {
         setCity(evt.target.value)
    };

    let handleSubmit =  async (evt) =>{

        try{
            evt.preventDefault();
            console.log(city);
            setCity("")
             let newInfo =  await getWeatherInfo();
             updateInfo(newInfo);
        }catch(err) {
            setError(true)
        }
       
    }
    return (
        <div className="SearchBox">
            <form onSubmit={handleSubmit}>
                <TextField id="city"
                 label="City name" 
                 variant="outlined" 
                  required 
                 value={city}
                 onChange={handleChange}
                 />
                <br></br><br></br>
                <Button variant="contained" 
                endIcon={<SendIcon />}
                 type="submit">search</Button>
                 {error && <p style={{color : "red"}}>No such place in our API</p>}
            </form>
        </div>
    );
}
