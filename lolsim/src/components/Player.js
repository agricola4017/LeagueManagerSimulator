
import './table.css'
import {FaTimes} from 'react-icons/fa'

const Player = ({row}) => {
    
    return (
            <tr {...row.getRowProps()}>
                {row.cells.map((cell)=>{
                    return (<td {...cell.getCellProps()}>    
                        {cell.render('Cell')}
                    </td>)
                })}
                <td>
                <FaTimes 
                    onClick={() => onDelete(row.id)}
                    style = {{flex:'center', color: 'red', cursor:'pointer'}}/>    
                </td>
                
            </tr>
    )
}
/**

 */


const onDelete = (id) => {
    console.log(`delete ${id}`)
    return 
}

export default Player
