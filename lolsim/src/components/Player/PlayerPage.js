
import Players from './Players'
import Header from './Header'
import {Donut} from '../Donut'
import AddPlayer from './AddPlayer'

import Footer from './Footer'
import {tempPlayers} from './tempPlayers.js'
import {useState, useEffect} from 'react'


const PlayerPage = () => {

    const [players, setPlayers] = useState(
        tempPlayers, []
      )
      const [showAddPlayer, setShowAddPlayer] = useState(false)
      const [showDonut, setShowDonut] = useState(false)
    
      /* useEffect(() => {
        const getPlayers  = async() => {
          const playersFromServer = await fetchPlayers() 
          setPlayers(playersFromServer)
        }
      }, []) */
    
      
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
    
      const addPlayer = async(player) => {
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
    
      const deletePlayer = async (id) => {
        await fetch(`http://localhost:8080/api/v1/player/${id}`, { method: 'DELETE',})
    
        setPlayers(players.filter((player) => player.id !== parseInt(id)))
        //console.log(players, id)
        //console.log(players.filter((player) => player.key !== parseInt(id)))
      } 

      const updatePlayer = async (id) => {
          console.log('update')
      }

    return (
        <div className ='container'>
            <Header onAdd={ () => setShowAddPlayer(!showAddPlayer)} showAdd={showAddPlayer}  />
            {showAddPlayer && <AddPlayer onAdd={addPlayer}/>}
            <Donut onChange={() => setShowDonut(!showDonut)} showDonut={showDonut}/>
            {players.length > 0 ? <Players players={players} onDelete={deletePlayer} onUpdate={updatePlayer}/> : 'No players to show'}
            <Footer/>
        </div>
    )
}

export default PlayerPage
