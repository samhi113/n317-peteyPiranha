"use Client"
import LRButtons from "@/components/LRButtons"
import styles from "./inspo.module.css"


export default function Inspo() {
    return (
        <main >
            <LRButtons pageBack="home" pageNext="design" />
            <h1 class="title">The Origins of Petey Piranha</h1>
            <section>
                <p className={styles.infoBox}>
                Petey Piranha, a character from the Mario series, draws inspiration from classic carnivorous plants with a quirky twist. His design amplifies the intimidating traits of a Piranha Plant, evolving it into a towering, anthropomorphic figure with vibrant colors, a toothy grin, and a playful yet menacing personality. Influenced by pop culture’s fascination with exaggerated flora and fauna, Petey embodies the lively, chaotic nature of Mario's world, blending a sense of danger with charm. His oversized leaf arms and spotted petals highlight his monstrous yet whimsical character, making him a memorable and visually dynamic adversary in the Mario universe.
                </p>
            </section>
            <section>
                <div className={styles.display1}>
                    <div className={styles.imageD}>
                        <img src="/man-eater.jpg" className={styles.pic}/>
                    </div>
                    <div className={styles.displayText}>
                        <h3 className={styles.displayTitle}>Man Eating Plants </h3>
                        <p className={styles.displayDescription}>Petey Piranha, a recurring character in Nintendo's Mario series, was inspired by classic Piranha Plant enemies. These originated as "man-eating plants," known for popping out of pipes to surprise players, taking inspiration from the Venus flytrap plant.</p>
                    </div>
                </div>
                <div className={styles.display2}>
                    <div className={styles.displayText2}>
                        <h3 className={styles.displayTitle}> Petey's Debut</h3>
                        <p className={styles.displayDescription}>Petey Piranha, introduced in Super Mario Sunshine (2002), took this concept further by giving the character more personality and a unique design. He’s oversized, with a distinctive face, leaf-like arms, and, in some games, wings, transforming the standard Piranha Plant into a larger, boss-level character with unique behaviors and characteristics</p>
                    </div>
                    <div className={styles.imageD}>
                        <img src="/Petey-2002.webp" />
                    </div>
                </div>
            </section>
        </main>
    )
}