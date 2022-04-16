export default function filterFunction(filteredCards, part, axieClass) {
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
