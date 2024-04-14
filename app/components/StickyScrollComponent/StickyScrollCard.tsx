import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type CardProps = {
    children: React.ReactNode[],
    activeCard: string,
}

const StickyScrollCard = ({ children, activeCard }: CardProps) => {
  return (
    <AnimatePresence>
      {activeCard === children[1] ? 
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}className={`absolute inset-0 h-full w-full rounded-3xl object-cover ${activeCard === children[1] ? "visible" : "invisible"}`}>
        {children[0]}
      </motion.div>
      : null}
    </AnimatePresence>
    
  )
}

export default StickyScrollCard