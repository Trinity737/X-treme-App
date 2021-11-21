import axios from "axios";
import React from "react";

export default function showForecast() {
  let apiKey = "3e2ce69ce76e734e0f6e4dbc39c85c56";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}`;
  axios.get(apiUrl).then(showForecast);
  return (
    <div className="Forecast">
      <div className="row">
        <div className="col">
          <div className="Forecast-day">Monday</div>
          <WeatherIcon code="01d" size={36} />
        </div>
      </div>
    </div>
  );
}
