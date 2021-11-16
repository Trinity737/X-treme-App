import "./App.css";
import Weather from "./Weather";

import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import "./Weather.css";

export default function App() {
  return (
    <div className="container">
      <h1>⚡ X-treme Weather</h1>
      <Weather />
    </div>
  );
}
