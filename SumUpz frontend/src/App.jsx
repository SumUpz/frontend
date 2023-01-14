import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Home from "./pages/Home";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank"></a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <Home />

      <div className="card"></div>
    </div>
  );
}

export default App;
