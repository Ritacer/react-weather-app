import React, { useState } from "react";
import axios from "axios";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);
  function showForecast(response) {
    setForecast(response.data);
    setLoaded(true);
  }

  function formatHours(date) {
    let hours = date.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    return `${hours}:${minutes}`;
  }

  if (loaded && forecast.city.name === props.city) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecast.list.slice(0, 4).map(function (weather) {
            return (
              <div className="col-auto">
                <h3>{formatHours(new Date(weather.dt * 1000))}</h3>
                <WeatherIcon code={weather.weather[0].icon} />
                <div className="weather-forecast-temperature">
                  <strong> {Math.round(weather.main.temp_max)}º </strong>
                  {Math.round(weather.main.temp_min)}º
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    let apiUrlForecast = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&units=metric&appid=294e4b388de693d904ecaa1582666157`;
    axios.get(apiUrlForecast).then(showForecast);
    return null;
  }
}
