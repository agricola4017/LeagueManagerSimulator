const ColumnFilter = ({column}) => {
    const {filterValue, setFilter} = column
    return (
        <span>
            Search: {' '}
            <input value = {filterValue || ''} 
            onChange= {e=> setFilter(e.target.value)} />
        </span>
    )
}

export default ColumnFilter
