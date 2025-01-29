import Button from '../Button'
import PropTypes from 'prop-types'

const Header = ({
    showAdd = false,
    onAdd = () => console.log('Add clicked'),
    resetParams = () => {}
}) => {
    const handleClick = () => {
        onAdd()
        if (showAdd) {
            resetParams()
        }
    }

    return (
        <header className='header'>
            <h1>Players</h1>
            <Button
                onClick={handleClick}
                color={!showAdd ? 'red' : 'green'}
                text={showAdd ? 'Close' : 'Add'}
            />
        </header>
    )
}

Header.propTypes = {
    showAdd: PropTypes.bool,
    onAdd: PropTypes.func,
    resetParams: PropTypes.func
}

export default Header