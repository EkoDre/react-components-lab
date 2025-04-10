function WeatherIcon (props) {
    console.log(props)
    return <img src={props.weatherForecast.img} alt={props.weatherForecast.imgAlt} />
}



export default WeatherIcon;