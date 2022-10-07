import {Link} from 'react-router-dom' //prevents page reloading

const Landing = () => {
    return (
        <>
        <p>
            <Link to="/LeagueManagerSimulator/Teams">Teams</Link>
        </p>
        <p>
            <Link to="/LeagueManagerSimulator/Players">Players</Link>
       </p>
       </>
    )
}

export default Landing
