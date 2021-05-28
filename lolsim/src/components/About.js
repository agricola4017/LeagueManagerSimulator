import {Link} from 'react-router-dom' //prevents page reloading

const About = () => {
    return (
        <div>
            <h4> Version 1.0.0</h4>
            <Link to="/">Go Back</Link>
        </div>
    )
}

export default About
