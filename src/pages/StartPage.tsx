import { Box } from "@mui/material"
import React from "react"
import Heading from "../components/StartPage/Heading"
import StartQuizBtn from "../components/StartPage/StartQuizBtn"

const StartPage: React.FC = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#ffecf2', padding: '16px', borderRadius: '8px', width: '350px', margin: '0 auto' }}>
      <Heading text="Time for the bubu quiz" />
      <StartQuizBtn />
    </Box>
  )
}

export default StartPage
