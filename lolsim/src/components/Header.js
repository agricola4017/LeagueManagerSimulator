import Button from "./Button"
import { timeAdvance, currentStatus } from "../gamelogic/game"
 //disable button if event handler fails
const Header = () => {
    return (
        <header className="topbar">
            <Button text="Play" onClick={timeAdvance}></Button>
            <h1>{currentStatus}</h1>
        </header>
    )
}

export default Header
