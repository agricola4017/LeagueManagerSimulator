import Row from './Row'
import {useTable, useSortBy, useGlobalFilter, useFilters, usePagination, useColumnOrder} from 'react-table'
import { DndProvider, useDrag, useDrop } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import {useMemo} from 'react'
import GlobalFilter from '../tableComponents/GlobalFilter'
import '../table.css'
import ColumnFilter from '../tableComponents/ColumnFilter'
import ButtonPanelTable from '../tableComponents/ButtonPanelTable'
import PageDirectoryTable from './PageDirectoryTable'
import ColToggle from '../tableComponents/ColToggle'

const ItemType = {
    COLUMN: 'column',
};

const DraggableHeader = ({ column, index, moveColumn }) => {
    const {key: headerKey, ...headerProps} = column.getHeaderProps() 
    const [, ref] = useDrag({
        type: ItemType.COLUMN,
        item: { index },
    });

    const [, drop] = useDrop({
        accept: ItemType.COLUMN,
        hover(item) {
            if (item.index !== index) {
                moveColumn(item.index, index);
                item.index = index; // Update the index to the new position
            }
        },
    });

    return (
        <th ref={(node) => ref(drop(node))} {...headerProps}>
            {column.render('Header')}
        </th>
    );
};

const Table = ({elements, onDelete, onUpdate, tableColumns}) => {
    const columns = useMemo(() => tableColumns, [tableColumns])
    const data = useMemo(() => elements, [elements]) 

    const defaultColumn = useMemo(() => ({
        Filter: ColumnFilter
    }), [])

    const autoResetPage = false

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        footerGroups,
        page,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        pageOptions,
        prepareRow,
        gotoPage,
        pageCount,
        setPageSize,
        state,
        setGlobalFilter,
        allColumns,
        getToggleHideAllColumnsProps,
        setColumnOrder,
    } = useTable(
        {
            columns,
            data,
            defaultColumn,
            autoResetPage
        },
        useFilters,
        useGlobalFilter,
        useSortBy,
        usePagination,
        useColumnOrder
    )

    const moveColumn = (fromIndex, toIndex) => {
        const newOrder = [...columns];
        const [movedColumn] = newOrder.splice(fromIndex, 1);
        newOrder.splice(toIndex, 0, movedColumn);
        setColumnOrder(newOrder.map(col => col.accessor));
    };

    const {globalFilter, pageIndex, pageSize} = state
    const {key: tableKey, ...tableProps} = getTableProps()
    const {key: bodyKey, ...bodyProps} = getTableBodyProps()

    return (
        <>
            <div className='table-controls'>
                <GlobalFilter
                    filter={globalFilter}
                    setFilter={setGlobalFilter}
                    canPrev={canPreviousPage}
                    canNext={canNextPage}
                />
                <ColToggle
                    hideAll={getToggleHideAllColumnsProps()}
                    allColumns={allColumns}
                />
            </div>
            <div className='table-navigation'>
                <ButtonPanelTable
                    canPrev={canPreviousPage}
                    canNext={canNextPage}
                    pageCount={pageCount}
                    goto={gotoPage}
                    next={nextPage}
                    prev={previousPage}
                />
                <PageDirectoryTable
                    options={pageOptions.length}
                    pageIndex={pageIndex}
                    gotoPage={gotoPage}
                    pageSize={pageSize}
                    setPageSize={setPageSize}
                />
            </div>
            <table className='table' {...tableProps}>
                <thead>
                    {headerGroups.map((headerGroup, groupIndex) => {
                        const {key: headerGroupKey, ...headerGroupProps} = headerGroup.getHeaderGroupProps()
                        return (
                            <tr key={headerGroupKey} {...headerGroupProps}>
                                {headerGroup.headers.map((column, columnIndex) => {
                                    const {key: headerKey, ...headerProps} = column.getHeaderProps()
                                    const {key: sortKey, ...sortByProps} = column.getSortByToggleProps()
                                    return (
                                        <th key={headerKey} {...headerProps}>
                                            <div className="header-content" {...sortByProps}>
                                                {column.render('Header')}
                                                <span>
                                                    {column.isSorted
                                                        ? column.isSortedDesc
                                                            ? '🔽'
                                                            : ' 🔼'
                                                        : <span style={{visibility: 'hidden'}}>🔼</span>
                                                    }
                                                </span>
                                            </div>
                                            <div
                                                onClick={(e) => e.stopPropagation()}
                                                className="filter-content"
                                            >
                                                {column.canFilter ? column.render('Filter') : null}
                                            </div>
                                        </th>
                                    )
                                })}
                                <th>Delete</th>
                                <th>Edit</th>
                            </tr>
                        )
                    })}
                </thead>
                <tbody {...bodyProps}>
                    {page.map((row, rowIndex) => {
                        prepareRow(row)
                        return (
                            <Row
                                key={`row-${row.id || rowIndex}`}
                                row={row}
                                onDelete={onDelete}
                                onUpdate={onUpdate}
                            />
                        )
                    })}
                </tbody>
                <tfoot>
                    {footerGroups.map((footerGroup, groupIndex) => {
                        const {key: footerGroupKey, ...footerGroupProps} = footerGroup.getFooterGroupProps()
                        return (
                            <tr key={footerGroupKey} {...footerGroupProps}>
                                {footerGroup.headers.map((column, columnIndex) => {
                                    const {key: footerKey, ...footerProps} = column.getFooterProps()
                                    return (
                                        <td key={footerKey} {...footerProps}>
                                            {column.render('Footer')}
                                        </td>
                                    )
                                })}
                                <td>Delete</td>
                                <td>Edit</td>
                            </tr>
                        )
                    })}
                </tfoot>
            </table>
            <div className='table-navigation'>
                <ButtonPanelTable
                    canPrev={canPreviousPage}
                    canNext={canNextPage}
                    pageCount={pageCount}
                    goto={gotoPage}
                    next={nextPage}
                    prev={previousPage}
                />
                <PageDirectoryTable
                    options={pageOptions.length}
                    pageIndex={pageIndex}
                    gotoPage={gotoPage}
                    pageSize={pageSize}
                    setPageSize={setPageSize}
                />
            </div>
        </>
    )
}

export default Table
