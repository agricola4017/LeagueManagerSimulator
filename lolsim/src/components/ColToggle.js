const ColToggle = ( {hideAll, allColumns}) => {
    return (
        <span className='span'>
        {' '}
        | Toggle
        {
            allColumns.filter(col=> col.Header!=='Name').map(col=> (
                <label>
                    {' '}
                    <input type='checkbox' {...col.getToggleHiddenProps()}/>
                    {' '}
                    {col.Header}
                    {' '}
                </label>
            ))
        }
        </span>
    )
}

export default ColToggle
