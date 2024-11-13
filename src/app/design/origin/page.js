import Link from "next/link"
import styles from "./origin.module.css"

export default function Origin() {
    return (
        <main>
             <h1 className={styles.title}>The First Design</h1>
            <section>
                <div className={styles.container}>
                    <div className={styles.pic}>
                        <img src="/3dpetey.jpeg"/>
                    </div>
                    <p className={styles.info}>
                    Petey Piranha first appeared in Super Mario Sunshine (2002) as a major boss character, created to be an oversized, more dynamic version of the classic Piranha Plant enemy that had appeared in the Mario series since its earliest games. Inspired by carnivorous plants like the Venus flytrap, Petey was designed to have a distinct personality and look, setting him apart from standard Piranha Plants. His massive red head with white polka dots, a spiky green “crown,” and large, leaf-like arms gave him a menacing yet whimsical appearance. In Super Mario Sunshine, Petey also introduced new mechanics, such as flying and spitting goop, adding layers to his character as a boss that was more challenging and interactive than many previous Mario enemies. This unique design helped him become an instantly recognizable character and established him as more than just a typical enemy, laying the foundation for his recurring appearances across the Mario franchise in games like Mario Kart, Mario Tennis, and Super Smash Bros., where he continues to be a fan-favorite boss with his larger-than-life personality and playful yet intimidating look.

                    </p>
                    <Link href="/design">
                    <button className={styles.buttons}>Back To Designs</button>
                    </Link>
                    
                </div>
            </section>

        </main>
    )
}