import AxieCard from "./axie-card";

export default function CardList({ filteredCards }) {
  return (
    <div className="grid grid-cols-autofit py-4 gap-2 items-stretch">
      {filteredCards.map((card) => (
        <AxieCard key={card._id} {...card} />
      ))}
    </div>
  );
}
