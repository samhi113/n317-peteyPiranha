import Link from "next/link";
import styles from "./nav.module.css";

export default function Nav() {
  return (
    <nav className={styles.mainNav}>
      <div className={styles.logo}>
        <Link href="/">
        <img src="/petey-icon.png" />
        </Link> 
      </div>
      <div className={styles.links} >
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
        <li>
          <Link href="/plantTypes">Types</Link>
        </li>
        <li>
          <Link href="/castle">Castle</Link>
        </li>
        <li>
          <Link href="/smashBros">Smash Bros</Link>
        </li>
        <li>
          <Link href="/appearances">Appearances</Link>
        </li>
        <li>
          <Link href="/sightings">Sightings</Link>
        </li>
        <li>
          <Link href="/rankings">Rankings</Link>
        </li>
        <li>
          <Link href="/faq">FAQ</Link>
        </li>
      </ul>
      </div>
      
    </nav>
  );
}
