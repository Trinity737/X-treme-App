import React from "react";
import "./Weather.css";
import axios from "axios";
import Forecast from "./Forecast";

export default function Weather() {
  function handleSubmit(response) {
    let apiKey = "3e2ce69ce76e734e0f6e4dbc39c85c56";
    let city = "Toronto";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleSubmit);
  }

  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-8">
            <input
              type="search"
              placeholder="Enter a City"
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-4">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary"
              w-100
            />
          </div>
        </div>
      </form>
      <h1>Toronto, Ontario</h1>
      <ul>
        <li className="date">Wednesday 12:00pm</li>
        <li className="description">Sunny</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://j.theweathernetwork.com/wx_icons/v1/2.png"
            alt="sunny"
            width="60"
            rel="noreferrer"
          />
          24°
          <a href="/">C</a> / <a href="/">F</a>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: 30 %</li>
            <li>Wind: 5 Km/h</li>
          </ul>
          <Forecast />
        </div>
        <footer>
          <small>
            This project was coded by Cheavon Pottinger and is open-sourced on
            <a href="https://github.com/Trinity737/X-treme-App"> Github</a>
          </small>
        </footer>
      </div>
    </div>
  );
}
