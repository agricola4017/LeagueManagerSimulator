import '../table.css'

const ConstRow = ({row}) => {
    
    return (
            <tr {...row.getRowProps()}>
                {row.cells.map((cell)=>{
                    return (<td {...cell.getCellProps()}>    
                        {cell.render('Cell')}
                    </td>)
                })}
            </tr>
    )
}

export default ConstRow
