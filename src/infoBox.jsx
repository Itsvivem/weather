import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import "./infoBox.css"

export default function InfoBox({info}) {
    let HOT_IMG = "https://stories.uq.edu.au/contact-magazine/2023/el-nino-is-here-will-it-be-australias-hottest-summer-ever/assets/0FpL4PYE05/uq-contact-el-nino-summer-weather-headline-2560x1440.webp"
    let RAINY_IMG = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMR_Xsc-jYNgEgpWWdZyoga87sZZxUVb4EtA&s"
    let COLD_IMG = "https://cdn.vectorstock.com/i/500p/07/50/winter-snow-landscape-houses-snowflakes-falling-vector-33910750.jpg"
    return (
        <div className="infoBox">
            <div className="cardContainer">
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={info.humidity > 80 ? RAINY_IMG : info.temp > 15 ? HOT_IMG : COLD_IMG}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city} {""} {info.humidity > 80 ? <ThunderstormIcon/> : info.temp > 15 ? <WbSunnyIcon/> : <AcUnitIcon/>}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                            <p>Temperature = {info.temp}&deg;C</p>
                            <p>Humidity = {info.humidity}</p>
                            <p>Min Temp = {info.tempMin}&deg;C</p>
                            <p>Max Temp = {info.tempMax}&deg;C</p>
                            <p>The weather can be described as {info.weather} and feels like {info.feelsLike}&deg;C</p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}