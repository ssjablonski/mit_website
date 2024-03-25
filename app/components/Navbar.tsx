import Image from "next/image"
import Logo from '../../public/logo_full.png'


const Navbar = () => {
  return (
    <nav className="flex w-full items-center justify-between px-28 bg-back-light-100">
        <div>
            <Image src={Logo} alt="Logo" className="w-48 py-2"></Image>
        </div>
        <div className="flex item-center gap-2 font-semibold">
            <button className="border-2 p-4 rounded-xl text-back-100 bg-main-600 text-white">Oferta</button>
            <button className="border-2 p-4 rounded-xl text-back-100 bg-main-600 text-white">Kadra</button>
            <button className="border-2 p-4 rounded-xl text-back-100 bg-main-600 text-white">Kontakt</button>
        </div>
    </nav>
  )
}

export default Navbar