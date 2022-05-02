import PlayerRow from './PlayerRow'
import {PlayerColumns} from './PlayerColumns'
import {useTable, useSortBy, useGlobalFilter, useFilters, usePagination} from 'react-table'
import  {useMemo } from 'react'
import GlobalFilter from '../tableComponents/GlobalFilter'
import '../table.css'
import ColumnFilter from '../tableComponents/ColumnFilter'
import ButtonPanelTable from '../tableComponents/ButtonPanelTable'
import PageDirectoryTable from './PageDirectoryTable'
import ColToggle from '../tableComponents/ColToggle'

const PlayersTable = ( {players, onDelete, onUpdate} ) => {

    const columns = useMemo(() => PlayerColumns, [])
    //use GROUPED_columns to group
    
    const data = useMemo(() => players, [players]) 

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
        pageOptions, prepareRow, gotoPage, pageCount, setPageSize, 
        state, setGlobalFilter, allColumns, getToggleHideAllColumnsProps} = tableInstance

    const { globalFilter, pageIndex, pageSize } = state

    return (
        <>
        <div className=''>
            <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} canPrev={canPreviousPage} canNext={canNextPage}/>
            <ColToggle hideAll={getToggleHideAllColumnsProps} allColumns={allColumns}/>
        </div>
        <div>
            <ButtonPanelTable canPrev={canPreviousPage} canNext={canNextPage}
            pageCount={pageCount} goto={gotoPage} next={nextPage} prev={previousPage}/>
            <PageDirectoryTable options={pageOptions.length} pageIndex={pageIndex} gotoPage={gotoPage} pageSize={pageSize} setPageSize={setPageSize}/>
        </div>
        <table className = 'table' {...getTableProps()}>
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

                        <th>
                            Edit 
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
                            <PlayerRow row={row} key={row.id} onDelete={onDelete} onUpdate={onUpdate}/>
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

                            <td>
                            Edit
                            </td>
                        </tr>
                    ))
                    
                }
            </tfoot>
        </table>
        <div>
            <ButtonPanelTable canPrev={canPreviousPage} canNext={canNextPage}
            pageCount={pageCount} goto={gotoPage} next={nextPage} prev={previousPage}/> 
            <PageDirectoryTable options={pageOptions.length} pageIndex={pageIndex} gotoPage={gotoPage} pageSize={pageSize} setPageSize={setPageSize}/>
        </div>
        </>
    )
}

export default PlayersTable
