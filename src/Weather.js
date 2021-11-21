import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherForecast from "./WeatherForecast";
import "bootstrap/dist/css/bootstrap.css";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState(null);
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      Temperature: response.data.main.temp,
      wind: 12,
      city: response.data.name,
    });
    setReady(true);
  }
  if (ready) {
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
        <h1>{weatherData.city}</h1>
        <ul>
          <li className="date">Wednesday 12:00pm</li>
          <li className="description">{weatherData.description}</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <img
              src="https://j.theweathernetwork.com/wx_icons/v1/2.png"
              alt="sunny"
              width="60"
              rel="noreferrer"
              className="float-left"
            />
            <div className="float-left">
              <span className="Temperature">
                {Math.round(weatherData.temperature)}
              </span>
              <span className="unit">
                {" "}
                <a href="/">C</a> / <a href="/">F</a>
              </span>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: 30 %</li>
              <li>Wind: {weatherData.wind} Km/h</li>
            </ul>
            <WeatherForecast />
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
  } else {
    const apiKey = "3e2ce69ce76e734e0f6e4dbc39c85c56";
    let city = "Toronto";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return "loading...";
  }
}
