export default function Container({ children, tierName, tier, fold }) {
  return (
    <div
      style={{ backgroundColor: tierName[tier].color }}
      className={` flex flex-wrap mb-2 transition  ${fold ? "hidden" : ""} `}
      ref={dropRef}
    >
      {children}
    </div>
  );
}
