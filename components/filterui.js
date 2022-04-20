export default function FilterUI({
  search,
  part,
  axieClass,
  setSearch,
  setPart,
  setAxieClass,
}) {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col">
        <input
          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          type="text"
          placeholder="Search for a Card"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          value={part}
          onChange={(e) => setPart(e.target.value)}
        >
          <option value="">Part</option>
          <option value="ears">Ears</option>
          <option value="eyes">Eyes</option>
          <option value="tail">Tail</option>
          <option value="horn">Horn</option>
          <option value="mouth">Mouth</option>
          <option value="back">Back</option>
        </select>
        <select
          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          value={axieClass}
          onChange={(e) => setAxieClass(e.target.value)}
        >
          <option value="">Class</option>
          <option value="aqua">Aqua</option>
          <option value="beast">Beast</option>
          <option value="bird">Bird</option>
          <option value="bug">Bug</option>
          <option value="plant">Plant</option>
          <option value="reptile">Reptile</option>
        </select>
      </div>
    </div>
  );
}
