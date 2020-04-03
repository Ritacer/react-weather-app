import React from "react";
import ProperDateCurrent from "./ProperDateCurrent";

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
          <img
            src={props.current.icon}
            alt={props.current.description}
            className="float-left"
          />
          <strong>{Math.round(props.current.temperature)}</strong>
          <span className="units">ºC</span>
        </div>
        <ul>
          <li>Humidity: {props.current.humidity}%</li>
          <li>Wind: {props.current.wind}km/h</li>
        </ul>
      </div>
    </div>
  );
}
