import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { TextContext } from '../context/context'

function Summary() {
  const navigate = useNavigate()

  const navigateToHome = () => {
    // 👇️ navigate to /summary
    navigate('/')
  }

  // const imageUrl =
  //   'https://www.ikea.com/sg/en/images/products/bergmund-chair-black-orrsta-light-grey__0859542_pe780965_s5.jpg?f=s'

  const guidingQn = `1. What is a neutron star?\n2. What is the total mass of a supergiant star that can form a neutron star?\n3. How big is a neutron star?\n4. What is the mass of a neutron star?\n5. How are neutron stars formed?\n6. What is the difference between neutron stars and white holes, quark stars, and strange stars?\n7. How does the gravitational collapse of a massive star lead to the formation of neutron stars?`
  const guidingText = guidingQn.split('\n')

  const summarizedText =
    'Shannon Matilda Wells Lucid (born January 14, 1943) is an American biochemist and retired NASA astronaut.' +
    'She has flown in space five times, including a prolonged mission aboard the Russian space station Mir in 1996, and is the only American woman to have stayed on Mir. From 1996 to 2007, Lucid held the record for the longest duration spent in space by an American and by a woman. She was awarded the Congressional Space Medal of Honor in December 1996, making her the tenth person and the first woman to be accorded the honor.' +
    "Lucid is a graduate of the University of Oklahoma, where she earned a bachelor's degree in chemistry in 1963, a master's degree in biochemistry in 1970, and a PhD in biochemistry in 1973. She was a laboratory technician at the Oklahoma Medical Research Foundation from 1964 to 1966, a research chemist at Kerr-McGee from 1966 to 1968, and a research associate at the Oklahoma Medical Research Foundation from 1973 to 1978." +
    'In 1978, Lucid was recruited by NASA for astronaut training with NASA Astronaut Group 8, the first class of astronauts to include women. She flew in space five times: on STS-51-G, STS-34, STS-43, STS-58, and her mission to Mir, for which Lucid traveled to the space station on Space Shuttle Atlantis with STS-76 and returned six months later with STS-79. She was the NASA Chief Scientist from 2002 to 2003 and a capsule communicator (CAPCOM) at Mission Control for numerous Space Shuttle missions, including STS-135, the final mission of the Space Shuttle program. Lucid announced her retirement from NASA in 2012.'

  const context = useContext(TextContext)
  const text = context.text
  const setText = context.setText

  const [guidingQuestions, setGuidingQuestions] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [summary, setSummary] = useState('')

  useEffect(() => {
    async function fetchApi(text) {
      const res = await fetch('http://localhost:3000/', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: text }),
      })

      console.log(res)
      // setImageUrl(res.data.imageUrl)
      // setGuidingQuestions(res.data.guidingQuestions)
      // setSummary(res.data.summary)
    }
    fetchApi()
  }, [])

  return (
    <Box
      sx={{
        textAlign: 'left',
      }}
    >
      <Typography
        gutterBottom
        variant="h2"
        component="div"
        textAlign="center"
        sx={{ margin: '1rem 0' }}
      >
        Summary
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Box>
          <Typography sx={{ margin: '1rem 0' }} variant="h5">
            Guiding Questions
          </Typography>
          {guidingText.map((str, idx) => (
            <Typography variant="body1" key={idx} lineHeight={1.7}>
              {str}
            </Typography>
          ))}
        </Box>

        {imageUrl && <img src={imageUrl} alt="Text image"></img>}
      </Box>
      <Box
        sx={{
          maxWidth: '140ch',
        }}
      >
        <Typography variant="body1" color="text.primary" lineHeight={1.8}>
          {summarizedText}
        </Typography>
      </Box>

      <Box
        textAlign="center"
        sx={{
          justifyContent: 'center',
        }}
      >
        <Button
          variant="contained"
          onClick={() => {
            setText('')
            navigateToHome()
          }}
          sx={{
            margin: 2,
          }}
        >
          Go back!
        </Button>
      </Box>
    </Box>
  )
}

export default Summary
