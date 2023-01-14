import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Home from "./pages/Home";
import Summary from "./pages/Summary";
import "./App.css";
import React from "react";

function App() {
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank"></a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className="card"></div>
    </div>
  );
}

export default App;
