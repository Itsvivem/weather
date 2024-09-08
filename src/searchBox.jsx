import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './searchBox.css'
import { useState } from 'react';

export default function SearchBox({updateInfo}){
    let [city,setCity] = useState("")
    const API_URL = "http://api.openweathermap.org/data/2.5/weather"
    const API_KEY = "7acc92e1e1eec771f1c1b00a228c73eb"
    
    async function apiData(){
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
        let jsonResponse = await response.json()
        let result = {
            city: city,
            temp: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feelsLike: jsonResponse.main.feels_like,
            weather: jsonResponse.weather[0].description
        }
        console.log(result)
        return result
    }

    function changeHandle(event){
        setCity(event.target.value)
    }

    async function formHandle(event){
        event.preventDefault()
        setCity("")
        let newInfo = await apiData()
        updateInfo(newInfo)
    }

    return(
        <div className='searchBox' style={{marginBottom:"20px"}}>
            <form onSubmit={formHandle}>
            <TextField id="city" label="City Name" variant="outlined" value={city} onChange={changeHandle} required/><br /><br />
            <Button variant="contained" type='submit'>Search</Button>
            </form>
        </div>
    )
}