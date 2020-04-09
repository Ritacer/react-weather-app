import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIconForecast(props) {
  const codeMaping = {
    "01d": "CLEAR_DAY",
    "01n": "CLEAR_NIGHT",
    "02d": "PARTLY_CLOUDY_DAY",
    "02n": "PARTLY_CLOUDY_NIGHT",
    "03d": "PARTLY_CLOUDY_DAY",
    "03n": "PARTLY_CLOUDY_NIGHT",
    "04d": "CLOUDY",
    "04n": "CLOUDY",
    "09d": "RAIN",
    "09n": "RAIN",
    "10d": "RAIN",
    "10n": "RAIN",
    "11d": "RAIN",
    "11n": "RAIN",
    "13d": "SNOW",
    "13n": "SNOW",
    "50d": "FOG",
    "50n": "FOG",
  };
  const colorCodeMaping = {
    "01d": "rgb(226, 186, 8)",
    "01n": "dimgray",
    "02d": "rgb(226, 186, 8)",
    "02n": "dimgray",
    "03d": "rgb(226, 186, 8)",
    "03n": "dimgray",
    "04d": "rgb(5, 141, 165)",
    "04n": "rgb(82, 78, 78)",
    "09d": "rgb(0, 51, 128)",
    "09n": "darkslategray",
    "10d": "rgb(0, 51, 128)",
    "10n": "darkslategray",
    "11d": "rgb(0, 51, 128)",
    "11n": "darkslategray",
    "13d": "rgb(175, 171, 171)",
    "13n": "rgb(87, 101, 104)",
    "50d": "rgb(175, 171, 171)",
    "50n": "rgb(87, 101, 104)",
  };
  return (
    <ReactAnimatedWeather
      icon={codeMaping[props.code]}
      color={colorCodeMaping[props.code]}
      size={60}
      animate={true}
    />
  );
}
