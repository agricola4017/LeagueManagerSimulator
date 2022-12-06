import ConstRow from './ConstRow'
import { useTable } from 'react-table'
import  { useMemo } from 'react'
import '../table.css'

const PrimitiveTable = ( {elements, tableColumns} ) => {

    const columns = useMemo(() => tableColumns, [tableColumns])
    //use GROUPED_columns to group
    
    const data = useMemo(() => elements, [elements]) 

    const autoResetPage = false;

    const tableInstance = useTable({
        columns, data,  autoResetPage //defCol shortcuts filter prop in playerocls
    })

    //players = JSON.parse(JSON.stringify(players))

    const {getTableProps, getTableBodyProps, headerGroups, rows,
        footerGroups, prepareRow} = tableInstance

    return (
        <>
        <table className = 'table' {...getTableProps()}>
            <thead >
                {
                    headerGroups.map((headerGroup)=> ( 
                    <tr {...headerGroup.getHeaderGroupProps()}> 
                    {
                        headerGroup.headers.map((col) =>(
                            <th {...col.getHeaderProps()}>
                                {col.render('Header')}
                            </th>
                        ))
                    }
                    </tr>
                    ))
                }      
            </thead>
            <tbody {...getTableBodyProps()}>
                {
                    rows.map(row=> {
                        prepareRow(row)
                        return (
                            <ConstRow row={row} key={row.id}/>
                        )
                    })
                }
                
            </tbody>
            
        </table>
        </>
    )

/*     <tfoot>
                {
                    footerGroups.map(footerGroup => (
                        <tr {...footerGroup.getFooterGroupProps()}>
                            {
                                footerGroup.headers.map(column=>(
                                    <td {...column.getFooterProps()}>
                                        {
                                        column.render('Footer')
                                        }
                                    </td>
                                ))
                            }
                        </tr>
                    ))
                    
                }
            </tfoot> */
}

export default PrimitiveTable
