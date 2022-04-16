import { useState } from "react";
import { useDrop } from "react-dnd";
import TierCard from "./tiercard";
import { handleCard } from "./utils";

export default function List({ tier, list, setList }) {
  const [fold, setFold] = useState(false);
  const [{ isOver, result }, dropRef] = useDrop({
    accept: "card",
    drop: (item, monitor) => {
      handleCard(item, tier, list, setList);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <div>
      <h1>{tier}</h1>
      <button onClick={() => setFold(!fold)}>Toggle Hide</button>
      <div
        className={`bg-slate-50 flex flex-wrap mb-2 ${fold ? "hidden" : ""} `}
        ref={dropRef}
      >
        <div className="h-40"></div>
        {list
          .filter((e) => e.tier === tier)
          .map((card) => (
            <TierCard key={card._id} {...card} isOver={isOver} />
          ))}
      </div>
    </div>
  );
}
