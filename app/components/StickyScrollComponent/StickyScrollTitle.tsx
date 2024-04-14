import { useInView } from 'framer-motion';
import React, { Dispatch, SetStateAction, useEffect, useRef } from 'react'

type Props = {
    children: React.ReactNode,
    activeCard: string,
    setActiveCard: Dispatch<SetStateAction<string>>
}

const StickyScrollTitle = ({ children, activeCard, setActiveCard }: Props) => {
    const ref = useRef<HTMLParagraphElement>(null);
    const isInView = useInView(ref, {margin: "-50% 0px -50% 0px"});

    useEffect(() => {
        if (isInView) {
            setActiveCard(children[0]);
        }
    }, [isInView, children, setActiveCard]);


    return (
        <div ref={ref} className='flex flex-col'>
            <p className={`py-12 text-5xl font-semibold ${isInView ? "text-gradient-2": "text-back-light-500"}`}>
                {children[0]}
            </p>
            <p className={`text-2xl font-medium ${isInView ? "text-black" : "text-back-light-500"}`}>{children[1]}</p>
            
        </div>
        
    )
}

export default StickyScrollTitle