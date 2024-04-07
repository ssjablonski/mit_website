import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Oferta from "./components/Oferta"
import ScrollBack from "./components/ScrollBack"
import { StickyScroll } from "./components/StickyScroll"

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <Oferta /> */}
      <ScrollBack />
      <StickyScroll />
    </>
  )
}

export default Home