"use client";
import styles from "./smash.module.css";

export default function SmashBrosPage() {
  return (
    <main className={styles.mainBackground}>
      <div className={styles.container}>
        <h1 className={styles.header}>Smash Bros</h1>

        <section className={styles.topContent}>
          <div className={styles.leftImage}></div>
          <div className={styles.textContainer}>
            <div className={styles.textHeader}></div>
            <div className={styles.textBox}></div>
          </div>
        </section>

        <section className={styles.bottomImage}></section>
      </div>
    </main>
  );
}