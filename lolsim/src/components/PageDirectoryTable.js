const PageDirectoryTable = ({pageIndex, gotoPage, pageSize, setPageSize, options}) => {
    return (
        <span className='buttonPanelFriend input-control-form'>
             Page{' '}
            <strong>
                {pageIndex + 1} of {options}
            </strong>{' '} 
            | Go to page: {' '} 
            <input className='pageNav inputnumber' type='number' defaultValue={pageIndex + 1} 
            onChange={e => {
                    const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0
                    gotoPage(pageNumber)
            }} style = {{width: '10%'}}
            />
            {' '} | Show {' '}
            <select style={{width:"10%"}} value ={pageSize} onChange={e=>  
            setPageSize(Number(e.target.value))}>
                {
                    [3, 5, 10, 25, 50, 100, 200].map(pageSize => (
                        <option key={pageSize} value={pageSize}>
                            {pageSize}
                        </option>
                ))
                }
            </select>
        </span> 
    )
}

export default PageDirectoryTable
