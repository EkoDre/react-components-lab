import WeatherIcon from "./WeatherIcon";

function WeatherData(props) {
  return (
    <>
      <p>
        <span>conditions: </span>{props.weatherForecast.conditions}
      </p>
      <p>
        <span>time: </span>{props.weatherForecast.time}
      </p>
    </>
  );
}

export default WeatherData;
