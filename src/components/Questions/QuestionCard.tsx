import { Box, Typography } from '@mui/material'
import React from 'react'
import { motion } from 'framer-motion'
import AnswerButton from './AnswerButton'
import { IAnswer } from '../../interfaces/answer.interface'

interface QuestionCardProps {
  image: string
  question: string
  answers: IAnswer[]
}

const QuestionCard: React.FC<QuestionCardProps> = ({ image, question, answers }) => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#ffecf2', padding: '16px', borderRadius: '8px', width: '350px', margin: '0 auto' }}>
      <motion.img initial="hidden" animate="visible" variants={variants} src={image} className="mb-4" />
      <motion.span initial="hidden" animate="visible" variants={variants}><Typography variant="h2" fontSize={24}>{question}</Typography></motion.span>
      <motion.ul initial="hidden" animate="visible" variants={variants} transition={{ duration: 0.5, staggerChildren: 0.3 }} className='flex flex-wrap justify-between max-w-[350px] w-full mt-4'>
        {answers.map((answer, index) => (
          <motion.li key={index} variants={variants}><AnswerButton value={answer.value} isCorrect={answer.isCorrect} nextQuestion={answer.nextQuestion}/></motion.li>
        ))}
      </motion.ul>
    </Box>
    
  )
}

export default QuestionCard