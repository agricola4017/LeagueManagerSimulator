import { regionEnum, roleEnum } from "./Enums";
import { randomizeIfNullIncl, randomizeIfNullCustom, randomNumber1} from "./functions";

export class Player {

    constructor (name, optional) {
        this.name = name
        this.age = randomizeIfNullCustom(optional["age"], 18, 30)
        this.region = optional["role"] !== null ? optional["region"] : regionEnum[randomNumber1(Object.keys(regionEnum).length)]
        this.role = optional["role"] !== null ? optional["role"] : roleEnum[randomNumber1(Object.keys(roleEnum).length)]
        this.OVR = randomizeIfNullIncl(optional["OVR"], 100)
        this.POT = randomizeIfNullIncl(optional["POT"], 100)
        this.askingFor = randomizeIfNullCustom(optional["askingFor"], 25, 100)

        this.KDA = 0.00
        
    }

    getPlayers = function() {
        return this.players
    }

    addPlayer = function(player) {
        this.players.append(player)
    }
}