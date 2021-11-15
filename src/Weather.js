import React from "react";

export default function Weather() {
  return (
    <div className="Weather">
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
        </div>
      </div>
    </div>
  );
}
