import { useInsertionEffect, useState } from 'react'
import {Link} from 'react-router-dom' //prevents page reloading
import Button from './components/Button'

const Landing = () => {

    let calculateRoute = () => {
        return !window.clicked ? "/LeagueManagerSimulator/" : "/LeagueManagerSimulator/Test"
    }
    return (
        <>
        <Link to="/LeagueManagerSimulator/"><Button color="purple" text="Home"></Button></Link>
        <Link to="/LeagueManagerSimulator/Teams"><Button color="purple" text="Teams"></Button></Link>
        <Link to="/LeagueManagerSimulator/Players"><Button color="purple" text="Players"></Button></Link>
        <Link to={calculateRoute()}><Button color="purple" text="Test"></Button></Link>
       </>
    )
}

export default Landing
