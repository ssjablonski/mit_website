'use client'
import { ReactTyped } from "react-typed"
import logo_litera from "@/public/logo_litera.png"
import chmura from "@/public/chmura.png"
import CarouselMain from "@/components/ui/carousel"
import Image from "next/image"

const Hero = () => {
return (
    <div className="pt-24 flex gap-4 flex-col w-3/4 2xl:w-2/3 3xl:1/5 3xl:pt-40 m-auto">
        <div className="flex">
            <Image src={logo_litera} alt="Logo Litera" width={185} height={185} className="logo-letter animate-wiggle"/> 
            <div className="flex flex-col gap-24 items-center justify-center">
                <Image src={chmura} alt="Chmura" className="chmura w-4/5 2xl:w-2/3 3xl:w-3/4 3xl:h-72 3xl:mt-12" />
                    <ReactTyped
                        className="text-gradient text-3xl 3xl:text-5xl 3xl:pb-12 font-bold"
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
                <div className=" text-xl pt-2 pb-4 font-medium text-center xl:w-4/5 3xl:w-3/4 3xl:text-2xl ">
                    Już teraz zapoznaj się z naszą szeroką ofertą i rozpocznij z nami współprace. Oferujemy zarówno indywidualne podejście jak i zajęcia w grupie. Nasza akademia pomoże ci lub twojemu dziecku w osiągnięciu celu!
                </div>
            </div>
                
        </div>
        <CarouselMain />
    </div>
);
}

export default Hero