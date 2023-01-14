import MenuBookIcon from '@mui/icons-material/MenuBook'
import SendIcon from '@mui/icons-material/Send'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { TextContext } from '../context/context'

function Home() {
  const navigate = useNavigate()

  const navigateToSummary = () => {
    navigate('/summary')
  }

  const context = useContext(TextContext)
  const text = context.text
  const setText = context.setText

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
        <TextField
          multiline
          fullWidth
          id="fullWidth"
          onChange={(e) => setText(e.target.value)}
        >
          {text}
        </TextField>
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
