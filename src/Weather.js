import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./Weather.css";
import { css } from "@emotion/core";
import CircleLoader from "react-spinners/CircleLoader";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  const override = css`
    display: block;
    margin: 0 auto;
    border-color: #rgb(201, 24, 129);
  `;

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
  }

  function search() {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=294e4b388de693d904ecaa1582666157&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function displayPosition(position) {
    let apiUrlCurrent = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&appid=294e4b388de693d904ecaa1582666157`;
    axios.get(apiUrlCurrent).then(handleResponse);
  }

  function getCurrentPosition() {
    navigator.geolocation.getCurrentPosition(displayPosition);
  }

  function handleClick(event) {
    event.preventDefault();
    getCurrentPosition();
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="row">
          <div className="col-5">
            <form className="form-inline" onSubmit={handleSubmit}>
              <label className="sr-only" id="inlineFormInputName2">
                Name
              </label>
              <input
                type="text"
                className="form-control mb-2 mr-sm-2 w-50"
                placeholder="Enter city"
                autoComplete="off"
                autoFocus="on"
                onChange={handleCityChange}
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
                className="btn btn-primary mb-2"
                id="selector-button"
                onClick={handleClick}
              >
                Current city
              </button>
            </form>
            <WeatherInfo data={weatherData} />
          </div>
          <div className="col-7">
            <div className="container">
              <h2>KnowYourWeather</h2>
              <br />

              <WeatherForecast city={weatherData.city} />
              <footer>
                Powered by{" "}
                <a href="https://openweathermap.org/" target="_blank">
                  OpenWeather
                </a>
              </footer>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return (
      <div className="sweet-loading">
        <CircleLoader
          css={override}
          size={200}
          color={"#C91881"}
          loading={true}
        />
      </div>
    );
  }
}
