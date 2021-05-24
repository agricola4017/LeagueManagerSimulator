import Player from '../components/Player'
import {PlayerColumns} from '../components/PlayerColumns'
import {useTable, useSortBy} from 'react-table'
import  {useMemo } from 'react'
import './table.css'

const SortingPlayers = ( {players} ) => {

    const columns = useMemo(() => PlayerColumns, [])
    //use GROUPED_columns to group
    
    const data = useMemo(() => players, []) 

    const tableInstance = useTable({
        columns, data
    }, useSortBy)

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
                            <th {...col.getHeaderProps(col.getSortByToggleProps())}>
                                {col.render('Header')}
                                <span>
                                    {col.isSorted ? (col.isSortedDesc ? '🔽' : ' 🔼') : ''}
                                </span>
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

export default SortingPlayers
