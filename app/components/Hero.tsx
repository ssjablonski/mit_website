'use client'
import { ReactTyped } from "react-typed"
import CarouselMain, {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const Hero = () => {
return (
    <div className="pt-14 flex gap-4 flex-col items-center justify-center w-3/5 m-auto">
        <div className="text-4xl font-bold">
            <ReactTyped
                className="text-gradient"
                strings={[
                    "Z nami językowe wygibasy nie są straszne!",
                    "Otwórz usta na świat!",
                    "Kształtujemy mowę, budujemy pewność siebie!",
                    "Wady wymowy? Nie u nas!"
                ]}
                loop
                startDelay={500}
                typeSpeed={45}
            />
        </div>
        <div className="text-xl pt-2 font-small text-center mx-14">
            Już teraz zapoznaj się z naszą szeroką ofertą i rozpocznij z nami współprace. Oferujemy zarówno indywidualne podejście jak i zajęcia w grupie. Nasza akademia pomoże ci lub twojemu dziecku w osiągnięciu celu!
        </div>
        <CarouselMain />
    </div>
);
}

export default Hero