import React from "react";
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function Summary() {

  const imageUrl = "https://www.ikea.com/sg/en/images/products/bergmund-chair-black-orrsta-light-grey__0859542_pe780965_s5.jpg?f=s";
  const summarizedText = "Shannon Matilda Wells Lucid (born January 14, 1943) is an American biochemist and retired NASA astronaut." +
  "She has flown in space five times, including a prolonged mission aboard the Russian space station Mir in 1996, and is the only American woman to have stayed on Mir. From 1996 to 2007, Lucid held the record for the longest duration spent in space by an American and by a woman. She was awarded the Congressional Space Medal of Honor in December 1996, making her the tenth person and the first woman to be accorded the honor."
  + "Lucid is a graduate of the University of Oklahoma, where she earned a bachelor's degree in chemistry in 1963, a master's degree in biochemistry in 1970, and a PhD in biochemistry in 1973. She was a laboratory technician at the Oklahoma Medical Research Foundation from 1964 to 1966, a research chemist at Kerr-McGee from 1966 to 1968, and a research associate at the Oklahoma Medical Research Foundation from 1973 to 1978."
  + "In 1978, Lucid was recruited by NASA for astronaut training with NASA Astronaut Group 8, the first class of astronauts to include women. She flew in space five times: on STS-51-G, STS-34, STS-43, STS-58, and her mission to Mir, for which Lucid traveled to the space station on Space Shuttle Atlantis with STS-76 and returned six months later with STS-79. She was the NASA Chief Scientist from 2002 to 2003 and a capsule communicator (CAPCOM) at Mission Control for numerous Space Shuttle missions, including STS-135, the final mission of the Space Shuttle program. Lucid announced her retirement from NASA in 2012.";
  
  return (
    <div>
      <Card sx={{ maxWidth: 700 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="auto"
            image={imageUrl}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Summary
            </Typography>
            <Typography variant="body1" color="text.primary">
              {summarizedText}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

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