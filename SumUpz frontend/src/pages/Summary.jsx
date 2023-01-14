import React from "react";
import Button from "@mui/material/Button";
import { BrowserRouter as Router, useNavigate } from "react-router-dom";

function Summary() {
  const navigate = useNavigate();

  const navigateToHome = () => {
    // 👇️ navigate to /summary
    navigate("/");
  };
  return (
    <div>
      <div style={{ float: "left" }}>
        <p>Here is your summarized text!</p>
        {/*
        Insert summarized text from API
        */}
      </div>

      <div style={{ float: "right" }}>
        <img
          src="https://www.ikea.com/sg/en/images/products/bergmund-chair-black-orrsta-light-grey__0859542_pe780965_s5.jpg?f=s"
          width="500"
          height="auto"
        />
      </div>

      <div>
        <Button variant="contained" onClick={navigateToHome}>
          Go back!
        </Button>
      </div>
    </div>
  );
}

export default Summary;
