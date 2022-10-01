import Button from "./Button"
import { timeAdvance, currentStatus, currentTime} from "../gamelogic/game"
import { useState } from "react"

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

    return (
        <header className="topbar inline">
            <Button text="Play" onClick={update}></Button>
            <h1>{status}</h1>
            <h2>{time}</h2>
        </header>
    )
}

export default ControlPanel
