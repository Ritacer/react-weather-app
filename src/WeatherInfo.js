import React from "react";
import ProperDate from "./ProperDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

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
          <WeatherTemperature celsius={props.data.temperature} />
        </div>
        <ul>
          <li>Humidity: {props.data.humidity}%</li>
          <li>Wind: {props.data.wind}km/h</li>
        </ul>
      </div>
    </div>
  );
}
