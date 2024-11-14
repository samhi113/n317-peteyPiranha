"use client";
import LRButtons from "@/components/LRButtons";
import plantStyles from "./plant.module.css";

export default function plantTypes() {
    const checkAnswer = async (e) => {
        e.preventDefault();
        document.getElementById("answer1").className = `${plantStyles.correct} ${plantStyles.answer}`;
    };

    return(<main>
        <h1 class="title">Piranha Plants</h1>
        <LRButtons pageBack="design" pageNext="castle" />
        <div className={plantStyles.section}>
            <img src="/warpPipe.png" />
            <div className={plantStyles.textSec}>
                <h2>Warp Pipe Variety</h2>
                <h3>Family: Piranalus</h3>
                <h3>Genus: Warpid</h3>
                <p>Most piranha plants are of one variety, those in the warp pipes. First appearing in 1985's Super Mario Bros. on the NES and Famicom, these plants move in and out of the warp pipes and regularly timed intervals. However, this genus goes further than that.</p>
            </div>
        </div>

        <div className={plantStyles.section}>
            <img src="/stationa.webp" />
            <div className={plantStyles.textSec}>
                <h2>Standard Plant</h2>
                <h3>Genus: Warpid</h3>
                <h3>Species: stationa</h3>
                <p>These plants move in and out of the warp pipes and regularly timed intervals. Yes, that's the same as above. Wow. Not much you can do bout that, especially since there's not much these guys do either. They are the standard piranha plants you encounter.</p>
            </div>
        </div>

        <div className={plantStyles.section}>
            <img src="/arsona.png" />
            <div className={plantStyles.textSec}>
                <h2>Fire Breather</h2>
                <h3>Genus: Warpid</h3>
                <h3>Species: arsona</h3>
                <p>These plants move in and out of the warp pipes and regularly timed intervals. Yes, that's the same as above. But get this, they breathe fire! They do vary between games in functionality, as in some games, these monsters track your location while in others they keep hitting the same spot. Either way, this was the base species for the next step, back out a genus.</p>
            </div>
        </div>

        <div className={plantStyles.section}>
            <img src="/DinoPiranha.webp" />
            <div className={plantStyles.textSec}>
                <h2>Independent Plants</h2>
                <h3>Family: Piranalus</h3>
                <h3>Genus: Solus</h3>
                <p>Then we get to non-root-based plants like Petey! These monsters don't appear often, but when they do, you remember. It's not everyday you see a plant walking down the street with no roots. Petey is one of two notable instances of solus, the other being Dino Piranha from Super Mario Galaxy.</p>
            </div>
        </div>

        <form className={plantStyles.form}>
            <h2>Quiz time! What species gave rise to the genus peta?</h2>
            <div className={plantStyles.answer} id="answer1">
                <input type="radio" name="quizOption" id="ans1" />
                <label htmlFor="ans1">arsona</label>
            </div>
            <div className={plantStyles.answer} id="answer2">
                <input type="radio" name="quizOption" id="ans2" />
                <label htmlFor="ans2">Warpid</label>
            </div>
            <div className={plantStyles.answer} id="answer3">
                <input type="radio" name="quizOption" id="ans3" />
                <label htmlFor="ans3">Piranha</label>
            </div>
            <div className={plantStyles.answer} id="answer4">
                <input type="radio" name="quizOption" id="ans4" />
                <label htmlFor="ans4">stationa</label>
            </div>
            <input type="submit" onClick={checkAnswer} value="Submit" />
        </form>
    </main>);
}