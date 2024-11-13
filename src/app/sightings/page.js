"use client";
import { useState } from "react";
import styles from "./sightings.module.css";

export default function SightingsPage() {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    e.target.reset();
    setSubmitted(true);
  }

  return (
    <main className={styles.mainBackground}>
        <div className={styles.container}>
            <h1>Report a Sighting of Petey</h1>
      <form onSubmit={onSubmit}>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="name">Name:</label>
          <input className={styles.input} type="text" id="name" name="name" required />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="email">Email:</label>
          <input className={styles.input} type="email" id="email" name="email" required />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="details">Details:</label>
          <textarea className={styles.textarea} id="details" name="details" required />
        </div>
        <button className={styles.button} type="submit">Submit</button>
      </form>
      {submitted && <p className={styles.successMessage}>Sighting reported successfully!</p>}
        </div>
      
    </main>
  );
}