import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-primary font-bold">
      <div className="flex z-100 p-6 justify-between">
        <h1 className="text-xl font-mono text-white  ">Origin</h1>
        <div className={`hidden md:block space-x-6`}>
          <Link href="/">
            <a className="text-white ">Home</a>
          </Link>
          <Link href="/tierlist">
            <a className="text-white ">Tier List</a>
          </Link>
          <Link href="/guide">
            <a className="text-white ">Guide</a>
          </Link>
          <Link href="/potential">
            <a className="text-white ">Potential Points</a>
          </Link>
          <Link href="/about">
            <a className="text-white ">About</a>
          </Link>
        </div>
        <button
          type="button"
          aria-label="Toggle Mobile Menu"
          onClick={() => setOpen(!open)}
          className="rounded md:hidden focus:outline-none focus:ring focus:ring-gray-500 focus:ring-opacity-50"
        >
          <MenuAlt4Svg menuOpen={open} />
        </button>
      </div>

      {open && (
        <div className="p-4 flex flex-col space-y-3 md:hidden">
          <Link href="/">
            <a className="text-white ">Home</a>
          </Link>
          <Link href="/tierlist">
            <a className="text-white ">Tier List</a>
          </Link>
          <Link href="/guide">
            <a className="text-white ">Guide</a>
          </Link>
          <Link href="/potential">
            <a className="text-white ">Potential Points</a>
          </Link>
          <Link href="/about">
            <a className="text-white ">About</a>
          </Link>
        </div>
      )}
    </nav>
  );
}

const MenuAlt4Svg = ({ menuOpen }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`transition duration-100 ease h-8 w-8 ${
      menuOpen ? "transform rotate-90" : ""
    }`}
    viewBox="0 0 20 20"
    fill="white"
  >
    <path
      fillRule="evenodd"
      d="M3 7a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 13a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
      clipRule="evenodd"
    />
  </svg>
);
