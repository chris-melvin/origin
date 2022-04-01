import { imageBuilder } from '../lib/sanity'

export default function CardImage({ title, imageObject, slug }) {
  const image = (
    <img
      width={200}
      height={300}
      alt={`Axie Card ${title}`}
      src={imageBuilder(imageObject).width(200).height(300).url()}
    />
  )

  return (
    <div className="-mx-5 sm:mx-0">
        {image}
    </div>
  )
}
