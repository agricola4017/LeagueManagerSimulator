import { Player } from "./Player";

export let loadPlayerJSON = function(obj) {
    let players = []

    obj.forEach(e => {
        let optional = {"age":e.age, "region": e.region, "role": e.role, "OVR": e.OVR, "POT": e.POT, "askingFor": e.askingFor, "team":e.team}
        players.push(new Player(e.name, optional))
    });

    return players
}

export let loadTeamJSON = function(obj) {
    let teams = []
    
    obj.forEach(e => {
        //let optional = {"age":e.age, "region": e.region, "role": e.role, "OVR": e.OVR, "POT": e.POT, "askingFor": e.askingFor}
        teams.push(e)
    });

    return teams
}