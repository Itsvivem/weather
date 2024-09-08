import SearchBox from "./searchBox"
import InfoBox from "./infoBox"
import { useState } from "react"

export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo] = useState({
        city:"Manali",
        feelsLike: 24.08,
        temp: 12.05,
        tempMin: 25.05,
        tempMax: 25.05,
        humidity: 47,
        weather: "haze"
    })

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo)
    }

    return(
        <div style={{textAlign: "center"}}>
            <h1>Weather App</h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}