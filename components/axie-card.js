import CardImage from "./card-image";

export default function AxieCard({ title, mainImage, axieClass, part }) {
  return (
    <div className="mx-auto">
      <CardImage
        title={title}
        imageObject={mainImage}
        width={200}
        height={300}
        scale="hover:scale-125"
      />
    </div>
  );
}
