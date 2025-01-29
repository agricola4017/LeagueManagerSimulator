import PropTypes from 'prop-types'
import Button from '../Button'

const ButtonPanelTable = ({
    canPrev = false,
    canNext = false,
    pageCount = 1,
    goto = () => {},
    prev = () => {},
    next = () => {}
}) => {
    return (
        <span className='floatright'>
            <Button
                onClick={() => goto(0)}
                disable={!canPrev}
                text={'<<'}
            />
            <Button
                onClick={() => prev()}
                disable={!canPrev}
                text='Prev'
            />
            <Button
                onClick={() => next()}
                disable={!canNext}
                text='Next'
            />
            <Button
                onClick={() => goto(pageCount - 1)}
                disable={!canNext}
                text={'>>'} 
            />
        </span>
    )
}

ButtonPanelTable.propTypes = {
    canPrev: PropTypes.bool,
    canNext: PropTypes.bool,
    pageCount: PropTypes.number,
    goto: PropTypes.func,
    prev: PropTypes.func,
    next: PropTypes.func
}

export default ButtonPanelTable
