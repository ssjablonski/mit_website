import React from 'react'
import { motion } from 'framer-motion'

export type QuestionTextProps = {
  children: string;
}

const QuestionText = ({children}: QuestionTextProps) => {
  return (
    <motion.div className='text-5xl font-medium p-4 pt-10' style={{ textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {children}
    </motion.div>
  )
}

export default QuestionText