import React from "react";
import "./Weather.css";

export default function Weather() {
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
              <h1>Lisbon</h1>
              <ul>
                <li>Last updated: Saturday, 17:33</li>
                <li>Description: Sunny</li>
              </ul>
            </div>
            <div className="clearfix">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                alt="sunny"
                className="float-left"
              />
              <strong>17</strong>
              <span className="units">ºC</span>
            </div>
            <ul>
              <li>Humidity: 5%</li>
              <li>Wind: 3km/h</li>
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
}
