import Player from '../components/Player'
import {PlayerColumns} from '../components/PlayerColumns'
import {useTable} from 'react-table'
import  {useMemo } from 'react'
import './table.css'

const Players = ( {players} ) => {

    const columns = useMemo(() => PlayerColumns, [])
    //use GROUPED_columns to group
    
    const data = useMemo(() => players, []) 

    const tableInstance = useTable({
        columns, data
    })

    //players = JSON.parse(JSON.stringify(players))

    const {getTableProps, getTableBodyProps, headerGroups, footerGroups,rows, prepareRow} = tableInstance

    return (
        <table {...getTableProps()}>
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
                         <th>
                             Delete
                        </th>
                       
                    </tr>
                    ))
                }
                
            </thead>
            <tbody {...getTableBodyProps()}>
                {
                    rows.map(row=> {
                        prepareRow(row)
                        return (
                            <Player row={row} key={row.id}/>
                        )
                    })
                }
                
            </tbody>
            <tfoot>
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
                            <td>
                             Delete
                            </td>
                        </tr>
                    ))
                    
                }
            </tfoot>
        </table>

        //{players.map( (player) => (<Player key={player.id} player={player} />))}
    )
}

export default Players
