// export const addCard = (card, tier, setTier) => {
//   const found = tier.some((el) => el._id === card._id);
//   if (!found) {
//     setTier((prevTier) => [...prevTier, card]);
//   }
// };

// export const removeCard = (card, list, setList) => {
//   const newList = list.filter((el) => el._id !== card._id);
//   setList(newList);
// };

export const handleCard = (card, tier, list, setList) => {
  const newList = list.filter((el) => el._id === card._id);
  newList[0].tier = tier;
  setList([...list]);
};
