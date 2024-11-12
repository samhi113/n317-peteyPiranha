"use Client"
import styles from "./inspo.module.css"


export default function Inspo() {
    return (
        <main >
            <h1 className={styles.title}>The Origins of Petey Piranha</h1>
            <section>
                <p className={styles.infoBox}>
                Petey Piranha, a character from the Mario series, draws inspiration from classic carnivorous plants with a quirky twist. His design amplifies the intimidating traits of a Piranha Plant, evolving it into a towering, anthropomorphic figure with vibrant colors, a toothy grin, and a playful yet menacing personality. Influenced by pop culture’s fascination with exaggerated flora and fauna, Petey embodies the lively, chaotic nature of Mario's world, blending a sense of danger with charm. His oversized leaf arms and spotted petals highlight his monstrous yet whimsical character, making him a memorable and visually dynamic adversary in the Mario universe.
                </p>
            </section>
            <section>
                <div className={styles.display1}>
                    <div className={styles.imageD}>
                        <img src="https://placehold.co/500x350/000000/FFFFFF/jpg" />
                    </div>
                    <div className={styles.displayText}>
                        <h3 className={styles.displayTitle}> P Plant </h3>
                        <p className={styles.displayDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque elit at magna pulvinar, at laoreet urna interdum. 
                        Suspendisse potenti. Phasellus commodo velit et massa venenatis, vitae ultricies ligula egestas.</p>
                    </div>
                </div>
                <div className={styles.display2}>
                    <div className={styles.displayText2}>
                        <h3 className={styles.displayTitle}> P Plant </h3>
                        <p className={styles.displayDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque elit at magna pulvinar, at laoreet urna interdum. 
                        Suspendisse potenti. Phasellus commodo velit et massa venenatis, vitae ultricies ligula egestas.</p>
                    </div>
                    <div className={styles.imageD}>
                        <img src="https://placehold.co/500x350/000000/FFFFFF/jpg" />
                    </div>
                </div>
            </section>
        </main>
    )
}