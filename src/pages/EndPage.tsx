import { Box, Typography } from '@mui/material'
import React from 'react'
import { motion } from 'framer-motion'

const EndPage = () => {
    const variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#ffecf2', padding: '16px', borderRadius: '8px', width: '350px', margin: '0 auto' }}>
        <motion.img initial="hidden" animate="visible" variants={variants} transition={{ duration: 0.4 }} src="../src/assets/bubufinal.png" alt="bubu kitten" className="mb-4" />
        <Typography variant="h1" fontSize={28}  paddingY={3} fontWeight={600}>YAYY Happi Bubu Timeee</Typography>
    </Box>
  )
}

export default EndPage