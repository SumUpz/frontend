import SendIcon from '@mui/icons-material/Send'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import MenuBookIcon from '@mui/icons-material/MenuBook'
import Typography from '@mui/material/Typography'

function Home() {
  const navigate = useNavigate()

  const navigateToSummary = () => {
    navigate('/summary')
  }

  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
        }}
      >
        <MenuBookIcon style={{ fontSize: 150 }} />
        <Typography variant="h1" component="div">
          Sum Upz
        </Typography>
      </Box>

      <Typography variant="p" component="div">
        Summarize what you need
      </Typography>
      <Box
        sx={{
          width: 500,
          maxWidth: '100%',
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
  )
}

export default Home
