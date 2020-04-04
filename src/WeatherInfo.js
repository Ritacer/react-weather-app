import React from "react";
import ProperDate from "./ProperDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="overview">
        <div className="newOverview">
          <h1>{props.data.city}</h1>
          <ul>
            <li>
              <ProperDate date={props.data.date} />
            </li>
            <li>{props.data.description}</li>
          </ul>
        </div>
        <div className="clearfix">
          <div className="float-left">
            <WeatherIcon code={props.data.icon} />
          </div>
          <strong>{Math.round(props.data.temperature)}</strong>
          <span className="units">ºC</span>
        </div>
        <ul>
          <li>Humidity: {props.data.humidity}%</li>
          <li>Wind: {props.data.wind}km/h</li>
        </ul>
      </div>
    </div>
  );
}
