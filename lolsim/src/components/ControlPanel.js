import Button from "./Button"
import { timeAdvance, currentStatus, currentTime} from "../gamelogic/game"
import { useState } from "react"
import { initTestTeams } from "../gamelogic/simulation"

 //disable button if event handler fails
const ControlPanel = () => {

    let [status, setStatus] = useState(currentStatus)
    let [time, setTime] = useState(currentTime)

    let update = function() {
        timeAdvance();
        updateTimes();
    }
    
    let updateTimes = function() {
        setStatus(currentStatus)
        setTime(currentTime)
    }

    let test = () => {
        window.clicked=true
        initTestTeams()
    }

    return (
        <header className="topbar inline">
            <Button text="Play" onClick={update}></Button>
            <Button text="initTestTeams" onClick={test}></Button>
            <h1>{status}</h1>
            <h2>{time}</h2>
        </header>
    )
}

export default ControlPanel
