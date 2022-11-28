import { regionEnum, roleEnum } from "./Enums";
import { randomizeIfNullIncl, randomizeIfNullCustom, randomNumber1} from "./functions";
import { OVR } from "./OVR"

export class testPlayer {

    constructor (name, optional) {
        this.name = name
        this.age = randomizeIfNullCustom(optional["age"], 18, 30)
        this.region = optional["region"] !== null ? optional["region"] : regionEnum[randomNumber1(Object.keys(regionEnum).length)]
        this.role = optional["role"] !== null ? optional["role"] : roleEnum[randomNumber1(Object.keys(roleEnum).length)]
        
        this.OVR = new OVR(randomizeIfNullIncl(optional["OVR"], 100), true, optional["OVR"])
        this.POT = randomizeIfNullIncl(optional["POT"], 100)
        this.askingFor = randomizeIfNullCustom(optional["askingFor"], 25, 100)
        this.team = optional["team"] !== null ? optional["team"]: "Free Agent"
        this.KDA = 0.00
        
    }

    getOVR = () => {
        return this.OVR
    }
}