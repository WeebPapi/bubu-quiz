import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const StartQuizBtn:React.FC = () => {
    const navigate = useNavigate()
  return (
    <Button variant="contained" sx={{ mt: 2, backgroundColor: 'pink', color: 'black', ':hover': { backgroundColor: 'pink', color: 'black' }  } } onClick={() => navigate('/1')}>Start Quiz</Button>
  )
}

export default StartQuizBtn