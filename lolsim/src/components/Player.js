
import './table.css'
import {FaTimes} from 'react-icons/fa'

const Player = ({row, onDelete}) => {
    
    return (
            <tr {...row.getRowProps()}>
                {row.cells.map((cell)=>{
                    return (<td {...cell.getCellProps()}>    
                        {cell.render('Cell')}
                    </td>)
                })}
                <td>
                <FaTimes 
                    onClick={() => {onDelete(row.values); console.log(row)}}
                    style = {{flex:'center', color: 'red', cursor:'pointer'}}/>    
                </td>
                
            </tr>
    )
}
/**

 */
export default Player
