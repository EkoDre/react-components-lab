import WeatherData from "./WeatherData.jsx";
import WeatherIcon from "./WeatherIcon.jsx";
import "./WeatherForecast.css";

function WeatherForecast(props) {
  return (
    <div className="weather">
     <WeatherIcon weatherForecast={props.weatherForecast}/> 
     <WeatherData weatherForecast={props.weatherForecast}/> 
    </div>
  );
}

export default WeatherForecast;


