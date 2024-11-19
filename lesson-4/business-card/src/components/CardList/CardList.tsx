import { useEffect, useState } from "react";
import CardItem from "../atoms/CardItem";

type CardType = {
  id: number;
  name: string;
  job: string;
  website: string;
};

export default function CardList() {
  const [cards, setCards] = useState<CardType[]>([]);

  useEffect(() => {
    console.log("Cards state have changed");
  }, [cards]);

  // Data fetching
  useEffect(() => {
    const getCards = async () => {
      const response = await fetch("http://localhost:3000/cards");
      const body = await response.json();
      console.log(body);
      setCards(body);
    };

    getCards();
  }, []);

  return (
    <div>
      <h1>Card List</h1>
      {cards.length == 0 && <p> There's currently no Cards available </p>}
      {cards.map((card) => {
        return <CardItem key={card.id} name={card.name} />;
      })}
    </div>
  );
}
