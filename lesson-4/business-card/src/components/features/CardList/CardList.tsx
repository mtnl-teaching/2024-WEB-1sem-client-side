import CardItem from "../../atoms/CardItem";
import useGetCards from "./use-get-cards";

export default function CardList() {
  const [cards, setCards] = useGetCards();

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
