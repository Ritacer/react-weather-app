import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed
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
              >
                Current city
              </button>
            </form>
            <WeatherInfo data={weatherData} />
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
    search();
    return "Loading";
  }
}
