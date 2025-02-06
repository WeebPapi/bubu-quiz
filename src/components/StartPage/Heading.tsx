import { Box, Typography } from "@mui/material"
import React from "react"
import bubuImage from "../../assets/bubu.png"

interface HeadingProps {
  text: string
  className?: string
}

const Heading: React.FC<HeadingProps> = ({ text, className }) => {
  return (
    <Box className={className}>
      <img
        src={bubuImage}
        alt="bubu kitten"
        className=""
      />
      <Typography variant="h1" fontSize={44} color="pink">
        Hi BUBUBUBUBUU
      </Typography>
      <Typography variant="body1">{text}</Typography>
    </Box>
  )
}

export default Heading
