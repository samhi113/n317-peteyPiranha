import Link from "next/link"
import styles from "./kart.module.css"

export default function Origin() {
    return (
        <main>
             <h1 className={styles.title}>Mario Kart Design</h1>
            <section>
                <div className={styles.container}>
                    <div className={styles.pic}>
                        <img src="/marioK-petey.jpg"/>
                    </div>
                    <p className={styles.info}>
                    In the Mario Kart series, Petey Piranha made his debut as a playable character in Mario Kart: Double Dash!! (2003), standing out as one of the game’s few heavyweight racers and pairing up with King Boo. His design reflects the exaggerated style of the Mario Kart world, showcasing his massive red head with white polka dots, a green crown of spikes, and large leaf-like arms. Unlike typical racers, Petey’s unique size and weight give him a more intimidating presence on the track, making him a powerhouse who can easily knock other characters aside. His special ability in Double Dash!! allows him to use any character’s unique item, making him one of the most versatile racers in the game. Petey later appeared in Mario Kart Tour (2019), where his design is updated with higher-definition textures and a more cartoonish, playful expression, while still retaining his oversized charm. Petey Piranha’s appearances in Mario Kart emphasize his strength and chaotic energy, making him a fan-favorite among heavyweight racers and a nostalgic throwback for fans of his earlier Mario games.

                    </p>
                    <Link href="/design">
                    <button className={styles.buttons}>Back To Designs</button>
                    </Link>
                    
                </div>
            </section>

        </main>
    )
}