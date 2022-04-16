import { useMemo, useState } from "react";
import CardList from "./cardlist";
import filterFunction from "./filter";
import FilterUI from "./filterui";

export default function Search({ allCards }) {
  const [search, setSearch] = useState("");
  const [part, setPart] = useState("");
  const [axieClass, setAxieClass] = useState("");
  const filteredCards = allCards.filter((card) =>
    card.title.toLowerCase().includes(search.toLowerCase())
  );

  const memoizedFilterFunction = useMemo(
    () => filterFunction(filteredCards, part, axieClass),
    [filteredCards, part, axieClass]
  );

  return (
    <section>
      <FilterUI
        search={search}
        part={part}
        axieClass={axieClass}
        setSearch={setSearch}
        setPart={setPart}
        setAxieClass={setAxieClass}
      />
      <CardList filteredCards={memoizedFilterFunction} />
    </section>
  );
}
