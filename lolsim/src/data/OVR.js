import { randomNumber1 } from "./functions"

export class OVR {
    constructor (average, random, optional) {
        this.laning = random ? randomNumber1(average) : optional["laning"] 
        this.teamfighting = random ? randomNumber1(average) : optional["teamfighting"] 
        this.economy = random ? randomNumber1(average) : optional["economy"] 
        this.consistency = random ? randomNumber1(average) : optional["consistency"] 
        this.teamwork = random ? randomNumber1(average) : optional["teamwork"]
        this.aggression = random ? randomNumber1(average) : optional["aggression"]
        this.stamina = random ? randomNumber1(average) : optional["stamina"]
        this.average = Math.round((this.laning+this.teamfighting+this.economy+this.consistency+this.teamwork+this.aggression+this.stamina)/7)
    }
/* 
    constructor (laning, teamfighting, economy, consistency, aggression, stamina) {
        this.average = (laning + teamfighting + economy + consistency + aggression + stamina) / 6
        this.laning = laning
        this.teamfighting = teamfighting
        this.economy = economy
        this.consistency = consistency
        this.aggression = aggression
        this.stamina = stamina
    } */

    getTotal = function() {
        return this.average
    }

    calculateAverage = function() {
        return Math.round((this.laning+this.teamfighting+this.economy+this.consistency+this.teamwork+this.aggression+this.stamina)/7)
    }

    getAggression = () => {
        return this.aggression
    }
    getEconomy = () => {
        return this.economy
    }
    getLaning = () => {
        return this.laning
    }
    getConsistency = () => {
        return this.consistency
    }
    
}
