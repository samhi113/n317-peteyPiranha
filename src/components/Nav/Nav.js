"use client";

import Link from "next/link";
import navStyles from "./nav.module.css";

export default function Nav() {
  return (
    <nav>
      <ul className={navStyles.mainNav}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/">Page Two</Link>
        </li>
        <li>
          <Link href="/">Page Two</Link>
        </li>
        <li>
          <Link href="/">Page Two</Link>
        </li>
        <li>
          <Link href="/">Page Two</Link>
        </li>
        <li>
          <Link href="/">Page Two</Link>
        </li>
      </ul>
    </nav>
  );
}
