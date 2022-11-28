import { Player } from "./Player";

export let loadPlayerJSON = function(obj) {
    let players = []

    let testLoopNumber = 1;
    for (let i = 0; i < testLoopNumber; i++) {
    obj.forEach(e => {
        let optional = {"age":e.age, "region": e.region, "role": e.role, "OVR": e.OVR, "POT": e.POT, "askingFor": e.askingFor}
        players.push(new Player(e.name, optional))
    });
    console.log('abc1')
    }

    return players
}

export let loadTeamJSON = function(obj) {
    let teams = []
    
    obj.forEach(e => {
        //let optional = {"age":e.age, "region": e.region, "role": e.role, "OVR": e.OVR, "POT": e.POT, "askingFor": e.askingFor}
        teams.push(e)
    });
    console.log('abc2')

    return teams
}