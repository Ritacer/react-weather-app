import React, { useState } from "react";
import axios from "axios";
import WeatherIconForecast from "./WeatherIconForecast";
import "./WeatherForecast.css";
import { css } from "@emotion/core";
import PropagateLoader from "react-spinners/PropagateLoader";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);
  const override = css`
    display: block;
    margin: 0 auto;
    border-color: #rgb(241, 109, 137);
  `;

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
          {forecast.list.slice(0, 4).map(function (weather, index) {
            return (
              <div className="col-auto" key={index}>
                <h3>{formatHours(new Date(weather.dt * 1000))}</h3>
                <WeatherIconForecast code={weather.weather[0].icon} />
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
    return (
      <div>
        <PropagateLoader
          css={override}
          size={15}
          color={"#F16D89"}
          loading={true}
        />
      </div>
    );
  }
}
