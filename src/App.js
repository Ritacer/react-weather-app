import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          <a
            href="https://github.com/Ritacer/react-weather-app"
            target="_blank"
          >
            Open-source
          </a>{" "}
          code by{" "}
          <a
            href="https://www.linkedin.com/in/rita-cerqueira-20198766"
            target="_blank"
          >
            Rita Cerqueira
          </a>
          , 2020.
        </footer>
      </div>
    </div>
  );
}
