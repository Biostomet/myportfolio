import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link href="/">
          <a className="btn btn-ghost normal-case text-2xl font-bold">
            Nassim.Seg
          </a>
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          <li className="uppercase font-bold">
            <a href="#apropos">à propos de moi</a>
          </li>
          <li className="uppercase font-bold">
            <a href="#projects">mes réalisations</a>
          </li>
          <li className="uppercase font-bold">
            <a>contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
