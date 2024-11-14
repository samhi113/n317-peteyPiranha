import LRButtons from "@/components/LRButtons";
import rankStyle from "./rank.module.css";

export default function rankingPage() {
    return (<main id="rankPage">
        <LRButtons pageBack="sightings" pageNext="faq" />

        <h1 class="title">Top 3 Petey Piranha Appearances</h1>

        <div className={rankStyle.appearance}>
            <img src="baseball.webp" alt="Petey Piranha steps up to home plate, ready to bat." title="Petey Piranha steps up to home plate, ready to bat." />
            <div className={rankStyle.textSec}>
                <h2>3. Mario Superstar Baseball / Super Sluggers</h2>
                <h3>Role: Playable Character / CPU</h3>
                <p>These past few years, baseball's newest heavy hitters have rose through the ranks and defined themselves as legends of the sport. Names like Trout, Ohtani, and Judge are household names while there's absolutely no recognition for the Mythical Monster, the Leafy Lefty, the Greatest Pete in all of baseball, Petey Piranha. With a power ranking of 9/10, tied for the highest in the game, Petey was born to be a <abbr title="Designated Hitter">DH</abbr>. Personally, he's third on my batting order. He'll get <abbr title="Runs Batted In">RBI</abbr>s, Home Runs, and be an overall beast in the offense. He may be a liability in the defense, but if Moneyball taught me one thing, its that all that matters is <abbr title="On Base Percentage">OBP</abbr>.</p>
            </div>
        </div>

        <div className={rankStyle.appearance}>
            <img src="doubleDash.png" alt="Petey and King Boo squirm through the course." title="Petey and King Boo squirm through the course." />
            <div className={rankStyle.textSec}>
                <h2>2. Mario Kart Double Dash!!</h2>
                <h3>Role: Playable Character / CPU</h3>
                <p>If you were to define different eras of Petey's existence, the Gamecube era would far and away rank as one of his most iconic. Taking a look at his appearance in Double Dash, Petey stood out as one of the newcomers to the series who didn't appear out out hin air. (Looking at you, Toadette.) So, for Petey to show up and be partnered with King Boo, another character you cannot normally play as, made this combo a fun, wacky selection in the early 2000s. Also, the Piranha Pipe kart. Need I say more?</p>
            </div>
        </div>

        <div className={rankStyle.appearance}>
            <img src="sunshine.webp" alt="Petey stands over top of Bianco Hills, watching his domain." title="Petey stands over top of Bianco Hills, watching his domain." />
            <div className={rankStyle.textSec}>
                <h2>1. Super Mario Sunshine</h2>
                <h3>Role: Boss</h3>
                <p>They say you never start on top. You might not, but Petey sure did. In his first outing in the mainline Mario series, Petey was the boss stationed in Bianco Hills, where he manned the windmills. After Mario defeats him, Petey doesn't vanish like Mario's other foes. No, Petey STARTS FLYING. WHEN HAVE YOU EVER SEEN A PLANT FLY. But not only does Petey fly to Mario, he ATTACKS HIM FROM THERE. To my knowledge there has never been any other instance of a plant attacking from the air in the Mario series. In his first outing, Petey shows that while he is part of a species that dominates the ground, he still has dual-threat abilities.</p>
            </div>
        </div>
    </main>)
}