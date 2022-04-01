export default function Table({ content, title }) {
  return (
    <div className="m-2">
      <h1 className="text-xl font-bold">{title}</h1>
      {content.map((d) => (
        <div key={d.name}>
          <p>
            <span className="text-gray-600	"> {d.name}</span> - {d.description}
          </p>
        </div>
      ))}
    </div>
  );
}
