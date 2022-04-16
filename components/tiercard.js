import { useState } from "react";
import CardImage from "./card-image";
import { useDrag } from "react-dnd";
import { ItemTypes } from "../lib/constants";

export default function TierCard({
  title,
  mainImage,
  axieClass,
  part,
  _id,
  tier,
}) {
  const [{ isDragging, result }, dragRef] = useDrag({
    type: ItemTypes.CARD,
    item: {
      _id,
      title,
      mainImage,
      tier,
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div
      className="hover:cursor-grab"
      ref={dragRef}
      style={{
        opacity: isDragging ? 0 : 1,
      }}
    >
      <CardImage
        title={title}
        imageObject={mainImage}
        width={100}
        height={200}
        scale="hover:scale-150"
      />
    </div>
  );
}
