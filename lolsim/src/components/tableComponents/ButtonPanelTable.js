import Button from '../Button'

const ButtonPanelTable = ({ canPrev, canNext, pageCount, goto, prev, next }) => {
    return (
         <span className='floatright'>
            <Button class='button' onClick={() => goto(0)} disable={!canPrev} text={'<<'} />
            <Button class='button' onClick={() => prev()} disable={!canPrev} text='Prev'/>
            <Button class='button' onClick={()=> next()} disable={!canNext} text='Next' />
            <Button class='button' onClick={()=>goto(pageCount-1)} disable={!canNext} text={'>>'} />
        </span>
    )
}

export default ButtonPanelTable
