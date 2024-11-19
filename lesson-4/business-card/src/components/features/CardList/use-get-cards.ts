import { useEffect, useState } from "react";
import { CardType } from "../../../types/CardType";

type useGetCardsType = [
  CardType[],
  React.Dispatch<React.SetStateAction<CardType[]>>
];

export default function useGetCards(): useGetCardsType {
  const [cards, setCards] = useState<CardType[]>([]);

  useEffect(() => {
    const getCards = async () => {
      const response = await fetch("http://localhost:3000/cards");
      const body = await response.json();
      console.log(body);
      setCards(body);
    };

    getCards();
  }, []);

  return [cards, setCards] as const;
}
