import Player from '../components/Player'
import Button from './Button'
import {PlayerColumns} from '../components/PlayerColumns'
import {useTable, useSortBy, useGlobalFilter, useFilters, usePagination} from 'react-table'
import  {useMemo } from 'react'
import GlobalFilter from '../components/GlobalFilter'
import './table.css'
import ColumnFilter from '../components/ColumnFilter'

const Players = ( {players} ) => {

    const columns = useMemo(() => PlayerColumns, [])
    //use GROUPED_columns to group
    
    const data = useMemo(() => players, []) 

    const defaultColumn = useMemo(() => {
        return {
            Filter: ColumnFilter
        }
    }, [])

    const tableInstance = useTable({
        columns, data,  defaultColumn //defCol shortcuts filter prop in playerocls
    },useFilters, useGlobalFilter, useSortBy, usePagination)

    //players = JSON.parse(JSON.stringify(players))

    const {getTableProps, getTableBodyProps, headerGroups, 
        footerGroups,page, nextPage, previousPage, canNextPage, canPreviousPage,
        pageOptions, prepareRow, gotoPage, pageCount,state, setGlobalFilter} = tableInstance

    const { globalFilter } = state
    const {pageIndex} = state
    return (
        <>
        <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
        <table {...getTableProps()}>
            <thead >
                {
                    headerGroups.map((headerGroup)=> ( 
                    <tr {...headerGroup.getHeaderGroupProps()}> 
                    {
                        headerGroup.headers.map((col) =>(
                            <th {...col.getHeaderProps(col.getSortByToggleProps())}>
                                {col.render('Header')}
                                <div> {col.canFilter ? col.render('Filter') : null}</div>
                                <span>
                                    {col.isSorted ? (col.isSortedDesc ? '🔽' : ' 🔼') :
                                     <span style={{visibility: 'hidden'}}>'🔼'</span>}
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
                    page.map(row=> {
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
        <div>
            <span>
                Page{' '}
                <strong>
                    {pageIndex + 1} of {pageOptions.length}
                </strong>{' '} 
                <span style={{float:'right'}}>
                    <Button class='button' onClick={() => gotoPage(0)} disable={!canPreviousPage} text={'<<'} />
                    <Button class='button' onClick={() => previousPage()} disable={!canPreviousPage} text='Prev'/>
                    <Button class='button' onClick={()=> nextPage()} disable={!canNextPage} text='Next' />
                    <Button class='button' onClick={()=>gotoPage(pageCount-1)} disable={!canNextPage} text={'>>'} />
                </span>
            </span>
        </div>
        </>
        //{players.map( (player) => (<Player key={player.id} player={player} />))}
    )
}

export default Players
