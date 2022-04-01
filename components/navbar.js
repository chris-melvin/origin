import Link from "next/link";

export default function Navbar() {
  return (
    <nav className={`flex z-100 w-full p-6 font-bold justify-between `}>
      <h1 className="text-xl font-mono  ">Origin</h1>
      <div>
        <Link href="/">
          <a className="text-black mx-4">Home</a>
        </Link>
        <Link href="/guide">
          <a className="text-block mx-4">Guide</a>
        </Link>
        <Link href="/potential">
          <a className="text-block mx-4">Potential Points</a>
        </Link>
        <Link href="/about">
          <a className="text-block mx-4">About</a>
        </Link>
      </div>
    </nav>
  );
}
