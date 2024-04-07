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
            setActiveCard(children);
        }
    }, [isInView, children, setActiveCard]);


    return (
        <p ref={ref} className={`py-16 text-5xl font-semibold ${isInView ? "text-black": "text-back-light-500"}`}>{children}</p>
    )
}

export default StickyScrollTitle