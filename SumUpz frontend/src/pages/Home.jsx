import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useNavigate,
} from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const navigateToSummary = () => {
    // 👇️ navigate to /summary
    navigate("/summary");
  };

  return (
    <div>
      <h1>Sum Upz</h1>
      <h2> Summarize what you need</h2>
      <Box
        sx={{
          width: 500,
          maxWidth: "100%",
          margin: 2,
        }}
      >
        <TextField multiline fullWidth id="fullWidth" />
      </Box>
      <Button
        variant="contained"
        endIcon={<SendIcon />}
        onClick={navigateToSummary}
      >
        Summarize
      </Button>
    </div>
  );
}

export default Home;
