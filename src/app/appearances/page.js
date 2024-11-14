import LRButtons from "@/components/LRButtons";
import gameStyles from "./game.module.css";

export default function appearancePage() {
    return (<main>
        <LRButtons pageBack="smashBros" pageNext="sightings" />
        <h1 class="title">Games Appeared In</h1>
        <table className={gameStyles.table}>
            <thead>
                <tr>
                    <th>Game Title</th>
                    <th>Year</th>
                    <th>Console</th>
                    <th>Note</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Super Mario Sunshine</td>
                    <td>2002</td>
                    <td>GameCube</td>
                    <td>Re-released as part of 2020's Super Mario 3D All-Stars on the Switch</td>
                </tr>
                <tr>
                    <td>Mario Golf: Toadstool Tour</td>
                    <td>2003</td>
                    <td>GameCube</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Mario Kart: Double Dash!!</td>
                    <td>2003</td>
                    <td>GameCube</td>
                    <td>Only Mario Kart appearance</td>
                </tr>
                <tr>
                    <td>Mario Pinball Land</td>
                    <td>2004</td>
                    <td>Game Boy Advance</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Mario Power Tennis</td>
                    <td>2004</td>
                    <td>GameCube</td>
                    <td>Remastered onto Wii in 2009 as part of New Play Control! line</td>
                </tr>
                <tr>
                    <td>Mario Superstar Baseball</td>
                    <td>2005</td>
                    <td>GameCube</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Super Princess Peach</td>
                    <td>2005</td>
                    <td>DS</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Mario & Luigi: Partners In Time</td>
                    <td>2005</td>
                    <td>DS</td>
                    <td></td>
                </tr>
                <tr>
                    <td>New Super Mario Bros.</td>
                    <td>2006</td>
                    <td>DS</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Mario Hoops 3-on-3</td>
                    <td>2006</td>
                    <td>DS</td>
                    <td>Goalposts on one court</td>
                </tr>
                <tr>
                    <td>Mario Strikers Charged</td>
                    <td>2007</td>
                    <td>Wii</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Super Smash Bros. Brawl</td>
                    <td>2008</td>
                    <td>Wii</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Mario Kart Wii</td>
                    <td>2008</td>
                    <td>Wii</td>
                    <td>Was planned as playable character, makes cameo</td>
                </tr>
                <tr>
                    <td>Mario Super Sluggers</td>
                    <td>2008</td>
                    <td>Wii</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Mario Sports Mix</td>
                    <td>2010</td>
                    <td>Wii</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Paper Mario Sticker Star</td>
                    <td>2012</td>
                    <td>3DS</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Mario Party 10</td>
                    <td>2015</td>
                    <td>Wii U</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Puzzle & Dragons: Super Mario Bros. Edition</td>
                    <td>2015</td>
                    <td>3DS</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Mario & Luigi: Paper Jam</td>
                    <td>2015</td>
                    <td>3DS</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Minecraft: Wii U Edition</td>
                    <td>2016</td>
                    <td>Wii U</td>
                    <td>Released in Super Mario mash-up DLC package as a skin</td>
                </tr>
                <tr>
                    <td>Mario Party: Star Rush</td>
                    <td>2016</td>
                    <td>3DS</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Minecraft: Nintendo Switch Edition</td>
                    <td>2017</td>
                    <td>Switch</td>
                    <td>Released in Super Mario mash-up DLC package as a skin</td>
                </tr>
                <tr>
                    <td>Mario Party: The Top 100</td>
                    <td>2017</td>
                    <td>3DS</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Minecraft: New Nintendo 3DS Edition</td>
                    <td>2018</td>
                    <td>New 3DS</td>
                    <td>Released in Super Mario mash-up DLC package as a skin</td>
                </tr>
                <tr>
                    <td>Minecraft: Bedrock Edition</td>
                    <td>2018</td>
                    <td>Switch</td>
                    <td>Released in Super Mario mash-up DLC package as a skin</td>
                </tr>
                <tr>
                    <td>Mario Tennis Aces</td>
                    <td>2018</td>
                    <td>Switch</td>
                    <td>Playable Character in update</td>
                </tr>
                <tr>
                    <td>Super Smash Bros. Ultimate</td>
                    <td>2018</td>
                    <td>Switch</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Dr. Mario World</td>
                    <td>2021</td>
                    <td>iOS and Android</td>
                    <td>Playable Character in update</td>
                </tr>
                <tr>
                    <td>Mario Party Superstars</td>
                    <td>2021</td>
                    <td>Switch</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Mario Kart Tour</td>
                    <td>2022</td>
                    <td>iOS and Android</td>
                    <td></td>
                </tr>
            </tbody>
        </table>

        <div className={gameStyles.source}><a href="https://mario.fandom.com/wiki/Petey_Piranha" target="_blank">Source: https://mario.fandom.com/wiki/Petey_Piranha</a> </div>
    </main>)
}