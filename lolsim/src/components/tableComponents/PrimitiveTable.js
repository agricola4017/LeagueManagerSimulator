import React, { useMemo } from 'react';
import { useTable } from 'react-table';
import ConstRow from './ConstRow';
import '../table.css';

const PrimitiveTable = ({ elements, tableColumns }) => {
  const columns = useMemo(() => tableColumns, [tableColumns]);
  const data = useMemo(() => elements, [elements]);
  
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable({
    columns,
    data,
    autoResetPage: false, 
  });

  return (
    <table className="table" {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()} key={column.id}>
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row);
          return <ConstRow row={row} key={row.id} />;
        })}
      </tbody>
    </table>
  );
};

export default PrimitiveTable;
