import Button from './Button'
import PropTypes from 'prop-types'

const Header = ({onClick}) => {
    return (
        <header className='header'>
            <h1>Players</h1>
            <Button onClick={onClick} color='red' text='Add'/>
        </header>
    )
}

export default Header

Header.defaultProps = {
    onClick: ()=> {
        console.log('clicked')
    }
}

Header.propTypes = {
    onClick: PropTypes.func
}