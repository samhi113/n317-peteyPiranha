import Link from "next/link";
import styles from "../nav/nav.module.css";

export default function Nav() {
  return (
    <nav className={styles.mainNav}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/inspo">Inspiration</Link>
        </li>
        <li>
          <Link href="/design">Design</Link>
        </li>
      </ul>
    </nav>
  );
}
