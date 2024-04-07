"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import czytanie from "@/public/ZAJCIACZYTANIE.jpg";
import br from "@/public/ZAJCIANABR.jpg";
import ogolno from "@/public/ZAJCIAOGLNOROZWOJOWE.jpg";
import rytmika from "@/public/ZAJCIARYTMIKA.jpg";
import socjo from "@/public/ZAJCIASOCJOTERAPIA.jpg"
import StickyScrollTitle from "./StickyScrollTitle";
import StickyScrollCard from "./StickyScrollCard";
import { features } from "process";
 
const content = [
  {
    id: 0,
    title: "Czytanie",
    description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit porro, illo, totam similique et corporis in modi ducimus accusamus quaerat aperiam excepturi dicta unde architecto!",
    content: (
        <Image
          src={czytanie}
          width={300}
          height={300}
          alt="linear board demo"
          className="w-full h-full object rounded-2xl-cover"
        />
    )
  },
  {
    id: 1,
    title: "BR",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit porro, illo, totam similique et corporis in modi ducimus accusamus quaerat aperiam excepturi dicta unde architecto!",
    content: (
        <Image
          src={br}
          width={300}
          height={300}
          alt="linear board demo"
          className="w-full h-full object-cover rounded-2xl"
        />
    )
  },
  {
    id: 2,
    title: "Rozwojowe",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit porro, illo, totam similique et corporis in modi ducimus accusamus quaerat aperiam excepturi dicta unde architecto!",
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
    title: "Socjo",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit porro, illo, totam similique et corporis in modi ducimus accusamus quaerat aperiam excepturi dicta unde architecto!",
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
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit porro, illo, totam similique et corporis in modi ducimus accusamus quaerat aperiam excepturi dicta unde architecto!",
    content: (
        <Image
          src={rytmika}
          width={300}
          height={300}
          alt="linear board demo"
          className="w-full h-full object-cover rounded-2xl"
        />
    )
  }
];


export function StickyScroll() {
    const [activeCard, setActiveCard] = useState(content[0].title);

    return (
        <div className="mx-auto max-w-6xl px-4">
            <div className="flex w-full gap-20 items-start">
                <div className="w-full py-[50vh]">
                    <ul>
                        {content.map((item) => (
                            <li key={item.id}>
                                <StickyScrollTitle activeCard={activeCard} setActiveCard={setActiveCard} >
                                    {item.title}
                                </StickyScrollTitle>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="w-full flex sticky top-0 h-screen items-center">
                    <div className="relative w-3/4 aspect-square rounded-2xl bg-gray-600">
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