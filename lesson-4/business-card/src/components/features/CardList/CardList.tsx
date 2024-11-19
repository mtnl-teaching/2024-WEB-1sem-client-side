import useFetch from "../../../hooks/use-fetch";
import { useCardsStore } from "../../../store/use-cards-store";
import { CardType } from "../../../types/CardType";
import CardItem from "../../atoms/CardItem";

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

  // Get the setCards function from the store
  const setCards = useCardsStore((state) => state.setCards);

  // Update the store with the Cards information.
  setCards(cards);

  const cards = useCardsStore((state) => state.cards);

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
