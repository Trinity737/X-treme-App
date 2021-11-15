import "./App.css";
import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.css";
import React from "react";

export default function App() {
  return (
    <div className="container">
      <header className="App-header">
        <h1>⚡ X-treme Weather</h1>
      </header>
      <Weather />
      <footer>
        Coded by Cheavon Pottinger and is on
        <a href="https://github.com/Trinity737/X-treme-App"> Github</a>
      </footer>
    </div>
  );
}
