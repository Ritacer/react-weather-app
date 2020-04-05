import React from "react";
import ProperDateCurrent from "./ProperDateCurrent";
import WeatherIconCurrent from "./WeatherIconCurrent";
import WeatherTemperatureCurrent from "./WeatherTemperatureCurrent";

export default function WeatherInfoCurrent(props) {
  return (
    <div className="WeatherInfoCurrent">
      <div className="overview">
        <div className="newOverview">
          <h1>{props.current.city}</h1>
          <ul>
            <li>
              <ProperDateCurrent date={props.current.date} />
            </li>
            <li>{props.current.description}</li>
          </ul>
        </div>
        <div className="clearfix">
          <div className="float-left">
            <WeatherIconCurrent info={props.current.icon} />
          </div>
          <WeatherTemperatureCurrent degrees={props.current.temperature} />
        </div>
        <ul>
          <li>Humidity: {props.current.humidity}%</li>
          <li>Wind: {props.current.wind}km/h</li>
        </ul>
      </div>
    </div>
  );
}
