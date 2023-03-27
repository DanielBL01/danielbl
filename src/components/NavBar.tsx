import React from "react";
import { Link } from "react-router-dom";
import { BsSunFill, BsMoonFill } from 'react-icons/bs';

type Props = {
  darkMode: boolean;
  onClick: () => void;
};

function NavBar({ darkMode, onClick }: Props): JSX.Element {

  return (
    <div>
      <br />
      <div className="flex justify-between items-center mb-8">
        <ul className="list-none">
          <li className="inline-block pr-6 py-2 hover:underline">
            <Link to="/">Home</Link>
          </li>
          <li className="inline-block px-6 py-2 hover:underline">
            <Link to="/about">About</Link>
          </li>
          <li className="inline-block px-6 py-2 hover:underline">
            <Link to="/learn">Learn</Link>
          </li>
          <li className="inline-block pl-6 py-2 hover:underline">
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
        <button className="text-xl" onClick={onClick}>
          {darkMode ? <BsSunFill /> : <BsMoonFill />}
        </button>
      </div>
    </div>
  );
}

export default NavBar;
