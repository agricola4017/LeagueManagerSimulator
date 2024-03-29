const ColumnFilter = ({column}) => {
    const {filterValue, setFilter} = column
    return (
        //Search: {' '}
        <span >
            <input className="inline" value = {filterValue || ''} 
            onChange= {
                e=> { 
                    //add multiple filtering, special numerical filtering
                    setFilter(e.target.value) 
                }
            } />
        </span>
    )
}

export default ColumnFilter
