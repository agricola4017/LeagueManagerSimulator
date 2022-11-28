import { testPlayer } from "../data/testPlayer";
import { Team } from "../data/Team";
import { roleEnum } from "../data/Enums";
import { rollGreaterThanPercentile } from "../data/functions";

/* this.age = randomizeIfNullCustom(optional["age"], 18, 30)
this.region = optional["region"] !== null ? optional["region"] : regionEnum[randomNumber1(Object.keys(regionEnum).length)]
this.role = optional["role"] !== null ? optional["role"] : roleEnum[randomNumber1(Object.keys(roleEnum).length)]
this.OVR = randomizeIfNullIncl(optional["OVR"], 100)
this.POT = randomizeIfNullIncl(optional["POT"], 100)
this.askingFor = randomizeIfNullCustom(optional["askingFor"], 25, 100)
this.team = optional["team"] !== null ? optional["team"]: "Free Agent"
*/

export let initTestTeams = () => {

    let playersMap1 = new Map();
    let playersMap2 = new Map();
    let team1 = new Team("team1", playersMap1)
    let team2 = new Team("team2", playersMap2)

    for (let i = 0; i < 5; i++) { 
        let age = 17
        let region = "NA"
        let role = roleEnum[i]
        let OVR = 50
        let POT = 100
        let askingFor = "50"
        let optional1 = {"age":age, "region": region, "role": role, "OVR": OVR, "POT": POT, "askingFor": askingFor, "team": "team1"}
        let optional2 = {"age":age, "region": region, "role": role, "OVR": OVR, "POT": POT, "askingFor": askingFor, "team": "team2"}
        playersMap1.set("team" + 1 + "player"+i, new testPlayer("team" + 1 + "player"+i, optional1))
        playersMap2.set("team" + 2 + "player"+i, new testPlayer("team" + 2 + "player"+i, optional2))
    }

    console.log(team1.getPlayers())
    console.log(team2.getPlayers())

    console.log("Simulating Game begin")

    let goldDiff=0
    //lane phase
    //simulate 20 minutes
    //kills = killValue gold
    //towers = killValue gold

    /*
    this.average = (laning + teamfighting + economy + consistency + aggression + stamina) / 6
*/

    window.playerStats = []
    window.teamStats = []
    window.players1 = playersMap1
    window.players2 = playersMap2
    
    let playerStats = window.playerStats
    let teamStats = window.teamStats
    teamStats[0] = {
        win: false,
        kills: 0, 
        deaths: 0,
        gold: 0,
    }
    teamStats[1] = {
        win: false,
        kills: 0, 
        deaths: 0,
        gold: 0,
    }
    for (let i = 0; i < 10; i++) {
        playerStats[i] = {kills: 0, deaths:0, cs:0, gold:0}
    }
    
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 5 ; j++) {
            
            let waveValue = 280
            let killValue = 300
            playerStats[j]["gold"]+=waveValue
            playerStats[j+5]["gold"]+=waveValue
            teamStats[0]["gold"]+=waveValue
            teamStats[1]["gold"]+=waveValue
            //percentage chance based on aggression someone dies 
            //consistency will prevent solokill 
            //economy built through cs, each wave is 7 cs (if someone dies they lose 7 cs)
            let player1 = playersMap1.get("team1player"+j)
            let player2 = playersMap2.get("team2player"+j)
            let OVR1 = player1.getOVR()
            let OVR2 = player2.getOVR()

           /*  if (j===1) {
                continue
            } */

            //compare aggression to consistency, scaled by laning
            let agg1 = OVR1.getAggression()
            let agg2 = OVR2.getAggression()
            let cons1 = OVR1.getAggression()
            let cons2 = OVR2.getConsistency()
            let lan1 = OVR1.getLaning()
            let lan2 = OVR2.getLaning()

            let flatChance = 0
            let percentageKill = 80
            let soloKill = rollGreaterThanPercentile(flatChance + (lan1 - lan2) + (agg1 - cons2), percentageKill)

            if (soloKill) {
                goldDiff+=3 //kill
                goldDiff+=1.2 //cs
                playerStats[j]["kills"]+=1
                playerStats[j]["gold"]+=killValue
                teamStats[0]["kills"]+=1
                teamStats[1]["deaths"]+=1
                playerStats[j+5]["deaths"]+=1
                playerStats[j+5]["gold"]-=waveValue
                teamStats[0]["gold"] += killValue
            }

            let soloKill2 = rollGreaterThanPercentile(flatChance + (lan2 - lan1) + (agg2 - cons1), percentageKill)

            if (soloKill2) {
                goldDiff-=3 //kill
                goldDiff-=1.2 //cs
                playerStats[j+5]["kills"]+=1
                playerStats[j+5]["gold"]+=killValue
                teamStats[1]["kills"]+=1
                teamStats[0]["deaths"]+=1
                playerStats[j]["deaths"]+=1
                playerStats[j]["gold"]-=waveValue
                teamStats[1]["gold"] += killValue
            }


            //solo kill is rare, <20%  chance it happens maybe
        }
        //useful stats are laning, economy, consistency, aggression
    }
    if (teamStats[0]["kills"] > teamStats[1]["kills"]) {
        teamStats[0]["win"] = true
    } else {
        teamStats[1]["win"] = true
    }
    console.log(teamStats)
    console.log(playerStats)
    //teamfight phase 
    //useful stats: consistency, economy, aggression, stamina

    while (false) {

    }
}