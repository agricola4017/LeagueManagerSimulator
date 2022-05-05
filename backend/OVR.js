export class OVR {
    constructor (average) {
        this.average = average
        this.laning = average
        this.teamfighting = average
        this.economy = average
        this.consistency = average
        //this.teamwork = average
        this.aggression = average
        this.stamina = average
    }

    constructor (laning, teamfighting, economy, consistency, aggression, stamina) {
        this.average = (laning + teamfighting + economy + consistency + aggression + stamina) / 6
        this.laning = laning
        this.teamfighting = teamfighting
        this.economy = economy
        this.consistency = consistency
        this.aggression = aggression
        this.stamina = stamina
    }
    
}
