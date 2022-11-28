export class Team {
    constructor (name, players) {
        this.name = name
        this.players = players
    }

    getPlayers() {
        return this.players
    }
}