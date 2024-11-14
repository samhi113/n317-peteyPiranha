import LRButtons from "@/components/LRButtons";
import styles from "./page.module.css";


export default function Home() {
  return (
    <main className={styles.mainContent}>
      <div className={styles.content}>
        
        <img className={styles.img} src="piranha.webp"></img>
      <LRButtons pageBack="" pageNext="inspo" />
      <div className={styles.text}>
        <h1 className={styles.h1}>Petey Piranha</h1>
        <h3>He is the dude, like the bro, and he is cool, i think</h3>
      </div>
      </div>
    </main>
  );
}
