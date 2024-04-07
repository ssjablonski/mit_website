import React from 'react'

type CardProps = {
    children: React.ReactNode[],
    activeCard: string,
}

const StickyScrollCard = ({ children, activeCard }: CardProps) => {
  return (
    <div className={`absolute inset-0 h-full w-full rounded-2xl bg-main-400 object-cover ${activeCard === children[1] ? "visible" : "invisible"}`}>
      {children[0]}
    </div>
  )
}

export default StickyScrollCard