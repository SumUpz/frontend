import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useNavigate,
} from "react-router-dom";
import Home from "./pages/home";
import Summary from "./pages/Summary";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <App />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/summary" element={<Summary />} />
    </Routes>
  </Router>
);
