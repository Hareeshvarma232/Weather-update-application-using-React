import "./InfoBox.css"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';


export default function InfoBox ({Info}) {

    const INIT_URL = "https://images.unsplash.com/photo-1673191898498-9bac443b2407?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

    const HOT_URL = "https://media.istockphoto.com/id/847094294/photo/too-hot-at-home.jpg?s=2048x2048&w=is&k=20&c=Mob3hrgr1EdEKXyftNXOOMZ_mdPtSwynSAfzp7XqWBs=";
    const COLD_URL = "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAIN_URL = "https://images.unsplash.com/photo-1615043499772-ed8b0ded325e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    

    return ( <div className="InfoBox">
    <h1>Weather Info</h1>
    <div className="cardContainer">
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image= {Info.humidity > 80 ? RAIN_URL : Info.temp > 15 ? HOT_URL : COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {Info.city}
        {Info.humidity > 80
         ?  <ThunderstormIcon/> : Info.temp > 15
          ? <AcUnitIcon/>: <WbSunnyIcon/>}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
          <p>Temperature - {Info.temp}&deg;C</p>
          <p>humidity - {Info.humidity}</p>
          <p>Min temp - {Info.tempmin}&deg;C</p>
          <p>Max temp - {Info.tempmax}&deg;C</p>
          <p>Weather can be desribed as <i>{Info.weather}</i> and feels like - {Info.feelsLike}&deg;C</p>
        </Typography>
      </CardContent>
     
    </Card>
    </div>
    </div>
        )
    }