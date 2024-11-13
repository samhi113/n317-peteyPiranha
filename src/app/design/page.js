"use client"
import Link from "next/link"
import styles from "./design.module.css"


export default function Design() {
    return(
        <main>
            <h1 className={styles.title}>Design</h1>
            <section>
                <div className={styles.displayContainer}>
                    <div className={styles.displayBox}>
                        <div className={styles.displayImg}>
                            <Link href="/origin">
                            <img src="/Petey-2002.webp" />
                            </Link>
                        </div>
                        <div className={styles.caption}>
                            <h2>First Design</h2>
                            <p>Petey's debut, featuring a giant green-and-red Piranha Plant with large leaf arms and a big head with white polka dots and a spiky, green “crown.” He is also seen with a giant belly.</p>
                        </div>
                    </div>
                    <div className={styles.displayBox}>
                        <div className={styles.displayImg}>
                            <Link href="/mariokart">
                            <img src="/petey-marioKart.webp" />
                            </Link>
                        </div>
                        <div className={styles.caption}>
                            <h2>Mario Kart Design</h2>
                            <p>Petey’s design is updated for high-definition with more vibrant colors and refined textures. He looks similar to his Double Dash!! look but is more polished and detailed, with added texture to his leaf arms and head.</p>
                        </div>
                    </div>
                    <div className={styles.displayBox}>
                        <div className={styles.displayImg}>
                            <Link href="/smashbros">
                            <img src="/petey-smashBros.webp" />
                            </Link>
                        </div>
                        <div className={styles.caption}>
                            <h2>Smash Bros Design</h2>
                            <p>Petey Piranha’s design in Ultimate closely resembles his look from Super Mario Sunshine, with vibrant colors and a highly detailed appearance. He has a massive red head with white polka dots, sharp green lips, and a spiky green crown on top. His large leaf-like arms are muscular and extend outward, adding to his intimidating presence.</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>

    )
}