import { imageBuilder } from "../lib/sanity";

export default function CardImage({
  title,
  imageObject,
  slug,
  width,
  height,
  scale,
}) {
  const image = (
    <img
      className={` ${scale} transition duration-150 ease-in-out`}
      width={width}
      height={height}
      alt={`Axie Card ${title}`}
      src={imageBuilder(imageObject).width(200).height(300).url()}
    />
  );

  return <div className="-mx-5 sm:mx-0">{image}</div>;
}
