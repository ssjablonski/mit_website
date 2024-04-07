'use client'
import Image from "next/image"
import Logo from '../../public/logo_full.png'
import { useRef } from "react"

import Oferta from "./Oferta"

const Navbar = () => {

  const sekcjaRef = useRef(null);


  return (
    <nav className="flex w-full items-center justify-between px-28 bg-back-light-100">
        <div>
            <Image src={Logo} alt="Logo" className="w-48 py-2"></Image>
        </div>
        <div className="flex item-center gap-2 font-semibold">
            <button className="border-4 border-secondary-500 px-6 py-4  rounded-2xl text-back-100 bg-main-600 text-white">
               {/* onClick={() => sekcjaRef.current?.scrollIntoView({ behavior: 'smooth' })} */}
              Oferta
            </button>
            <button className="bg-main-500 hover:bg-main-400 text-secondary-500 font-semibold py-2 px-4 border border-secondary-500 hover:border-secondary-400 rounded-2xl">Oferta</button>
            <button className="bg-main-700 hover:bg-main-600 text-secondary-500 font-semibold py-2 px-4 border border-main-500 hover:border-main-400 rounded-xl">Kadra</button>
            <button className="bg-secondary-400 hover:bg-secondary-300 text-main-900 font-semibold py-2 px-4 border border-secondary-500 hover:border-secondary-400 rounded-3xl">Kontakt</button>
        </div>
    </nav>
  )
}

export default Navbar