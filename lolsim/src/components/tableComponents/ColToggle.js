const ColToggle = ( { allColumns}) => {
    return (
        <span className='span'>
        {' '}
        | Toggle
        {
            allColumns.filter(col=> col.Header!=='Name').map(col=> (
                <label key={col.Header}>
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
