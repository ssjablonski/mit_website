"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import czytanie from "@/public/ZAJCIACZYTANIE.jpg";
import ogolno from "@/public/ZAJCIAOGLNOROZWOJOWE.jpg";
import rytmika from "@/public/ZAJCIARYTMIKA.jpg";
import socjo from "@/public/ZAJCIASOCJOTERAPIA.jpg"
import StickyScrollTitle from "./StickyScrollTitle";
import StickyScrollCard from "./StickyScrollCard";
 
const content = [
  {
    id: 0,
    title: "Nauka czytania",
    description:
        "Zajęcia czytania mają na celu rozwijanie umiejętności czytania oraz zrozumienia tekstu u dzieci. Poprzez zabawę z literami i słowami, uczniowie uczą się koncentracji na tekście, rozpoznawania liter, a także rozbudowywania słownictwa. Zajęcia mogą obejmować głośne czytanie przez nauczyciela, czytanie indywidualne i grupowe, a także ćwiczenia na zrozumienie przeczytanego tekstu.",
    content: (
        <Image
          src={czytanie}
          width={300}
          height={300}
          alt="linear board demo"
          className="w-full h-full object rounded-2xl"
        />
    )
  },
  {
    id: 2,
    title: "Zajęcia rozwojowe",
    description: "Zajęcia rozwojowe mają na celu wszechstronny rozwój dziecka. Obejmują one różnorodne aktywności stymulujące rozwój intelektualny, emocjonalny, społeczny i fizyczny. Dzieci mają możliwość rozwijania swoich pasji i zainteresowań, uczestnicząc w różnych grach i zabawach, które rozwijają kreatywność, umiejętność pracy w grupie oraz samodzielność.",
    content: (
        <Image
          src={ogolno}
          width={300}
          height={300}
          alt="linear board demo"
          className="w-full h-full object-cover rounded-2xl"
        />
    )
  },
  {
    id: 3,
    title: "Socjoterapia",
    description: "Socjoterapia wprowadza dzieci w świat społeczny, ucząc ich zrozumienia różnych aspektów funkcjonowania w społeczeństwie. Dzieci uczą się o różnorodności kulturowej, znaczeniu współpracy i tolerancji, a także podstawowych pojęć związanych z funkcjonowaniem grup społecznych. Zajęcia mogą zawierać elementy pracy grupowej, dyskusji oraz gier rozwijających umiejętności społeczne.",
    content: (
        <Image
          src={socjo}
          width={300}
          height={300}
          alt="linear board demo"
          className="w-full h-full object-cover rounded-2xl"

        />
    )
  },
   {
    id: 4,
    title: "Rytmika",
    description: "Zajęcia rytmiczne mają na celu rozwijanie poczucia rytmu i koordynacji ruchowej u dzieci poprzez muzykę i taniec. Dzieci uczą się podstawowych kroków tanecznych, rytmów muzycznych oraz uczestniczą w zabawach ruchowych z elementami muzyki. Zajęcia sprzyjają także rozwijaniu zdolności słuchowych i ekspresji ciała.",
    content: (
        <Image
          src={rytmika}
          width={400}
          height={400}
          alt="linear board demo"
          className="w-full h-full object-cover rounded-2xl"
        />
    )
  }
];


export function StickyScroll() {
    const [activeCard, setActiveCard] = useState(content[0].title);

    return (
        <div className="mx-auto max-w-6xl px-6 ">
            <div className="flex w-full gap-10">
                <div className="w-full py-[50vh]">
                    <ul>
                        {content.map((item) => (
                            <li key={item.id}>
                                <StickyScrollTitle activeCard={activeCard} setActiveCard={setActiveCard} >
                                    {item.title}
                                    {item.description}
                                </StickyScrollTitle>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="w-full flex sticky top-0 h-screen justify-center items-center">
                    <div className="relative w-3/4 aspect-square rounded-2xl">
                        {content.map((item) => (
                            <StickyScrollCard key={item.id} activeCard={activeCard}>
                                {[item.content, item.title]}
                            </StickyScrollCard>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}