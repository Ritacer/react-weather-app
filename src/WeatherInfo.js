import React from "react";
import ProperDate from "./ProperDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="overview">
        <div className="newOverview">
          <h1>
            {props.data.city} {props.current.city}{" "}
          </h1>
          <ul>
            <li>
              <ProperDate date={props.data.date} />
            </li>
            <li>{props.data.description}</li>
          </ul>
        </div>
        <div className="clearfix">
          <img
            src={props.data.icon}
            alt={props.data.description}
            className="float-left"
          />
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
