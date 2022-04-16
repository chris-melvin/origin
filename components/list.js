import { useState } from "react";
import { useDrop } from "react-dnd";
import TierCard from "./tiercard";
import { handleCard } from "./utils";
import { AiOutlineMinusSquare, AiOutlinePlusSquare } from "react-icons/ai";

export default function List({ tier, list, setList }) {
  const [fold, setFold] = useState(true);
  const [{ isOver, result }, dropRef] = useDrop({
    accept: "card",
    drop: (item, monitor) => {
      handleCard(item, tier, list, setList);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  const tierName = {
    Stier: {
      name: "S Tier",
      color: "#d62828",
    },
    Atier: {
      name: "A Tier",
      color: "#f77f00",
    },
    Btier: {
      name: "B Tier",
      color: "#fcbf49",
    },
    Ctier: {
      name: "C Tier",
      color: "#b5e48c",
    },
    Dtier: {
      name: "D Tier",
      color: "#ade8f4",
    },
    Etier: {
      name: "E Tier",
      color: "#cdb4db",
    },
    Ftier: {
      name: "F Tier",
      color: "#ffc8dd",
    },
  };
  return (
    <div className="m-2">
      <span className="flex">
        <h2
          className="font-mono text-xl font-bold inline "
          style={{ color: tierName[tier].color }}
        >
          {tierName[tier].name}
        </h2>
        <button className="text-xl m-1" onClick={() => setFold(!fold)}>
          {fold ? <AiOutlinePlusSquare /> : <AiOutlineMinusSquare />}
        </button>
      </span>

      <div
        style={{ backgroundColor: tierName[tier].color }}
        className={` flex flex-wrap mb-2 transition  ${fold ? "hidden" : ""} `}
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
