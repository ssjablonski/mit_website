import React from 'react'
import { QuestionTextProps } from './QuestionText'

const QuestionAnswer = ({children}: QuestionTextProps) => {
  return (
    <div className='pt-20 p-8 flex text-3xl font-normal'>{children}</div>
  )
}

export default QuestionAnswer