import { useInsertionEffect, useState } from 'react'
import {Link, useNavigate} from 'react-router-dom' //prevents page reloading
import Button from './components/Button'

const Landing = () => {

    const navigate = useNavigate()

    let calculateRoute = () => {
        window.clicked ? navigate('/LeagueManagerSimulator/Test') : navigate('/LeagueManagerSimulator')
    }
    return (
        <>
        <Link to="/LeagueManagerSimulator/"><Button color="purple" text="Home"></Button></Link>
        <Link to="/LeagueManagerSimulator/Teams"><Button color="purple" text="Teams"></Button></Link>
        <Link to="/LeagueManagerSimulator/Players"><Button color="purple" text="Players"></Button></Link>
        <Button color="purple" text="Test" onClick={calculateRoute}></Button>
       </>
    )
}

export default Landing
