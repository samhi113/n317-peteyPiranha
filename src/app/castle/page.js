"use client";
import styles from "./castle.module.css";

export default function CastlePage() {
  return (
    <main className={styles.mainBackground}>
      <div className={styles.container}>
        <header className={styles.headerImage}>
          <div className={styles.overlay}>
            <h1 className={styles.headerText}>Petey's Castle</h1>
          </div>
        </header>

        <section className={styles.content}>
          <div className={styles.largeTextbox}></div>
          <div className={styles.smallTextboxes}>
            <div className={styles.smallTextbox}></div>
            <div className={styles.smallTextbox}></div>
          </div>
        </section>
      </div>
    </main>
  );
}