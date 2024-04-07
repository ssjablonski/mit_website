'use client'
import Image from 'next/image'
import React from 'react'
import arrow_icon from '@/public/arrow.png'

const ScrollBack = () => {
    return (
        <button onClick={() => window.scroll({
            top: 0,
            behavior: 'smooth'
        })} className='flex fixed bottom-4 right-4 z-50 bg-secondary-500 rounded-full'>
            <Image src={arrow_icon} alt='Scroll back to top' width={55} height={55} className='text-red-500' />
        </button>
    )
}

export default ScrollBack