"use client";
import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import QuestionText from './QuestionText';
import QuestionAnswer from './QuestionAnswer';

type QuestionTileProps = {
    children: {
        id: string;
        question: string;
        answer: string;
        className: string;
    }
}


const QuestionTile = ({ children }: QuestionTileProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const cardRef = useRef(null)


  return (
      <li className={`card p-4 max-w-[40%]`} onClick={() => setIsOpen(!isOpen)}>
          <div className={`card-content-container ${isOpen && "open p-10 top-0 left-0 right-0 z-[1]"}`}>
           <motion.div
            ref={cardRef}
            className={isOpen ?  "card-content pt-4 mx-auto w-full h-full rounded-2xl overflow-hidden bg-gradient-45deg from-main-400 from-20% to-secondary-400"
              : "card-content flex flex-col justify-center items-center mx-auto w-full h-full rounded-2xl overflow-hidden shadow-2xl bg-gradient-45deg from-main-400 from-20% to-secondary-400 hover:from-main-500 hover:to-secondary-500"
            }
            layout={true}
          >
            <QuestionText>{children.question}</QuestionText>
            {isOpen && (
              <QuestionAnswer>{children.answer}</QuestionAnswer>
            )}
          </motion.div>
        </div>
      </li>
    ); 
};

export default QuestionTile;
