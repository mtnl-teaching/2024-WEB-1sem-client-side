import useFetch from "../../../hooks/use-fetch";
import CardItem from "../../atoms/CardItem";

type CardType = {
  id: number;
  name: string;
};

export default function CardList() {
  // First iteration:
  // const [cards, setCards] = useGetCards();

  // Second iteration:
  // const [cards, setCards] = useGetFetch("/cards");

  // Third iteration
  const {
    data: cards,
    loading,
    error,
  } = useFetch<CardType[]>([], "/cards", "GET");

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
