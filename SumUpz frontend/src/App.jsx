import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Home from "./pages/Home";
import Summary from "./pages/Summary";
import "./App.css";
import React from "react";
import MenuBookIcon from "@mui/icons-material/MenuBook";

function App() {
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank"></a>
        <a href="https://reactjs.org" target="_blank">
          <MenuBookIcon style={{ fontSize: 150 }} />
        </a>
      </div>
      <div className="card"></div>
    </div>
  );
}

export default App;
