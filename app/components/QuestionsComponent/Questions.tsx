'use client'
import React, { useRef } from 'react'
import QuestionTile from './QuestionTile';

export interface CardData {
  id: string;
  question: string;
  answer: string;
  className: string;
}

const cardData: CardData[] = [
  {
    id: "1",
    question: "Jak wygląda pierwsza wizyta w przychodni?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt hic excepturi eveniet atque esse in ut provident et maxime ipsam consequuntur quisquam quam omnis, asperiores facilis, aperiam dolorum cupiditate vel optio? Non natus corrupti sapiente nemo consequuntur porro quas.",
    className: 'col-start-1 col-end-3 row-start-1 row-end-3'
  },
  {
    id: "2",
    question: "Jaki jest koszt terapii logopedycznej?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt hic excepturi eveniet atque esse in ut provident et maxime ipsam consequuntur quisquam quam omnis, asperiores facilis, aperiam dolorum cupiditate vel optio? Non natus corrupti sapiente nemo consequuntur porro quas.",
    className: 'col-start-3 col-end-6 row-start-1 row-end-3'
  },
  {
    id: "3",
    question: "Jakieś inne troche dłuższe pytanie",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt hic excepturi eveniet atque esse in ut provident et maxime ipsam consequuntur quisquam quam omnis, asperiores facilis, aperiam dolorum cupiditate vel optio? Non natus corrupti sapiente nemo consequuntur porro quas.",
    className: 'col-start-1 col-end-4 row-start-3 row-end-5'
  },
  {
    id: "4",
    question: "Jakieś inne troche dłuższe pytanie",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt hic excepturi eveniet atque esse in ut provident et maxime ipsam consequuntur quisquam quam omnis, asperiores facilis, aperiam dolorum cupiditate vel optio? Non natus corrupti sapiente nemo consequuntur porro quas.",
    className: 'col-start-4 col-end-6 row-start-3 row-end-5'
  },
  {
    id: "5",
    question: "Jakieś inne troche dłuższe pytanie",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt hic excepturi eveniet atque esse in ut provident et maxime ipsam consequuntur quisquam quam omnis, asperiores facilis, aperiam dolorum cupiditate vel optio? Non natus corrupti sapiente nemo consequuntur porro quas.",
    className: 'col-start-3 col-end-6 row-start-5 row-end-7'
  },
  {
    id: "6",
    question: "Jakieś inne troche dłuższe pytanie",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt hic excepturi eveniet atque esse in ut provident et maxime ipsam consequuntur quisquam quam omnis, asperiores facilis, aperiam dolorum cupiditate vel optio? Non natus corrupti sapiente nemo consequuntur porro quas.",
    className: 'col-start-1 col-end-3 row-start-5 row-end-7'
  }
];

const Questions = () => {
  return (
    <div className='pt-16 bg-back-light-300 w-3/4 2xl:w-2/3 3xl:1/5 3xl:pt-40 m-auto'>
      <h1 className='text-center text-5xl font-bold p-4 '>Najczęściej zadawane pytania</h1>
      <ul className='flex flex-wrap justify-center items-center h-screen mx-auto'>
        {cardData.map((card) => (
          <QuestionTile key={card.id} className={card.className}>
            {card}
          </QuestionTile>
        ))}
      </ul>
    </div>
    
  );
}


export default Questions
