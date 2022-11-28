import { regionEnum, roleEnum } from "./Enums";
import { randomizeIfNullIncl, randomizeIfNullCustom, randomNumber1} from "./functions";

export class Player {

    constructor (name, optional) {
        this.name = name
        this.age = randomizeIfNullCustom(optional["age"], 18, 30)
        this.region = optional["region"] !== null ? optional["region"] : regionEnum[randomNumber1(Object.keys(regionEnum).length)]
        this.role = optional["role"] !== null ? optional["role"] : roleEnum[randomNumber1(Object.keys(roleEnum).length)]
        this.OVR = randomizeIfNullIncl(optional["OVR"], 100)
        this.POT = randomizeIfNullIncl(optional["POT"], 100)
        this.askingFor = randomizeIfNullCustom(optional["askingFor"], 25, 100)
        this.team = optional["team"] !== null ? optional["team"]: "Free Agent"
        this.KDA = 0.00
        
        //addPlayer here?
    }

    getOVR = () => {
        return this.OVR
    }
}