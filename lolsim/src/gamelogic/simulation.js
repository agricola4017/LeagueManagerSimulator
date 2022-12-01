import { testPlayer } from "../data/testPlayer";
import { Team } from "../data/Team";
import { roleEnum } from "../data/Enums";
import { rollPercentile } from "../data/functions";

export let initTestTeams = () => {

    let playersMap1 = new Map(); //map should be team id to player id? or maybe store by teamid+role, delete when swapping
    let playersMap2 = new Map();
    let team1 = new Team("team1", playersMap1)
    let team2 = new Team("team2", playersMap2)

    for (let i = 0; i < 5; i++) { 
        let age = 17
        let region = "NA"
        let role = roleEnum[i]
        let OVR = 100
        let POT = 100
        let askingFor = "50"
        let optional1 = {"age":age, "region": region, "role": role, "OVR": OVR, "POT": POT, "askingFor": askingFor, "team": "team1"}
        let optional2 = {"age":age, "region": region, "role": role, "OVR": OVR, "POT": POT, "askingFor": askingFor, "team": "team2"}
        playersMap1.set("team" + 1 + "player"+i, new testPlayer("team" + 1 + "player"+i, optional1))
        playersMap2.set("team" + 2 + "player"+i, new testPlayer("team" + 2 + "player"+i, optional2))
    }

    console.log(team1.getPlayers())
    console.log(team2.getPlayers())

    window.playerStats = []
    window.teamStats = []
    window.players1 = playersMap1
    window.players2 = playersMap2

    playGame(playersMap1, playersMap2)
}

let playGame = (playersMap1, playersMap2) => {
    console.log("Simulating Game begin")
    let goldDiff=0
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
    

        //lane phase
    //simulate 20 minutes
    //kills = killValue gold
    //towers = killValue gold

    /*
    this.average = (laning + teamfighting + economy + consistency + aggression + stamina) / 6
    */
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 5 ; j++) {
            
            const waveGold = 280
            let waveValue = (economy) => { //should be random actually
                let flat = 0.75
                let divider = 100/(1-flat)
                return Math.round((economy/divider + flat)*waveGold)
            }
            const killValue = 300
            
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
            let econ1 = OVR1.getEconomy()
            let econ2 = OVR2.getEconomy()

            playerStats[j]["gold"] += waveValue(econ1)
            playerStats[j+5]["gold"]+=waveValue(econ2)
            teamStats[0]["gold"]+=waveValue(econ1)
            teamStats[1]["gold"]+=waveValue(econ2)

            const percentageKill = 10

            //higher lane stat = more kills 
            //lane should probably be comprised of multiple stats
            let calculateKill = (lanx, lany, aggx, consy) => {
                let landiff = (lanx > 50 ? .8*(lanx - lany) : 0.6*(lanx - lany)) //need to scale this more logarithmically
                let varInfl = 0.15
                let divider = (100/varInfl)
                let aggcondiff = (aggx/divider + 0.9)/(consy/divider + 0.9)
                    //both vars should map near 1 ratio (0-100) -> (.9, 1.1)
                //(aggx > 50 ? (aggx - consy) : 0.8*(aggx - consy))
                return aggcondiff*landiff
            }
            //console.log(i, j, calculateKill(lan1, lan2, agg1, cons2), calculateKill(lan2, lan1, agg2, cons1))
            let soloKill = //rollGreaterThanPercentile(calculateKill(lan1, lan2, agg1, cons2), percentageKill)
                rollPercentile(calculateKill(lan1, lan2, agg1, cons2)) || rollPercentile(percentageKill)
            let econlossRatio = (econ) => {
                let flat = 1
                let variable = econ / 200
                return Math.round((flat - variable))
            }

            if (soloKill) {
                goldDiff+=3 //kill
                goldDiff+=1.2 //cs
                playerStats[j]["kills"]+=1
                playerStats[j]["gold"]+=killValue
                teamStats[0]["kills"]+=1
                teamStats[1]["deaths"]+=1
                playerStats[j+5]["deaths"]+=1
                playerStats[j+5]["gold"]-=waveValue(econ2)*econlossRatio(econ2)
                teamStats[0]["gold"] += killValue
                teamStats[1]["gold"]-= waveValue(econ2)*econlossRatio(econ2)
            }
            let soloKill2 = //rollGreaterThanPercentile(calculateKill(lan2, lan1, agg2, cons1), percentageKill)
                rollPercentile(calculateKill(lan2, lan1, agg2, cons1)) || rollPercentile(percentageKill)

            if (soloKill2) {
                goldDiff-=3 //kill
                goldDiff-=1.2 //cs
                playerStats[j+5]["kills"]+=1
                playerStats[j+5]["gold"]+=killValue
                teamStats[1]["kills"]+=1
                teamStats[0]["deaths"]+=1
                playerStats[j]["deaths"]+=1
                playerStats[j]["gold"]-=waveValue(econ1)*econlossRatio(econ1)
                teamStats[1]["gold"] += killValue
                teamStats[0]["gold"]-= waveValue(econ1)*econlossRatio(econ1)

            }


            //solo kill is rare, <20%  chance it happens maybe
        }
    }
    if (goldDiff > 0) {
        teamStats[0]["win"] = true
    } else {
        teamStats[1]["win"] = true
    }
    //console.log(teamStats)
    //console.log(playerStats)

    //teamfight phase 
    //useful stats: consistency, economy, aggression, stamina

    while (false) {

    }
}