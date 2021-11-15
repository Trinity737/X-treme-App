import "./App.css";
import Weather from "./Weather";
import Forecast from "./Forecast";
import "bootstrap/dist/css/bootstrap.css";
import React from "react";

export default function App() {
  return (
    <div className="container">
      <header className="App-header">
        <h1>⚡ X-treme Weather</h1>
      </header>
      <form>
        <div className="row">
          <div className="col-8">
            <input
              type="search"
              placeholder="Enter a City"
              className="form-control"
            />
          </div>
          <div className="col-4">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <Weather />
      <Forecast />
      <footer>
        <small>
          This project was coded by Cheavon Pottinger and is open-sourced on
          <a href="https://github.com/Trinity737/X-treme-App"> Github</a>
        </small>
      </footer>
    </div>
  );
}
