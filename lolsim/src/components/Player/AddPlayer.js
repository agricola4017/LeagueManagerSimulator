import { useState} from 'react'
import { Player } from '../../data/Player'
import { playerAttributesEnum } from '../../data/Enums'


/**
 * 
 * To-do: add animation after save player
 */
const AddPlayer = ({onAdd, onUpdate, playerParams, setShowAddPlayer}) => {

    //rewrite this
    let defaultAttribute = {
        "role": "MID",
        "name": "",
        "age": "17",
        "OVR": "20",
        "POT": "100",
        "region": "US",
        "askingFor": "50",
        "team": "F/A",
    }

    let updatePlayer = false
    Object.values(playerAttributesEnum).forEach((attribute) => {
        if (playerParams != null && playerParams[attribute]!= null) {
            defaultAttribute[attribute] = playerParams[attribute]
            updatePlayer=true
        }
    });

    const[role, setRole] = useState(defaultAttribute["role"])
    const[name, setName] = useState(defaultAttribute["name"])
    const[age, setAge] = useState(defaultAttribute["age"])
    const[OVR, setOVR] = useState(defaultAttribute["OVR"])
    const[POT, setPOT] = useState(defaultAttribute["POT"])
    const[region, setRegion] = useState(defaultAttribute["region"])
    const[askingFor] = useState(defaultAttribute["askingFor"])
    const[team, setTeam] = useState(defaultAttribute["team"])
    //const[KDA] = useState(0)

    const onSubmit = (e) => {
        e.preventDefault()

        //fix name
        if(!name) {
            alert('invalid name')
            return
        } else if (name.length > 15) {
            setName(name.slice(0,15))
        }

        //fix age
        if(age < 0) {
            alert('age invalid')
            return
        } else if (age > 1000) {
            setAge(100)
        }

        //fix OVR
        if(OVR < 0) {
            setOVR(0)
        } else if (OVR > 100) {
            setOVR(100)
        } else if (OVR > POT) {
            setOVR(POT)
        }

        //fix POT
        if (POT < OVR) {
            setPOT(OVR)
        }
        else if(POT < 0) {
            setPOT(0)
        } else if (POT > 100) {
            setPOT(100)
        }

        let optional = {"age":age, "region": region, "role": role, "OVR": OVR, "POT": POT, "askingFor": askingFor, "team": team}

        if (updatePlayer) {
            onUpdate(new Player(name, optional), playerParams["id"])
        } else {
            onAdd(new Player(name, optional))
        }
    }
    return (
        <div>
        <form className='add-form' onSubmit={ (e) => {onSubmit(e); setShowAddPlayer(false)}}>
            <div className='form-control'> 
                <label>Name</label>
                <input type='text' placeholder = 'Name' value={name} onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div className='form-control'> 
                <label>Age</label>
                <input className='inputnumber' type='number' placeholder = 'Age' value={age} onChange={(e)=>setAge(e.target.value)}/>
            </div>
            <div className='form-control'> 
                <label>Region</label>
                <select value={region} onChange={(e)=>setRegion(e.target.value)}>
                {
                    //region and role should be enums
                ['US', 'KR', 'CN', 'EU'].map(region => (
                        <option key={region} value={region}>
                            {region}
                        </option>
                ))}
                </select>
            </div>
            <div className='form-control'> 
                <label>Role</label>
                <select value={role} onChange={(e)=>setRole(e.target.value)}>
                {
                ['TOP', 'JGL', 'MID', 'ADC', 'SPT'].map(role => (
                        <option key={role} value={role}>
                            {role}
                        </option>
                ))}
                </select>
            </div>
            <div className='form-control'> 
                <label>OVR</label>
                <input className='inputnumber' type='number' placeholder = 'OVR' value={OVR} onChange={(e)=>setOVR(e.target.value)}/>
            </div>
            <div className='form-control'> 
                <label>POT</label>
                <input className='inputnumber' type='number' placeholder = 'POT' value={POT} onChange={(e)=>setPOT(e.target.value)}/>
            </div>
            <div className='form-control'> 
                <label>Team</label>
                <select value={team} onChange={(e)=>setTeam(e.target.value)}>
                {
                ['F/A', 'T1', 'UNC'].map(team => (
                        <option key={team} value={team}>
                            {team}
                        </option>
                ))}
                </select>
            </div>
            <input type='submit' className='button' value='Save Player' style = {{backgroundColor: 'red'}}></input>
        </form>
        {/*{showAdded && <h3>Added {name}</h3>}*/}
        </div>
    )
}

export default AddPlayer
