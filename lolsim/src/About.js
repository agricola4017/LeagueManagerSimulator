import {Link} from 'react-router-dom' //prevents page reloading

const About = () => {
    return (
        <footer>
            <h4> Version 1.0.0</h4>
            <Link to="/LeagueManagerSimulator">Go Back</Link>
        </footer>
    )
}

export default About
