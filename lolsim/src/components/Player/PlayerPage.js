import Table from '../tableComponents/Table'
import Header from './Header'
import { Donut } from '../Donut'
import AddPlayer from './AddPlayer'
import { PlayerColumns } from './PlayerColumns'
import Footer from '../Footer'
import { tempPlayers } from './objects/tempPlayers.js'
import { useState } from 'react'
import { loadPlayerJSON } from '../../data/loadJSON'


const PlayerPage = () => {

    let initPlayers = loadPlayerJSON(tempPlayers)

    const [players, setPlayers] = useState(
        initPlayers, []
      )
      const [showAddPlayer, setShowAddPlayer] = useState(false)
      const [showDonut, setShowDonut] = useState(false)
    
      const addPlayer = async(player) => {
        setPlayers(players => [...players, player])
      }

      const deletePlayer = async (id) => {
        players.splice(id, 1)
        setPlayers([...players])
      }
      

      const updatePlayer = async (playerValues, PlayerId) => {
        updatePlayerParams({role: playerValues["role"]})
        updatePlayerParams({name: playerValues["name"]})
        updatePlayerParams({age: playerValues["age"]})
        updatePlayerParams({OVR: playerValues["OVR"]})
        updatePlayerParams({POT: playerValues["POT"]})
        updatePlayerParams({region: playerValues["region"]})
        updatePlayerParams({id : PlayerId})
        setPlayerParams({...playerParams})
        setShowAddPlayer(true)
      }

      const changePlayer = async (player, id) => {
        players.splice(id, 1, player)
        setPlayers([...players])

        resetParams()
      }

      let resetParams = () => {
        setPlayerParams({})
      }

      /* const initPlayerParams = {changed: false}
      const [playerParams, updatePlayerParams] = useReducer( (state, updates) => 
        ({...state, ...updates}), {}) */

      let [playerParams, setPlayerParams] = useState();
      let updatePlayerParams = (updates) => {
        playerParams = {...playerParams, ...updates}
      }

    return (
        <div className ='container'>
            <Header onAdd={ () => setShowAddPlayer(!showAddPlayer)} showAdd={showAddPlayer} resetParams={resetParams} />
            {showAddPlayer && <AddPlayer onAdd={addPlayer} onUpdate={changePlayer} playerParams={playerParams} setShowAddPlayer={setShowAddPlayer}/>}
            <Donut onChange={() => setShowDonut(!showDonut)} showDonut={showDonut}/>
            {players.length > 0 ? <Table elements={players} onDelete={deletePlayer} onUpdate={updatePlayer} tableColumns={PlayerColumns}/> : 'No players to show'}
            <Footer/>
        </div>
    )
}

      /* useEffect(() => {
        const getPlayers  = async() => {
          const playersFromServer = await fetchPlayers() 
          setPlayers(playersFromServer)
        }
      }, []) */
    
      
      // not used, for server/client impl 
      /** 
      const fetchPlayers = async() => {
        const res = await fetch('http://localhost:8080/api/v1/player')
        const data = await res.json()
        return data
      }
    
      const fetchPlayer = async(id) => {
        const res = await fetch(`http://localhost:8080/api/v1/player/${id}`)
        const data = await res.json()
        return data
      }
    
      const addPlayerREST = async(player) => {
        console.log(player)
        const res = await fetch('http://localhost:8080/api/v1/player/', { method:'POST', 
        headers: {
          'Content-type': 'application/json'
        }, 
        body: JSON.stringify(player)
        })
    
        const data = await res.json
        setPlayers(...players, data)
      }
      
      const deletePlayerREST = async (id) => {
        await fetch(`http://localhost:8080/api/v1/player/${id}`, { method: 'DELETE',})
    
        setPlayers(players.filter((player) => player.id !== parseInt(id)))
        //console.log(players, id)
        //console.log(players.filter((player) => player.key !== parseInt(id)))
      } 
    */

export default PlayerPage
