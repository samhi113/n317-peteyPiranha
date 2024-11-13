import LRButtons from "@/components/LRButtons";
import styles from "./page.module.css";


export default function Home() {
  return (
    <main className={styles.mainContent}>
      <div className={styles.content}>
        <h1>Home</h1>
        <img className={styles.img} src="piranha.webp"></img>
      <LRButtons pageBack="" pageNext="inspo" />
      </div>
      
    </main>
  );
}
