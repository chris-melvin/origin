import { useMemo, useState } from "react";
import CardList from "./cardlist";

export default function Search({ allCards }) {
  const [search, setSearch] = useState("");
  const [part, setPart] = useState("");
  const [axieClass, setAxieClass] = useState("");
  const filteredCards = allCards.filter((card) =>
    card.title.toLowerCase().includes(search.toLowerCase())
  );

  function filterFunction(filteredCards, part, axieClass) {
    if (part !== "" && axieClass !== "") {
      return filteredCards.filter(
        (card) =>
          card.part.title.toLowerCase().includes(part.toLowerCase()) &&
          card.axieClass.title.toLowerCase().includes(axieClass.toLowerCase())
      );
    } else if (part !== "") {
      return filteredCards.filter((card) =>
        card.part.title.toLowerCase().includes(part.toLowerCase())
      );
    } else if (axieClass !== "") {
      return filteredCards.filter((card) =>
        card.axieClass.title.toLowerCase().includes(axieClass.toLowerCase())
      );
    } else {
      return filteredCards;
    }
  }

  const memoizedFilterFunction = useMemo(
    () => filterFunction(filteredCards, part, axieClass),
    [filteredCards, part, axieClass]
  );

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <section>
      <div>
        <h2>Card</h2>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col">
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            type="text"
            placeholder="Search for an Axie"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <select
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            value={part}
            onChange={(e) => setPart(e.target.value)}
          >
            <option value="">Part</option>
            <option value="ears">Ears</option>
            <option value="eyes">Eyes</option>
            <option value="tail">Tail</option>
            <option value="horn">Horn</option>
            <option value="mouth">Mouth</option>
            <option value="back">Back</option>
          </select>
          <select
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            value={axieClass}
            onChange={(e) => setAxieClass(e.target.value)}
          >
            <option value="">Class</option>
            <option value="aqua">Aqua</option>
            <option value="beast">Beast</option>
            <option value="bird">Bird</option>
            <option value="bug">Bug</option>
            <option value="plant">Plant</option>
            <option value="reptile">Reptile</option>
          </select>
        </div>
      </div>
      <h1>{part}</h1>
      <CardList filteredCards={memoizedFilterFunction} />
    </section>
  );
}
