import '../table.css'
import {FaTimes, FaPenSquare, FaPhoneSquare} from 'react-icons/fa'

const Row = ({row, onDelete, onUpdate}) => {
    const { key, ...rowProps } = row.getRowProps()
    
    return (
        <tr {...rowProps}>
            {row.cells.map(cell => {
                const { key, ...cellProps } = cell.getCellProps()
                return (
                    <td key={key} {...cellProps}>    
                        {cell.render('Cell')}
                    </td>
                )
            })}
            <td>
                <FaTimes 
                    onClick={() => onDelete(row.id)}
                    style={{flex: 'center', color: 'red', cursor: 'pointer'}}
                />    
            </td>
            <td>
                <FaPenSquare
                    onClick={() => onUpdate(row.values, row.id)}
                    style={{flex: 'center', color: 'blue', cursor: 'pointer'}}
                />    
            </td>
            <td>
                <FaPhoneSquare/>
            </td>
        </tr>
    )
}

/**
 
 */
export default Row
