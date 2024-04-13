import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Oferta from "./components/Oferta"
import Questions from "./components/QuestionsComponent/Questions"
import ScrollBack from "./components/ScrollBack"
import { StickyScroll } from "./components/StickyScroll"

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Oferta />
      <ScrollBack />
      <Questions />
    </>
  )
}

export default Home