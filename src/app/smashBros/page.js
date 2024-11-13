"use client";
import LRButtons from "@/components/LRButtons";
import styles from "./smash.module.css";

export default function SmashBrosPage() {
  return (
    <main className={styles.mainBackground}>
      <LRButtons pageBack="castle" pageNext="appearances" />
      <div className={styles.container}>
        <h1 className={styles.header}>Super Smash Bros Brawl</h1>

        <section className={styles.topContent}>
          <div className={styles.leftImage}></div>
          <div className={styles.textContainer}>
        
            <div className={styles.textBox}>In Super Smash Bros. Brawl, Petey Piranha is the first big boss in the game’s "Subspace Emissary" story mode. During a fight in a stadium, Petey shows up and captures Princess Peach and Princess Zelda in two cages. Mario is knocked away, so it's up to Kirby to fight Petey.</div>
          </div>
        </section>

        <section className={styles.bottomImage}>To defeat Petey, players can target one of the cages or hit his head, which splits damage between the two cages. When one cage breaks, it frees the princess inside. Afterward, Petey catches on fire, falls, and explodes. If both cages are destroyed at the same time, the game picks one princess at random to be freed. The other princess is then turned into a statue by Wario.

Petey shows up again later in a mode called "Boss Battles" and in a level called "The Great Maze." In these stages, his cages are empty, and the background is a calm blue sky instead of the red sky seen in the first battle.

Petey has a few simple moves. He swings the cages or jumps to try to stomp on players. When a cage is damaged enough, Petey’s attacks become faster and stronger.</section>
      </div>
    </main>
  );
}