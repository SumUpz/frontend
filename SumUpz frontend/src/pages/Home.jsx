import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function Home() {
  return (
    <div>
      <h1>Sum Upz</h1>
      <h2> Summarize what you need</h2>
      <Box
        sx={{
          width: 500,
          maxWidth: "100%",
        }}
      >
        <TextField multiline fullWidth id="fullWidth" />
      </Box>
    </div>
  );
}

export default Home;
