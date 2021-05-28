import Button from './Button'
import PropTypes from 'prop-types'
import {useLocation} from 'react-router-dom'

const Header = ({showAdd, onAdd}) => {
    const location = useLocation()
    return (
        <header className='header'>
            <h1>Players</h1>
            {<Button onClick={onAdd} color={!   showAdd ? 'red' : 'green'}
             text={showAdd ?  'Close': 'Add'} />}
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