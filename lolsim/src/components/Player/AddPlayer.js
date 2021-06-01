import {useState} from 'react'


const AddPlayer = ({onAdd}) => {
    const[role, setRole] = useState('MID')
    const[name, setName] = useState('')
    const[age, setAge] = useState(17)
    const[OVR, setOVR] = useState(20)
    const[POT, setPOT] = useState(100)
    const[region, setRegion] = useState('US')

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


        onAdd({name, role, age, OVR, POT, region})

        setRole('MID')
        setName('test')
        setAge(17)
        setOVR(20)
        setPOT(100)
        setRegion('US')
    }
    return (
        <div className = ''>
        <form className='add-form' onSubmit={onSubmit}>
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
            <input type='submit' className='button' value='Save Player' style = {{backgroundColor: 'red'}}></input>
        </form>
        </div>
    )
}

export default AddPlayer
