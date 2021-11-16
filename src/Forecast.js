import React from "react";

export default function Forecast() {
  let apiKey = "3e2ce69ce76e734e0f6e4dbc39c85c56";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}`;
  return "boom";
}
