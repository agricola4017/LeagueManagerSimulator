import PropTypes from 'prop-types'

const Button = ({color, text, onClick, disable}) => {
    return (
        <button 
            onClick = {onClick} 
            disabled = {disable}
            className='button'
            style = {{backgroundColor: color}}>
            <span>
                {text}
            </span>
        </button>
    )
}

Button.defaultProps = {
    color: 'steelblue'
}
Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
    disable: PropTypes.bool
}
export default Button
