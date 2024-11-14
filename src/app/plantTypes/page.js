import plantStyles from "./plant.module.css";

export default function plantTypes() {
    return(<main>
        <h1 class="title">Piranha Plants</h1>
        <div className={plantStyles.section}>
            <h2>Warp Pipe Variety</h2>
            <h3>Family: Piranalus</h3>
            <h3>Genus: Warpid</h3>
            <p>Most piranha plants are of one variety, those in the warp pipes. First appearing in 1985's Super Mario Bros. on the NES and Famicom, these plants move in and out of the warp pipes and regularly timed intervals. However, this genus goes further than that.</p>
        </div>

        <div className={plantStyles.section}>
            <h2>Standard Plant</h2>
            <h3>Genus: Warpid</h3>
            <h3>Species: stationa</h3>
            <p>These plants move in and out of the warp pipes and regularly timed intervals. Yes, that's the same as above. Wow. Not much you can do bout that, especially since there's not much these guys do either. They are the standard piranha plants you encounter.</p>
        </div>

        <div className={plantStyles.section}>
            <h2>Fire Breather</h2>
            <h3>Genus: Warpid</h3>
            <h3>Species: arsona</h3>
            <p>These plants move in and out of the warp pipes and regularly timed intervals. Yes, that's the same as above. But get this, they beathe fire! They do vary between games in functionality, as in some games, these monsters track your location while in others they keep hitting the same spot. Either way, this was the base species for the next step, back out a genus.</p>
        </div>

        <div className={plantStyles.section}>
            <h2>Independent Plants</h2>
            <h3>Genus: Solus</h3>
            <h3>Species: peta</h3>
            <p>Then we get to non-root-based plants like Petey! These monsters don't appear often, but when they do, you remember. It's not everyday you see a plant walking down the street with no roots.</p>
        </div>
    </main>);
}