import React, { forwardRef } from 'react'
import { StickyScroll } from './StickyScroll'

const Oferta = forwardRef<HTMLElement>((props, ref) => {
    return (
        <section ref={ref} className='mt-10 p-4 rounded-xl flex gap-4 flex-col w-3/4 2xl:w-2/3 3xl:1/5 3xl:pt-40 m-auto bg-back-light-400'>
                <h2 className='text-5xl pt-4 font-bold text-center'>Poznaj naszą ofertę!</h2>
                <StickyScroll />
        </section>
    )
})

Oferta.displayName = 'Oferta'

export default Oferta
