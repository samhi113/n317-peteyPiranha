import Link from "next/link"
import styles from "./smash.module.css"
import LRButtons from "@/components/LRButtons"

export default function Origin() {
    return (
        <main>
            <LRButtons pageBack="castle" pageNext="appearances" />
             <h1 className={styles.title}>Smash Bros Ultimate Design</h1>
            <section>
                <div className={styles.container}>
                    <div className={styles.pic}>
                        <img src="/smash-petey.jpg"/>
                    </div>
                    <p className={styles.info}>
                    In Super Smash Bros. Ultimate, Petey Piranha makes a dramatic return as part of the Piranha Plant character’s Final Smash, marking his first playable appearance in the Smash Bros. series. This iteration draws on Petey’s classic design from Super Mario Sunshine, complete with his massive red head, white polka dots, spiky green crown, and iconic leaf-like arms. Petey’s role in Ultimate references his boss battles in Sunshine, particularly his signature move where he wields two cages and swings them across the stage. When the Piranha Plant character triggers its Final Smash, Petey appears, towering over other fighters as he stomps around, swinging the cages to trap opponents and deal heavy damage. His movements are animated with vibrant energy and powerful sound effects, capturing the chaotic personality that made him memorable in his original appearance. This nod to Sunshine brings a nostalgic touch to fans while adding an intense, impactful layer to gameplay, reinforcing Petey Piranha’s reputation as an iconic, larger-than-life character within the Mario universe.

                    </p>
                    <Link href="/design">
                    <button className={styles.buttons}>Back To Designs</button>
                    </Link>
                    
                </div>
            </section>

        </main>
    )
}