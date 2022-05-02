import {useState} from 'react'


const Player = ({role, name, age, OVR, POT, region, askingFor, KDA}) => {
    const[role, setRole] = useState('MID')
    const[name, setName] = useState('')
    const[age, setAge] = useState(17)
    const[OVR, setOVR] = useState(20)
    const[POT, setPOT] = useState(100)
    const[region, setRegion] = useState('US')
    const[askingFor, setAskingFor] = useState(50)
    const[KDA, setKDA] = useState(0)
    }

export default Player
