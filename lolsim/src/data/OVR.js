export class OVR {
    constructor (average, random) {
        this.average = random ? randomNumber1(average) : average 
        this.laning = random ? randomNumber1(average) : average 
        this.teamfighting = random ? randomNumber1(average) : average 
        this.economy = random ? randomNumber1(average) : average 
        this.consistency = random ? randomNumber1(average) : average 
        //this.teamwork = random ? randomNumber1(average) : average 
        this.aggression = random ? randomNumber1(average) : average 
        this.stamina = random ? randomNumber1(average) : average 
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
