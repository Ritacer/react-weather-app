import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: "Saturday, 17:33",
      description: response.data.weather[0].description,
      icon: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed
    });
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="row">
          <div className="col-5">
            <form className="form-inline">
              <label className="sr-only" for="inlineFormInputName2">
                Name
              </label>
              <input
                type="text"
                className="form-control mb-2 mr-sm-2 w-50"
                placeholder="Enter city"
                autoComplete="off"
                autoFocus="on"
              />
              <div>
                <button type="submit" className="btn btn-primary mb-2">
                  Submit
                </button>
              </div>
            </form>
            <form>
              <button
                type="button"
                class="btn btn-primary mb-2"
                id="selector-button"
              >
                Current city
              </button>
            </form>
            <div className="overview">
              <div className="newOverview">
                <h1>{weatherData.city}</h1>
                <ul>
                  <li>Last updated: {weatherData.date}</li>
                  <li>{weatherData.description}</li>
                </ul>
              </div>
              <div className="clearfix">
                <img
                  src={weatherData.icon}
                  alt={weatherData.description}
                  className="float-left"
                />
                <strong>{Math.round(weatherData.temperature)}</strong>
                <span className="units">ºC</span>
              </div>
              <ul>
                <li>Humidity: {weatherData.humidity}%</li>
                <li>Wind: {weatherData.wind}km/h</li>
              </ul>
            </div>
          </div>
          <div className="col-7">
            <h2>KnowYourWeather</h2>
            <br />
            <div>Forecast</div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=294e4b388de693d904ecaa1582666157&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading";
  }
}
