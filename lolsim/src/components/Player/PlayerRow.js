
import '../table.css'
import {FaTimes, FaPenSquare, FaPhoneSquare} from 'react-icons/fa'

const PlayerRow = ({row, onDelete, onUpdate}) => {
    
    return (
            <tr {...row.getRowProps()}>
                {row.cells.map((cell)=>{
                    return (<td {...cell.getCellProps()}>    
                        {cell.render('Cell')}
                    </td>)
                })}
                <td>
                <FaTimes 
                    onClick={() => {onDelete(row.id); console.log(row)}}
                    style = {{flex:'center', color: 'red', cursor:'pointer'}}/>    
                </td>
                <td>
                <FaPenSquare
                    onClick={() => {onUpdate(row.id); console.log(row)}}
                    style = {{flex:'center', color: 'blue', cursor:'pointer'}}/>    
                </td>
                <td><FaPhoneSquare/></td>
                
            </tr>
    )
}
/**

 */
export default PlayerRow
