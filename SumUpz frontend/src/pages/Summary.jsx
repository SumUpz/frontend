import React from "react";
import Button from '@mui/material/Button';

function Summary() {
  return (
    <div>
      <div style={{float: 'left'}}>
        <p>Here is your summarized text!</p>
        {/*
        Insert summarized text from API
        */}
      </div>

      <div style={{float: 'right'}}>
        <img src="https://www.ikea.com/sg/en/images/products/bergmund-chair-black-orrsta-light-grey__0859542_pe780965_s5.jpg?f=s" 
             width="500"
             height="auto"/>
      </div>


      <div>
      <Button variant="contained">Go back!</Button>
        {/*
        Route back to Home page
        */}
      </div>
      
    </div>
  );
}

export default Summary;