import Image from "next/image"
import Logo from '../../public/logo_full.png'


const Navbar = () => {
  return (
    <nav className="flex w-full items-center justify-between px-28 bg-white">
        <div>
            <Image src={Logo} alt="Logo" className="w-44 py-2"></Image>
        </div>
        <div className="flex item-center gap-2 font-semibold">
            <button className="border-2 p-4 rounded-2xl text-back-100 bg-gradient-to-tr from-main-600 from-25% to-secondary-400">Oferta</button>
            <button className="border-2 p-4 rounded-2xl text-back-100 bg-gradient-to-tr from-main-600 from-25% to-secondary-400">Kadra</button>
            <button className="border-2 p-4 rounded-2xl text-back-100 bg-gradient-to-tr from-main-600 from-25% to-secondary-400">Kontakt</button>
        </div>
    </nav>
  )
}

export default Navbar