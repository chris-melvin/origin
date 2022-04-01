import CardImage from "./card-image";

export default function AxieCard({ title, mainImage, axieClass, part }) {
  return (
    <div className="mx-auto">
      <h1 className="text-lg text-center">{title}</h1>
      <CardImage title={title} imageObject={mainImage} />
    </div>
  );
}
