import { Player } from "./Player";

export let loadPlayerJSON = function(obj) {
    let players = []

    obj.forEach(e => {
        players.push(new Player(e.name, e.age, e.region, e.role, e.OVR, e.POT))
    });

    return players
}