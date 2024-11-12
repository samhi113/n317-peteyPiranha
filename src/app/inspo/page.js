"use Client"
import styles from "./inspo.module.css"


export default function Inspo() {
    return (
        <main >
            <h1 className={styles.title}>Inspiration</h1>
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