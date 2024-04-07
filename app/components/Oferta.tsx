import React, { forwardRef } from 'react'

const Oferta = forwardRef<HTMLElement>((props, ref) => {
    return (
        <section ref={ref} className='mt-10 p-4 rounded-xl flex gap-4 flex-col w-3/4 2xl:w-2/3 3xl:1/5 3xl:pt-40 m-auto bg-main-100'>
                <h2 className='text-4xl pt-4 font-bold text-center'>Poznaj naszą ofertę!</h2>
                <p>Lorem.</p>
                <p>Nisi.</p>
                <p>Aliquam?</p>
                <p>Tempore!</p>
                <p>Ut!</p>
                <p>Beatae?</p>
                <p>Voluptate?</p>
                <p>Temporibus.</p>
                <p>Ut.</p>
                <p>Quae!</p>
                <p>Blanditiis?</p>
                <p>Eveniet.</p>
                <p>Eligendi.</p>
                <p>Minima?</p>
                <p>Distinctio.</p>
                <p>Ex?</p>
                <p>Ipsam?</p>
                <p>Minus!</p>
                <p>Dicta.</p>
                <p>Et.</p>
        </section>
    )
})

Oferta.displayName = 'Oferta'

export default Oferta
