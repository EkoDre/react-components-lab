import WeatherIcon from "./WeatherIcon";

function WeatherData({conditions, day, time}) {
  return (
    <>
      <h2>{day}</h2>
      <WeatherIcon src="" alt="" />
      <p>
        <span>conditions: </span>{conditions}
      </p>
      <p>
        <span>time: </span>{time}
      </p>
    </>
  );
}

export default WeatherData;
