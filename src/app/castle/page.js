"use client";
import LRButtons from "@/components/LRButtons";
import styles from "./castle.module.css";

export default function CastlePage() {
  return (
    <main className={styles.mainBackground}>
      <LRButtons pageBack="plantTypes" pageNext="smashBros" />
      <div className={styles.container}>
        <header className={styles.headerImage}>
          <div className={styles.overlay}>
            <h1 className={styles.headerText}>Petey's Castle</h1>
          </div>
        </header>

        <section className={styles.content}>
          <div className={styles.largeTextbox}>
            Petey Piranha's castle in New Super Mario Bros is a towering
            fortress nestled in the icy landscapes of World 5. It's filled with
            tricky paths and obstacles, making it challenging for any adventurer
            who enters. With chilly floors and massive stone walls, the castle
            feels as cold and imposing as it looks from the outside.
          </div>
          <div className={styles.smallTextboxes}>
            <div className={styles.smallImageBox}></div>
            <div className={styles.smallTextbox}>
              The castle’s halls are lined with conveyor belts that move between
              platforms, adding a layer of difficulty as Mario and his friends
              make their way through. Spiky Piranha Plants and dry, clattering
              Dry Bones patrol the corridors, adding to the mystery and danger
              lurking within. At the heart of the castle lies Petey Piranha,
              waiting in a grand chamber. Despite his fierce reputation, he has
              a curious habit of falling asleep, even while guarding his domain.
              His castle is a unique blend of icy floors, towering walls, and
              winding passages, all of which create a memorable journey for
              those who dare to explore its depths.
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
